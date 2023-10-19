<?php

$args = [
  "post_per_page" => "6",
  "post_type" => "post",
];

$posts = new WP_Query($args);

$blockProps = get_block_wrapper_attributes(["class" => "PostList"]);

if ($posts->have_posts()) : ?>

<section <?= $blockProps ?>>

<?php while($posts->have_posts()) : $posts->the_post(); ?>


  <?= get_the_post_thumbnail() ?>
  <h1><?= get_the_title() ?></h1>

<?php endwhile;?>
</section>
<?php endif; ?>
