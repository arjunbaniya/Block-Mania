import { useBlockProps,
  useInnerBlocksProps 
 } from '@wordpress/block-editor';
export default function Save(){
  const blockProps = useBlockProps.save();
  const innerBlocksProps= useInnerBlocksProps.save(blockProps);

  return innerBlocksProps.children;
 
}
//console.log($attributes);