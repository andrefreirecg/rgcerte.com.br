<?php
function registrar_tipo_de_postagem_personalizado() {
    $labels = array(
        'name' => 'Cursos',
        'position' => 2,
        'singular_name' => 'Curso',
        'add_new' => 'Adicionar Novo',
        'add_new_item' => 'Adicionar Novo Curso',
        'edit_item' => 'Editar Curso',
        'new_item' => 'Novo Curso',
        'view_item' => 'Ver Curso',
        'search_items' => 'Pesquisar por Curso',
        'not_found' => 'Nenhum curso encontrado',
        'not_found_in_trash' => 'Nenhum curso encontrado na lixeira',
    );

    $args = array(
        'labels' => $labels,
        'show_in_rest' => true,
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail'),
    );

    register_post_type('cursos', $args);
    $labels = array(
        'name' => 'Aulas',
        'position' => 3,
        'singular_name' => 'Aula',
        'add_new' => 'Adicionar Novo',
        'add_new_item' => 'Adicionar Novo aula',
        'edit_item' => 'Editar aula',
        'new_item' => 'Novo aula',
        'view_item' => 'Ver aula',
        'search_items' => 'Pesquisar por aula',
        'not_found' => 'Nenhum aula encontrado',
        'not_found_in_trash' => 'Nenhum aula encontrado na lixeira',
    );

    $args = array(
        'labels' => $labels,
        'show_in_rest' => true,
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail'),
    );

    register_post_type('aula', $args);
    
}


add_action('init', 'registrar_tipo_de_postagem_personalizado');

