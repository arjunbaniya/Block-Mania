import { useBlockProps,
        useInnerBlocksProps,
        BlockControls,
        JustifyContentControl,
       } from '@wordpress/block-editor';
import "./editor.scss";
import { parseValue } from '../../utils/parseValue';

export default function Edit(props) {
   // console.log(props);
    const blockGap = parseValue(props.attributes.style?.spacing?.blockGap ||"")
    const blockAlign = props.attributes.justifyContent;

    //alert(blockAlign);
    const blockProps = useBlockProps(
        {
            style:{
                gap: blockGap,
                justifyContent: blockAlign === 'left' || blockAlign === 'right' ? blockAlign : 'center'
            },
        }
    );
    const innerBlocksProps= useInnerBlocksProps(blockProps, {
        template: [["block-mania/clicky-button", {}]],
        allowedBlocks: ["block-mania/clicky-button"],
    });
    
    return (
        <>
        <BlockControls>
            <JustifyContentControl
                value={props.attributes.JustifyContent} // Initial value based on block's attribute
                allowedControls={['left', 'center', 'right']} // Users can select from these values
                onChange={(newValue) => {
                    // Update the block's attributes when the user selects a new value
                    props.setAttributes({
                        justifyContent: newValue, // Update justifyContent attribute
                    });
                }}
            />

        </BlockControls>
            <div {...innerBlocksProps}>
          
            </div>
        </>
    );
    
}
