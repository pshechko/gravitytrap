<?php
function gravitytrap_layout() {
    register_post_type('gravitytrap_layout', array(
        'labels' => array(
            'name' => __('GravityForms Layouts'),
            'singular_name' => __('GravityForms Layout'),
            'add_new' => __('Add New GravityForms Layout'),
            'add_new_item' => __('Add New GravityForms Layout'),
            'edit_item' => __('Edit GravityForms Layout'),
            'new_item' => __('Add New GravityForms Layout'),
            'view_item' => __('View GravityForms Layout'),
            'search_items' => __('Search GravityForms Layout'),
            'not_found' => __('No GravityForms Layouts found'),
            'not_found_in_trash' => __('No GravityForms Layouts found in trash'),
        ),
        'public' => true,
        'menu_icon' => "dashicons-screenoptions",
        'supports' => array('title', 'editor', 'thumbnail', 'comments'),
        'capability_type' => 'post',
        'rewrite' => array("slug" => "gravitytrap-layout"),
        'menu_position' => 1005,
            )
    );
}

add_action('init', 'gravitytrap_layout');