<?php

namespace Makersolucoes\Theme\Model\Base;

abstract class PostTypeBase
{

    public string $postTypeName = '';

    /**
     * Get archive posts
     *
     * @return void
     */
    public function getLoadMorePosts(): void
    {
        $paged = $_POST['page'] ?? 1;

        $args = [
            'post_type'      => $this->postTypeName,
            'post_status'    => 'publish',
            'posts_per_page' => 5,
            'paged'          => $paged
        ];

        $query_posts = new \WP_Query($args);

        if (!$query_posts->have_posts()) {
            wp_send_json_error(apply_filter('filter_no_posts_found', __('No posts found', 'makersolucoes')));
        }

        $filtered_posts = $this->get_formatted_posts($query_posts->posts);
        wp_send_json($filtered_posts);
    }

    /**
     * @return array
     */
    public function getArchivePost(): array
    {

        $args = [
            'post_type'      => $this->postTypeName,
            'post_status'    => 'publish',
            'posts_per_page' => 5,
        ];

        $query_posts = new \WP_Query($args);

        if ($query_posts->have_posts()) {
            return $query_posts->posts;
        }

        return [];
    }
}
