<?php
/**
 * Plugin Name:       Block Mania
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            arjun
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       block-mania
 *
 * @package           create-block
 */

namespace BlockMania;

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

class Block_mania {
    public static function init() {
        add_action( 'init', function() {
            add_filter( 'block_categories_all', function( $categories ) {
                array_unshift( $categories, [
                    'slug'  => 'block-mania',
                    'title' => 'Block Mania'
                ]);
                return $categories;
            });

            register_block_type( __DIR__ . '/build/blocks/curvy' );
            register_block_type( __DIR__ . '/build/blocks/clickyGroup' );
            register_block_type( __DIR__ . '/build/blocks/clickyButton' );
            register_block_type( __DIR__ . '/build/blocks/piccyGallery' );
			register_block_type( __DIR__ . '/build/blocks/piccyImage' );

        });
    }

    public static function convert_custom_properties($value) {
        $prefix     = 'var:';
        $prefix_len = strlen($prefix);
        $token_in   = '|';
        $token_out  = '--';
        if (str_starts_with($value, $prefix)) {
            $unwrapped_name = str_replace(
                $token_in,
                $token_out,
                substr($value, $prefix_len)
            );
            $value = "var(--wp--$unwrapped_name)";
        }

        return $value;
    }
}

Block_mania::init(); // Corrected the function call to init() from int()
