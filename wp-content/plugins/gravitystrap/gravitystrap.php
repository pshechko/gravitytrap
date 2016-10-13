<?php
/*
Plugin Name: GravityStrap
Plugin URI: https://profiles.wordpress.org/pshechko
Description: Adds bootstarp layout to gravityforms
Version: 1.0
Author: pshechko
Author URI: https://profiles.wordpress.org/pshechko
*/

add_action('admin_menu', 'add_gravitystarp_subpage', 5);

function add_gravitystarp_subpage() {
    add_submenu_page('gf_edit_forms', 'Gravitystrap', 'Gravitystrap', 'manage_options', 'gravitystarp', 'gravitystarp_page');
}

function gravitystarp_page() {

}