<?php
function add_admin_jquery_ui($hook) {
	if(strpos($hook,'gravitytrap')===false) return;
	/*wp_deregister_script( 'jquery-ui-core');
	wp_deregister_script( 'jquery-ui-widget');
	wp_deregister_script( 'jquery-ui-mouse');
	wp_deregister_script( 'jquery-ui-sortable');*/
	
    //wp_enqueue_script( 'jquery-ui', PLUGINURI . '/admin/jquery-ui/jquery-ui.min.js', array('jquery'));
	//wp_enqueue_style('jquery-ui-stylesheet', PLUGINURI . '/admin/jquery-ui/jquery-ui.min.css');
	//wp_enqueue_script( 'jquery-ui-sortable', PLUGINURI . '/admin/jquery-ui/jquery-sortable.js', array('jquery'));
	//wp_enqueue_style('jquery-ui-sortable-stylesheet', PLUGINURI . '/admin/jquery-ui/jquery-sortable-stylesheet.css');
	wp_enqueue_script( 'gravitysortable', PLUGINURI . '/admin/gravitySortable/gravitySortable.js', array('jquery'));
	wp_enqueue_style('gravitysortable-stylesheet', PLUGINURI . '/admin/gravitySortable/gravitySortable.css');
	
}
add_action( 'admin_enqueue_scripts', 'add_admin_jquery_ui', 100);

function add_admin_bootstrap($hook) {
	if(strpos($hook,'gravitytrap')===false) return;
	wp_enqueue_style('admin-bootstrap', PLUGINURI . '/admin/bootstrap/bootstrap.min.css');
}
add_action( 'admin_enqueue_scripts', 'add_admin_bootstrap' );

function add_admin_gravitytrap_page_assets($hook) {
	if(strpos($hook,'gravitytrap')===false) return;
	wp_enqueue_style('gravitytrap-stylesheet', PLUGINURI . '/admin/css/page.css');
	wp_enqueue_script( 'gravitytrap-script', PLUGINURI . '/admin/js/page.js', array('jquery','gravitysortable'));
}
add_action( 'admin_enqueue_scripts', 'add_admin_gravitytrap_page_assets' );

function add_admin_global_assets($hook) {
	wp_enqueue_style('gravitytrap-global-stylesheet', PLUGINURI . '/admin/css/global.css');
}
add_action( 'admin_enqueue_scripts', 'add_admin_global_assets' );