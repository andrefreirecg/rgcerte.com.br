<?php

use Makersolucoes\Theme\Core;

require_once __DIR__ . "/vendor/autoload.php";

$core = new Core();
function revslider_shortcode($atts) {
    if (isset($atts['id'])) {
        $slider_id = $atts['id'];
        add_revslider($slider_id);
    } else {
        return 'Por favor, especifique o ID do slider no shortcode.';
    }
}

add_shortcode('meu_slider', 'revslider_shortcode');
