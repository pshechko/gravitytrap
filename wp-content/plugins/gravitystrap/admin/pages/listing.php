<?php
	$args = array(
	'post_type'=>'gravitytrap_layout',
	'posts_per_page'=>-1
	);
	$query = new WP_Query($args);
	if($query->have_posts()):
		while($query->have_posts()):
			$query->the_post();
		endwhile;
		wp_reset_postdata();
	else:
	
		?>
		<form action="admin.php?page=gravitytrap" method="get">
			<h3>There are no layouts yet</h3>
			<input type="hidden" name="page" value="gravitytrap">
			<input type="hidden" name="layout" value="new">
			<input type="submit" value="Add some"/>
		</form>
		<?php
	endif;