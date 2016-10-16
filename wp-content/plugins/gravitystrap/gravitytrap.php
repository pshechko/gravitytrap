<?php
/*
Plugin Name: GravityTrap
Plugin URI: https://profiles.wordpress.org/pshechko
Description: Adds bootstarp layout to gravityforms
Version: 1.0
Author: pshechko
Author URI: https://profiles.wordpress.org/pshechko
*/

define('PLUGINURI',plugins_url('',__FILE__));

require "add_assets.php";
require "add_post_types.php";
require "admin/functions.php";

