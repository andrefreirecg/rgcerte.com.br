<?php 
$key = (!empty($attributes['key']) ? $attributes['key'] : 'cargo' );
$post_meta = get_post_meta(get_the_ID(), 'key');
$field = get_field($key, get_the_ID());
$field = (!empty($field) ? $field : "");

$align = 'text-align: '.$attributes['align'].'; ';

$margin_bottom =   str_replace('var:preset|spacing|', 'var(--wp--preset--spacing--', $attributes['style']['spacing']['margin']['bottom']);
$margin_top =   str_replace('var:preset|spacing|', 'var(--wp--preset--spacing--', $attributes['style']['spacing']['margin']['top']);
$margin_left =   str_replace('var:preset|spacing|', 'var(--wp--preset--spacing--', $attributes['style']['spacing']['margin']['left']);
$margin_right =   str_replace('var:preset|spacing|', 'var(--wp--preset--spacing--', $attributes['style']['spacing']['margin']['right']);
$padding_bottom =   str_replace('var:preset|spacing|', 'var(--wp--preset--spacing--', $attributes['style']['spacing']['padding']['bottom']);
$padding_top =   str_replace('var:preset|spacing|', 'var(--wp--preset--spacing--', $attributes['style']['spacing']['padding']['top']);
$padding_left =   str_replace('var:preset|spacing|', 'var(--wp--preset--spacing--', $attributes['style']['spacing']['padding']['left']);
$padding_right =   str_replace('var:preset|spacing|', 'var(--wp--preset--spacing--', $attributes['style']['spacing']['padding']['right']);
$margin = 'margin-bottom: '.$margin_bottom.'); margin-top: '.$margin_top.');  margin-left: '.$margin_left.');  margin-right: '.$margin_right.'); ';
$padding = 'padding-bottom: '.$padding_bottom.'); padding-top: '.$padding_top.');  padding-left: '.$padding_left.');  padding-right: '.$padding_right.'); ';

$lineHeight = 'line-height: '.$attributes['style']['typography']['lineHeight'].'; ';

$font = 'font-family: '.$attributes['fontFamily'].';';
$color = 'color:var(--wp--preset--color--'.$attributes['textColor'].');';
$fontSize = 'font-size:var(--wp--preset--font-size--'.$attributes['fontSize'].');';
$backgroundColor = 'background-color:'.$attributes['backgroundColor'].';';

$styles = $align.$margin.$font.$color.$backgroundColor.$fontSize.$padding.$lineHeight;
?>
<div class="cargo" style="<?= $styles ?>">
	<?= $field ?>
</div>
