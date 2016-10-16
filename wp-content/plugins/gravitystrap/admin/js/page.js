jQuery( function($) {
	$( "#inputs" ).sortable({
		connectWith: ".connectedSortable"
	}).disableSelection();
    $( "#layout" ).sortable({
		receive: function(e,li) {
			e.stopPropagation()
			
		
			
			var type = li.item.attr('type');
			console.log("LAYOUT: "+type);
			if(type!=="row"){
				li.sender.sortable("cancel");
			}
			
			var sortobj = {
				//$this: this,
				connectWith: "#layout",
				stop: function() { return false; },
				receive: function(e,li){
					e.stopPropagation()
					var type = li.item.attr('type');
					console.log("ROW: "+type);
					if(type!=="col"){
						li.sender.sortable("cancel");
						return;
					}
					var newulCol = $('<ul class="connectedSortable"></ul>').sortable({
						connectWith: ".item-row>ul.connectedSortable",
						
						receive: function(e,li) {
							e.stopPropagation()
							var type = li.item.attr('type');
							if(type!=="row"){
								li.sender.sortable("cancel");
								return;
							}
			
							var reqNewUlRow = $('<ul class="connectedSortable "></ul>').sortable(sortobj);
							
							
							
							reqNewUlRow.children().remove();
							copyHelper=null;
							li.item.replaceWith($('<li class="ui-state-default item-row" type="row"></li>').append(reqNewUlRow));
						}
					})
					copyHelper=null;
					li.item.replaceWith($('<li class="ui-state-default item-col" type="col"></li>').append(newulCol));
				}
			}
			
			
			var newulRow = $('<ul class="connectedSortable"></ul>').sortable(sortobj);
			
			copyHelper=null;
			li.item.replaceWith($('<li class="ui-state-default item-row" type="row"></li>').append(newulRow));
		} 
	}).disableSelection();
	$( "#elements" ).sortable({
		connectWith: ".connectedSortable",
		helper: function(e,li) {
			copyHelper= li.clone().insertAfter(li);
			return li.clone()
		},
		stop: function() {
			copyHelper && copyHelper.remove();
		}
		
	}).disableSelection();
} );
jQuery( function($) {
	$('.rules').on('click','#add-rule',function(){
		var inputsUl = $(this).prev('#inputs');
		var existingNums = $('[itemnum]').map(function(){
			return parseInt($(this).attr('itemnum'));
		})
		var maxEx = 0;
		if(existingNums.length>0){
			maxEx = Math.max.apply( Math, existingNums );
		}
		maxEx++;
		inputsUl.append('<li class="ui-state-default btn btn-default" itemnum="'+maxEx+'">Item #'+maxEx+'</li>').find('li.no-items').removeClass('no-items');
	})
} );