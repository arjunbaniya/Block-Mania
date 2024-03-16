<?php
$block_wrapper_attributes = get_block_wrapper_attributes();

$post_url = '#'; // Default value in case linkedPost is not set.

if (isset($attributes['linkedPost'])) {
    $post_url = get_permalink($attributes['linkedPost']);
}
?>
<a href="<?php echo esc_url($post_url); ?>" <?php echo $block_wrapper_attributes; ?>>
    <?php echo esc_html($attributes['labelText']); ?>
</a>
