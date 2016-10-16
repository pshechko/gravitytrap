<?php
	
	add_action('admin_menu', 'add_gravitystarp_subpage', 500);
	
	function add_gravitystarp_subpage() {
		add_submenu_page('gf_edit_forms', 'GravityTtrap', 'GravityTrap', 'manage_options', 'gravitytrap', 'gravitytrap_page');
	}
	
	function gravitytrap_page() {
		require "page.php";
	}	