<?php
function add_admin_jquery_ui($hook) {
	if(strpos($hook,'gravitytrap')===false) return;
    wp_enqueue_script( 'jquery-ui', PLUGINURI . '/admin/jquery-ui/jquery-ui.min.js', array('jquery'));
	wp_enqueue_style('jquery-ui-stylesheet', PLUGINURI . '/admin/jquery-ui/jquery-ui.min.css');
}
add_action( 'admin_enqueue_scripts', 'add_admin_jquery_ui' );

function add_admin_bootstrap($hook) {
	if(strpos($hook,'gravitytrap')===false) return;
	wp_enqueue_style('admin-bootstrap', PLUGINURI . '/admin/bootstrap/bootstrap.min.css');
}
add_action( 'admin_enqueue_scripts', 'add_admin_bootstrap' );

function add_admin_gravitytrap_page_assets($hook) {
	if(strpos($hook,'gravitytrap')===false) return;
	wp_enqueue_style('gravitytrap-stylesheet', PLUGINURI . '/admin/css/page.css');
	wp_enqueue_script( 'gravitytrap-script', PLUGINURI . '/admin/js/page.js', array('jquery','jquery-ui'));
}
add_action( 'admin_enqueue_scripts', 'add_admin_gravitytrap_page_assets' );

function add_admin_global_assets($hook) {
	wp_enqueue_style('gravitytrap-global-stylesheet', PLUGINURI . '/admin/css/global.css');
}
add_action( 'admin_enqueue_scripts', 'add_admin_global_assets' );