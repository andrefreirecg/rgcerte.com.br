<?php

namespace Makersolucoes\Theme\Controller;

class EnqueueScripts
{
    public function __construct()
    {
        add_action('admin_enqueue_scripts', [&$this, 'scriptsAdmin']);
        add_action('wp_enqueue_scripts', [&$this, 'scriptsFront']);
        add_action('wp_enqueue_scripts', [&$this, 'parentThemeEnqueueStyles']);
        add_action('wp_enqueue_scripts', [&$this, 'importConditionalScripts']);
        add_action('wp_head', [&$this, 'themeHeadTags']);
    }

    public function wpEnqueueScript($args): void
    {
        $path = $args['path'] ?? get_stylesheet_directory();
        $path .= $args['filePath'];
        wp_enqueue_script($args['handle'], $path, $args['dep'], filemtime(get_stylesheet_directory().$args['filePath']), $args['inFooter']);
    }

    public function wpEnqueueStyle($args): void
    {
        $path = $args['path'] ?? get_stylesheet_directory();
        $path .= $args['filePath'];
        $version = $args['version'] ?? filemtime(get_stylesheet_directory());
        wp_enqueue_style($args['handle'], $path, $args['dep'], $version);
    }

    /**
     * parent_theme_enqueue_styles
     *
     * @return void
     */
    public function parentThemeEnqueueStyles(): void
    {
        $parenthandle = 'parent-style';
        $theme = wp_get_theme();

        $this->wpEnqueueStyle([
            'handle'   => $parenthandle,
            'path'     => get_template_directory_uri(),
            'filePath' => '/style.css',
            'dep'      => [],
            'version'  => $theme->get('Version')
        ]);

        $this->wpEnqueueStyle([
            'handle'   => 'child-style',
            'path'     => get_stylesheet_uri(),
            'filePath' => '',
            'dep'      => [$parenthandle],
            'version'  => $theme->get('Version')
        ]);
    }

    /**
     * scripts_admin
     *
     * @return void
     */
    public function scriptsAdmin(): void
    {
        // $this->wpEnqueueScript([
        //     'handle'   => 'child-theme-front-js',
        //     'filePath' => '/dist/admin.js',
        //     'dep'      => [],
        //     'inFooter' => true
        // ]);

        $parenthandle = 'parent-style';
        $this->wpEnqueueStyle([
            'handle'   => 'child-theme-front-admin-css',
            'path'     => get_stylesheet_directory_uri(),
            'filePath' => '/dist/admin.css',

        ]);
    }

    /**
     * scripts_front
     *
     * @return void
     */
    public function scriptsFront(): void
    {
        $this->wpEnqueueScript([
            'handle'   => 'child-theme-js',
            'filePath' => '/dist/theme.js',
            'path' => get_template_directory_uri(),
            'dep'      => [],
            'inFooter' => true
        ]);
        $this->wpEnqueueStyle([
            'handle'   => 'child-theme-css',
            'path'     => get_template_directory_uri(),
            'filePath' => '/dist/theme.css',
            'dep'      => [],
        ]);
        $this->wpEnqueueStyle([
            'handle'   => 'slider-css',
            'path'     => get_template_directory_uri(),
            'filePath' => '/node_modules/react-alice-carousel/lib/alice-carousel.css',
            'dep'      => [],
        ]);
        // $this->wpEnqueueScript([
        //     'handle'   => 'slider-js',
        //     'filePath' => '/node_modules/react-alice-carousel/lib/react-alice-carousel.js',
        //     'path' => get_template_directory_uri(),
        //     'dep'      => [],
        //     'inFooter' => true
        // ]);
        // wp_enqueue_script('react-alice-carousel-js', 'http://rgcerte.com.br.loc/wp-includes/js/dist/vendor/react-dom.min.js', array(), '16.9.0', true);
        
        $data = [
            'url_ajax' => admin_url('admin-ajax.php'),
            'nonce'    => wp_create_nonce('child-theme-nonce'),
        ];

        wp_localize_script('child-theme-front-js', 'globalVars', $data);
    }

    public function importConditionalScripts(): void
    {
        // if (is_singular('produto') || is_home()) {
        //   $this->wpEnqueueScript([
        //     'handle' => 'swiper-theme-css',
        //     'filePath' => '/assets/lib/swiper/swiper.min.js',
        //     'dep' => ['jquery'],
        //   ]);
        // }
    }

    /**
     * Print tags on HTML head
     */
    public function themeHeadTags(): void
    {
        ?>
        <!-- Init Script -->
        <script></script>
        <!-- End Script -->
        <?php
    }
}
