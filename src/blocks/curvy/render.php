<?php
$block_wrapper_attributes = get_block_wrapper_attributes(
    [
      'class' => 'alignfull'  
    ]
);
$normalpath = "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z";
$invertedpath = "M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z";

//wp_send_json($content);
$topTransform ="scaleX(". ($attributes['topflipX'] ? "1" : "-1") .") rotate(" . ($attributes['topflipY'] ? "180deg" : "0") .")";
?>
<div <?php echo $block_wrapper_attributes; ?> >
<div class="curve top-curve" style = "transform: <?php echo $topTransform; ?>; height: <?php echo $attributes['topheight']?>px; width: <?php echo $attributes['topwidth'] ?>%;">
    <svg style = "height: <?php echo $attributes['topheight']?>px; width: <?php echo $attributes['topwidth'] ?>%" preserveAspectRatio="none" viewBox="0,0,1200,120"  >
        <path fill="<?php echo $attributes['topcolor'] ?? '#f9f9f9' ?>" d="<?php echo $attributes[topflipY] ? $invertedpath : $normalpath; ?>" > </path>
    </svg>
</div>
    <?php 
        echo $content; 
       // wp_send_json($attributes);
    ?>
 <div class="curve bottom-curve" style = "height: <?php echo $attributes['bottomheight']?>px; width: <?php echo $attributes['bottonwidth'] ?>%;">
    <svg style = "height: <?php echo $attributes['bottomheight']?>px; width: <?php echo $attributes['bottomwidth'] ?>%" preserveAspectRatio="none" viewBox="0,0,1200,120"  >
        <path fill="<?php echo $attributes['bottomcolor'] ?? '#f9f9f9' ?>" d="<?php echo $attributes[bottomFlipY] ? $invertedpath : $normalpath; ?>" > </path>
    </svg>
</div>   
    
</div>