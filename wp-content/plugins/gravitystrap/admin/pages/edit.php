<?php
	$layout = $_GET['layout'];
	?>
	<div class="row top-buffer">
		<div class="col-md-12">
			<h1>Add new layout</h1>
		</div>
	</div>
	<div class="row top-buffer">
		<div class="col-md-8">
			<div class="row">
				<div class="col-md-12">
					<input required="required" type="text" name="title" class="form-control title" placeholder="Enter title here"/> 
				</div>
			</div>
			<div class="row top-buffer">
				<div class="col-md-12">
					<textarea name="content" class="form-control description" placeholder="Add some description"></textarea>
				</div>
			</div>
		</div>
		<div class="col-md-4">
			<input type="submit" name="publish" id="publish" class="button button-primary button-large" value="Publish">
		</div>
	</div>
	<div class="row top-buffer">
		<div class="col-md-2 rules">
			<ul id="inputs" class="custom-sort side">
			  <li class="ui-state-default btn btn-default no-items input-rule">
				  <span class="no-items">All items</span>
				  <span class="ex-items">All other items</span>
				  </li>
			</ul>
			<div id="add-rule" class="btn btn-primary">Add new rule</div>
		</div>
		<div class="col-md-8">
			<ul id="layout" class="connectedSortable custom-sort">
			</ul>
		</div>
		<div class="col-md-2 elements">
			<ul id="elements" class="custom-sort side">
				<li class="ui-state-default btn btn-default" type="row">
					ROW
				</li>
				<li class="ui-state-default btn btn-default" type="col">
					COLUMN
				</li>
			</ul>
		</div>
	</div>