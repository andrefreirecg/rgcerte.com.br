<?php

namespace Makersolucoes\Theme\Controller;

class ThemeOptionsController
{
    /**
     * Hooks WordPress
     */
    public function __construct()
    {
        add_action('after_setup_theme', [&$this, 'setup']);
    }

    /**
     * Sets up theme defaults and registers support for various WordPress features.
     *
     * Note that this function is hooked into the after_setup_theme hook, which
     * runs before the init hook. The init hook is too late for some features, such
     * as indicating support for post thumbnails.
     */
    public function setup()
    {
        /**
         * Make theme available for translation.
         * Translations can be filed in the /languages/ directory.
         */
        load_theme_textdomain('name_project', get_template_directory() . '/languages');

        /**
         * Declare support for title theme feature.
         */
        add_theme_support('title-tag');

        /**
         * Add support for Block Styles.
         * https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-support/
         */
        // add_theme_support('wp-block-styles'); //uncomment if using full site edition
        // add_editor_style('/dist/theme.css'); //uncomment if using full site edition

        /**
         * Add support for full and wide align images.
         */
        add_theme_support('align-wide');
    }
}
