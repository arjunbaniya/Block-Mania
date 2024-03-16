import { ToggleControl,HorizontalRule,RangeControl } from '@wordpress/components';
import {  ColorPalette } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import metadata from '../block.json';

export const TopCurveSetting = (props) => {
    return(
        <>
                        <HorizontalRule/>
                        <RangeControl 
                        min={100}
                        max={300}
                        value={props.attributes.topwidth || 100}
                        onChange={(newValue)=>{
                            props.setAttributes({
                                topwidth: parseInt(newValue)
                            })
                        }}
                        label={__('Width', metadata.textdomain )} />
                        
                        <RangeControl 
                        min={127}
                        max={300}
                        value={props.attributes.topheight || 0}
                        onChange={(newValue)=>{
                            props.setAttributes({
                                topheight: parseInt(newValue)
                            })
                        }}
                        label={__('Height', metadata.textdomain )} />
                    
                    <HorizontalRule/>
                    <span>
                        { __( 'Horizontal Flip', metadata.textdomain ) }
                    </span>
                    <ToggleControl onChange={(isChecked)=>{
                    props.setAttributes({
                        topflipX: isChecked
                    })
                    }} checked= {props.attributes.topflipX}/>
                    
                    
                
                    <HorizontalRule/>
                    <span>
                        { __( 'Vertical Flip', metadata.textdomain ) }
                    </span>
                    <ToggleControl onChange={(isChecked)=>{
                    props.setAttributes({
                        topflipY: isChecked
                    })
                    }} checked= {props.attributes.topflipY}/>
                    
                    
                
                    <HorizontalRule/>
                    <label>{__("Curve Color", metadata.textdomain)}</label>
                    <ColorPalette value={props.attributes.topcolor} 
                                  onChange={(newValue)=>{
                                    props.setAttributes({
                                        topcolor: newValue
                                    })
                                }}/>
                    
                    
                </>


    )

};