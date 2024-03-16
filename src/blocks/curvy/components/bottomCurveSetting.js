import { ToggleControl,HorizontalRule,RangeControl } from '@wordpress/components';
import {  ColorPalette } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import metadata from '../block.json';

export const BottomCurveSetting = (props) => {
    return(
        <>
                        <HorizontalRule/>
                        <RangeControl 
                        min={0}
                        max={300}
                        value={props.attributes.bottomwidth || 100}
                        onChange={(newValue)=>{
                            props.setAttributes({
                                bottomwidth: parseInt(newValue)
                            })
                        }}
                        label={__('Width', metadata.textdomain )} />
                        
                        <RangeControl 
                        min={127}
                        max={300}
                        value={props.attributes.bottomheight || 0}
                        onChange={(newValue)=>{
                            props.setAttributes({
                                bottomheight: parseInt(newValue)
                            })
                        }}
                        label={__('Height', metadata.textdomain )} />
                    
                    <HorizontalRule/>
                    <span>
                        { __( 'Horizontal Flip', metadata.textdomain ) }
                    </span>
                    <ToggleControl onChange={(isChecked)=>{
                    props.setAttributes({
                        bottomflipX: isChecked
                    })
                    }} checked= {props.attributes.bottomflipX}/>
                    
                    
                
                    <HorizontalRule/>
                    <span>
                        { __( 'Vertical Flip', metadata.textdomain ) }
                    </span>
                    <ToggleControl onChange={(isChecked)=>{
                    props.setAttributes({
                        bottomflipY: isChecked
                    })
                    }} checked= {props.attributes.bottomflipY}/>
                    
                    
                
                    <HorizontalRule/>
                    <label>{__("Curve Color", metadata.textdomain)}</label>
                    <ColorPalette value={props.attributes.bottomcolor} 
                                  onChange={(newValue)=>{
                                    props.setAttributes({
                                        bottomcolor: newValue
                                    })
                                }}/>
                    
                    
                </>


    )

};