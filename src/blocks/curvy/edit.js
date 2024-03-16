/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import metadata from './block.json';
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps,InspectorControls,InnerBlocks } from '@wordpress/block-editor';
import { PanelBody,ToggleControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';


import { Curve } from "./components/curve";
import { TopCurveSetting } from './components/topCurveSettings';
import { BottomCurveSetting } from './components/bottomCurveSetting';


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */



export default function Edit(props) {
	console.log(props)
	const {className, ...blockProps} = useBlockProps();
	//console.log(className)

	return (
		<>

		<section className={`${className} alignfull`} {...blockProps} >
				{props.attributes.enabletopcurve &&<Curve 
				color={props.attributes.topcolor}
				flipX={props.attributes.topflipX}
				flipY={props.attributes.topflipY}
				width={props.attributes.topwidth}
				height={props.attributes.topheight}/> }
				<InnerBlocks/>
				{props.attributes.enablebottomcurve &&<Curve 
				color={props.attributes.bottomcolor}
				flipX={props.attributes.bottomflipX}
				flipY={props.attributes.bottomflipY}
				width={props.attributes.bottomwidth}
				height={props.attributes.bottomheight}/> }
		</section>

		<InspectorControls>

			<PanelBody title={ __( 'Top curve', metadata.textdomain ) }>
				<div style={{display: 'flex'}}></div>
				<span>
					{ __( 'Enable Top Curve', metadata.textdomain ) }
				</span>
				<ToggleControl onChange={(isChecked)=>{
					props.setAttributes({
						enabletopcurve: isChecked
					})
				}} checked= {props.attributes.enabletopcurve}/>
				
				{props.attributes.enabletopcurve && (
					<TopCurveSetting 
					attributes={props.attributes}
					setAttributes={props.setAttributes}
					/>
				)}

				
			</PanelBody>
			
			<PanelBody title={ __( 'Bottom curve', metadata.textdomain ) }>
				<div style={{display: 'flex'}}></div>
				<span>
					{ __( 'Enable Bottom Curve', metadata.textdomain ) }
				</span>
				<ToggleControl onChange={(isChecked)=>{
					props.setAttributes({
						enablebottomcurve: isChecked
					})
				}} checked= {props.attributes.enablebottomcurve}/>
				
				{props.attributes.enablebottomcurve && (
					<BottomCurveSetting 
					attributes={props.attributes}
					setAttributes={props.setAttributes}
					/>
				)}

				
			</PanelBody>
			
		</InspectorControls>
		</>
	);
}
