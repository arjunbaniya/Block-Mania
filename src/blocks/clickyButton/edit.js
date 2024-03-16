import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components'; // Corrected import path
import { useSelect } from '@wordpress/data';

export default function Edit(props) {
    // Fetch post types using useSelect hook
    const postTypes = useSelect((select) => {
        const data = select('core').getEntityRecords('root', 'postType', {
            per_page: -1
        });
        return data?.filter(item => item.visibility && item.visibility.show_in_nav_menus && item.visibility.show_ui);
    });
    //console.log(postTypes);
    //feteh post
    const posts = useSelect((select) => {
        const data = select('core').getEntityRecords("postType", props.attributes.postType, {
            per_page: -1
        });
        return data;
    }, [props.attributes.postType]);
    
    console.log(posts);
    


    // Block properties
    const blockProps = useBlockProps();

    return (
        <>
            <InspectorControls>
                <PanelBody title="Destination">
                    
                    {/* Select control for post types */}
                    <SelectControl
                        type='label'
                        value={props.attributes.postType}
                        onChange={(newValue)=> {
                            props.setAttributes({
                                postType: newValue,
                            })
                        }}
                        options={[
                            {
                                label:`Select a post type...`,
                                value: ''
                            },
                            ...(postTypes || []).map(postType => ({
                                label: postType?.labels?.singular_name,
                                value: postType.slug
                            }))
                        ]}
                    />
                    
                    {!!props.attributes.postType &&
                    <SelectControl
                        lable ={`Linked ${props.attributes.postType}`}
                        value={props.attributes.linkedPost}
                        onChange={(newValue)=> {
                            props.setAttributes({
                                linkedPost: newValue ? parseInt(newValue) : null,

                            })
                        }}
                        options={[
                            {
                                label: `Select a ${props.attributes.postType} to link to `,
                                value: '',
                            },
                            ...(posts || []).map((post) => ({
                                label: post.slug,
                                value: post.id
                            }))
                        ]}
                    />  
                    }
                </PanelBody>
            </InspectorControls>

            {/* Wrapper div with block properties */}
            <div {...blockProps}>
                {/* RichText component for button text */}
                <RichText
                    placeholder="Button text"
                    value={props.attributes.labelText}
                    allowedFormats={[]} // Prevents formatting options
                    multiline={false} // Disables multiline
                    onSplit={() => {}} // No split action
                    onReplace={() => {}} // No replace action
                    onChange={newValue => {
                        // Update labelText attribute
                        props.setAttributes({
                            labelText: newValue
                        });
                    }}
                />
            </div>
        </>
    );
}
