import { useBlockProps, MediaUploadCheck, MediaUpload } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import './editor.scss';
import metadata from "../piccyGallery/block.json";
import {useSelect} from '@wordpress/data';
export default function Edit(props) {
	const blockProps = useBlockProps();
	const image= useSelect((select)=> {
	const data =select("core").getEntityRecord("postType","attachment", props.attributes.imageId);
		return data;
	},[props.attributes.imageId]);

	const imageSelected= !!props.attributes.imageId && !!image?.source_url;

	console.log(image);

	return (
		<div {...blockProps}>
		{imageSelected &&(
			<img 
				style={{display:"block", height:150, width:'100%', objectFit:"cover"}}
				src={image.source_url}
			/>	
			)	}
			{!imageSelected &&
			  <div style={{display:"block", height:150, width:'100%', objectFit:"cover", background:'#fff'}} />
			}
			<MediaUploadCheck>
				<MediaUpload
					allowedTypes={['image']}
					render={({ open }) =>{
						return(
						<button className='media-select' onClick={open}>
							{imageSelected ? __('Replace image', metadata.textdomain) : __('Select an image', metadata.textdomain)}
						</button>
					);
					}}
					value={props.setAttributes.imageId}
					onSelect={(item)=>{
						props.setAttributes({
							imageId: item.id,
						});
					}}
				/>
			</MediaUploadCheck>
		</div>
	);
}
