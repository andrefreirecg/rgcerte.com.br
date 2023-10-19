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


// Define as labels do custom post type
$labels = array(
    'name' => 'Equipe',
    'slug' => 'equipe',
    'singular_name' => 'Equipe',
    'add_new' => 'Adicionar Novo',
    'add_new_item' => 'Adicionar Novo Membro ',
    'edit_item' => 'Editar Membro',
    'new_item' => 'Novo Membro',
    'view_item' => 'Ver Membro',
    'search_items' => 'Pesquisar por Membro',
    'not_found' => 'Nenhum membro encontrado',
    'not_found_in_trash' => 'Nenhum membro encontrado na lixeira',
  );
  
  // Define as configurações do custom post type
  $args = array(
    'labels' => $labels,
    'show_in_rest' => true,
    'public' => true,
    'has_archive' => true,
    'supports' => array('title', 'editor', 'thumbnail'),
  );
  
  // Registra o custom post type
  register_post_type('Equipe', $args);
  $labels = array(
    'name' => 'Depoimento',
    'slug' => 'depoimento',
    'singular_name' => 'Depoimento',
    'add_new' => 'Adicionar Novo',
    'add_new_item' => 'Adicionar Novo Depoimento ',
    'edit_item' => 'Editar Depoimento',
    'new_item' => 'Novo Depoimento',
    'view_item' => 'Ver Depoimento',
    'search_items' => 'Pesquisar por Depoimento',
    'not_found' => 'Nenhum depoimento encontrado',
    'not_found_in_trash' => 'Nenhum depoimento encontrado na lixeira',
  );
  
  // Define as configurações do custom post type
  $args = array(
    'labels' => $labels,
    'show_in_rest' => true,
    'public' => true,
    'has_archive' => true,
    'supports' => array('title', 'editor', 'thumbnail'),
  );
  register_post_type('Depoimentos', $args);
 

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
