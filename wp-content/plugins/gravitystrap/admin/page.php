<div class="gravitytrap-page col-md-12">
	<?php
		if(isset($_GET['layout'])):
			require "pages/edit.php";
		else:
			require "pages/listing.php";
		endif;	
	?>
</div>