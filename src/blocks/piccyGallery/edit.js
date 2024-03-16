import { useBlockProps, InnerBlocks, BlockControls,useInnerBlocksProps } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton, Icon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import metadata from './block.json';
import { useState } from '@wordpress/element';
import './editor.scss';

export default function Edit(props) {
    const blockProps = useBlockProps();
	const innerBlocksProps= useInnerBlocksProps({
		className:"piccy-gallery-inner-blocks"
	}, {
		allowedBlocks: ["block-mania/piccy-image"]

	});
    const [editMode, setEditMode] = useState(true);

    return (
        <>
            <div {...blockProps}>
                {!!editMode && (
                    <div className="edit-mode">
                        <span className="piccy-label">
                            {__('Piccy Gallery', metadata.textdomain)}
                        </span>

					<div {...innerBlocksProps}/>

					</div>

                )}

                {!editMode && (
                    <div className="preview-mode">preview mode</div>
                )}
            </div>
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton
                        icon={editMode ? <Icon icon="welcome-view-site" /> : <Icon icon="edit" />}
                        label={editMode ? __('Preview Piccy Gallery', metadata.textdomain) : __('Edit Piccy Gallery', metadata.textdomain)}
                        onClick={() => {
                            setEditMode((prevState) => !prevState);
                        }}
                    />
                </ToolbarGroup>
            </BlockControls>
        </>
    );
}
