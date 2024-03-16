<?php
use BlockMania\Block_mania;

$blockGap = Block_mania::convert_custom_properties($attributes['style']['spacing']['blockGap'] ?? 0);
// wp_send_json($block_gap);

$block_wrapper_attributes = get_block_wrapper_attributes(
    [
        'style' => 'gap:' . $blockGap . '; justify-content: ' . $attributes['JustifyContent']
    ]
);
?>
<div <?php echo $block_wrapper_attributes; ?>>
    <?php echo $content; ?>
</div>
