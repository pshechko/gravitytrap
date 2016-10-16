
!function ( $, window, pluginName, undefined){
	
	var $doc = $(document);
	
	var startDragOffset = 10; 
	
	var onmousedown = function(e){
		console.log('onmousedown');
		dragElement = $(e.target);
		dragElement.data("drag-status",'prepare');
		
		var offset = dragElement.offset();
		
		dragElement.data('offsetX',e.pageX - offset.left);
		dragElement.data('offsetY',e.pageY - offset.top);
		
		$doc.data('doc-drag-status','prepare')
		.data('doc-prepare-moves', 0);
		
		$doc.on('mousemove',onmousemove)
		.on('mouseup', onmouseup); 
		
	}
	
	var onmouseup = function(){
		console.log('onmouseup');
		$doc.off('mouseup',onmouseup);
		$doc.off('mousemove',onmousemove);
	}
	
	var onmousemove = function(e){
		var st = $doc.data('doc-drag-status');
		if(st === 'prepare' ){
			var moves = $doc.data('doc-prepare-moves');
			if(moves<startDragOffset){
				$doc.data('doc-prepare-moves',++moves);
				console.log(++moves);
				return;
			}
			else{
				$doc.data('doc-drag-status','dragging');
				dragHelper = dragElement.clone(true);
				dragHelper.css({
					height: dragElement.height(),
					width: dragElement.width(),
					position: 'absolute',
					left: e.pageX-dragHelper.data('offsetX'),
					top: e.pageY-dragHelper.data('offsetY'),
					padding: dragElement.css('padding'),
					'box-sizing': 'content-box'
				})
		
				$doc.children().append(dragHelper);
				if(!currentOptions.copy){
					removedElementBackup = dragElement.clone();
					dragElement.remove();
				}
			}
		}
		
		dragHelper.css({
			left: e.pageX-dragHelper.data('offsetX'),
			top: e.pageY-dragHelper.data('offsetY')
		})
		
		console.log('dragging');
		
	}

	
	var defaultOptions = {
		copy: false,
		finalElement: false,
		dropFrom: '*',
		connectTo: false,
		targetElement: 'li'
	}
	
	var currentOptions = {};
	
	var dragElement,dragHelper,scrollTop = 0, removedElementBackup;
	
	$.fn[pluginName] = function(options) {	
		
		currentOptions = Object.assign(defaultOptions, options);
		
		this.each(function(){
			var $this = $(this);
			$this.find('')
			var $dragtarget = $this.find('.drag-target');
			$doc.on('mousedown',$dragtarget.length?$dragtarget:$this, onmousedown); 
		})
	};
	
}(jQuery, window, 'gravitySortable');
