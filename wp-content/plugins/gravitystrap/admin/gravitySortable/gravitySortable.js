!function ( $, window, pluginName, undefined){
	
	var $doc = $(document);
	
	var startDragOffset = 10; 
	
	var onrecievemouseenter = function(e){
		var candidate = $(e.target);
		candidate.addClass('candidate');
	}
	
	var onrecievemouseout = function(e){
		var candidate = $(e.target);
		candidate.removeClass('candidate');
	}
	
	var onmousedown = function(e){
		//console.log('onmousedown');
		e.stopPropagation();
		e.preventDefault();
		dragElement = $(e.target);
		
		if(dragElement.is('.drag-target')){
			dragElement = dragElement.parents('li');
			}else if(!dragElement.is('li')){
			var clearElement = dragElement.clone();
			clearElement.find('.gravity-sortable-list').remove();
			var dragt = clearElement.find('.drag-target');
			if(dragt.length){
				dragElement=undefined;
				return;
				}else{
				dragElement = dragElement.parents('li');
			}
			clearElement.remove();
		}
		dragList = dragElement.parent();
		currentOptions = dragList.data('currentOptions');
		dragElement.data("drag-status",'prepare');
		
		var offset = dragElement.offset();
		
		dragElement.data('offsetX',e.pageX - offset.left);
		dragElement.data('offsetY',e.pageY - offset.top);
		
		$doc.data('doc-drag-status','prepare')
		.data('doc-prepare-moves', 0);
		
		$doc.on('mousemove',onmousemove)
		.on('mouseup', onmouseup); 
        
		
		canReceiveThis=$('[dropFromOther="true"]').filter(function(){
			var allowedList = $(this).attr('dropFrom');
			var allowedEl = $(this).attr('allowedToDrop')
			//console.log(dragList[0],allowedList,dragElement[0],allowedEl,dragList.is(allowedList)&&dragElement.is(allowedEl))
			return dragList.is(allowedList)&&dragElement.is(allowedEl);
		});
        
		if(currentOptions.dropFromItself){
			canReceiveThis = canReceiveThis.add(dragList);
		}
		
		canReceiveThis.addClass('can-receive')
		.on('mouseenter',onrecievemouseenter)
		.on('mouseout',onrecievemouseout);
        
		//canReceiveThis 
		
	}
	
	var onrecieve = function(e,el){
		
	}
	
	var onmouseup = function(e){
		e.stopPropagation();
		//console.log('onmouseup');
		$doc.off('mouseup',onmouseup);
		$doc.off('mousemove',onmousemove);
		if($doc.data('doc-drag-status')!=='dragging') return;
		//console.log(placeholder);
		
		if(placeholder){
			var pasteElement = dragHelper.clone().attr('style','')
			
			var ui = {'item':pasteElement}
			
			console.log(receiver);
			receiver.trigger('receive',ui);
			
			placeholder.replaceWith(ui.item);
			placeholder = false;
		}
		
		canReceiveThis.removeClass('can-receive')
		.off('mouseenter',onrecievemouseenter)
		.off('mouseout',onrecievemouseout);
		dragHelper.remove();
		
		if(receiver){
			receiver.removeClass('candidate');
		}
		
	}
	
	var onmousemove = function(e){
		e.stopPropagation();
		var st = $doc.data('doc-drag-status');
		if(st === 'prepare' ){
			var moves = $doc.data('doc-prepare-moves');
			if(moves<startDragOffset){
				$doc.data('doc-prepare-moves',++moves);
				//console.log(++moves);
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
		
		elementsBehind = jQuery(document.elementsFromPoint(e.pageX, e.pageY-scrollTop));
		var candidatesCanRecieve = elementsBehind.filter('.can-receive');
		//console.log(candidatesCanRecieve.length);
		if(candidatesCanRecieve.length){
			
			var lastCandidate = candidatesCanRecieve.eq(0);
			if(receiver !== lastCandidate){
				receiver = lastCandidate.addClass('candidate');
				if(placeholder){
					placeholder.remove();
					placeholder = false;
				}
			}
			
			
			
			var siblings = receiver.children(':not(.gravitytrap-placeholder)');
			
			if(siblings.length){
				var cords = siblings.map(function(){
					var $this = $(this);
					var offset = $this.offset().top;
					var height = $this.height();
					return offset+(height/2);
				});
				if(cords[0]>=e.pageY){ 
					//console.log("Y < very top");
					if(!placeholder){
						//console.log("No placeholder found, append it!");
						receiver.prepend(placeholder=currentOptions.placeholder.clone());
					}
					else if (placeholder && !siblings.eq(0).prev().is(placeholder)){
						//console.log("Placeholder is appended, but at the wrong position, reorder it!");
						placeholder.insertBefore(siblings.eq(0));
						}else{
						//console.log("Placeholder is appended and it's on the right position!");
					}
					}else{
					//console.log("Y > very top");
					var between = false;
					for(var c=0; c<cords.length; c++){ 
						if(cords[c]>=e.pageY){
							c--;
							//console.log("Placeholder should be after the "+(c+1)+" element");
							between=true;
							if(!placeholder){
								//console.log("No placeholder found, append it!");
								(placeholder=currentOptions.placeholder.clone()).insertAfter(siblings.eq(c));
								}else if(!siblings.eq(c).next().is(placeholder)){
								//console.log("Placeholder is appended, but at the wrong position, reorder it!");
								placeholder.insertAfter(siblings.eq(c));   
								}else{
								//console.log("Placeholder is appended and it's on the right position!");
							}
							break;
						}
					}
					if(!between){
						//console.log("Y > very bottom");
						if(!placeholder){ 
							//console.log("No placeholder found, append it!");
							receiver.append(placeholder=currentOptions.placeholder.clone());
							}else if(!siblings.eq(siblings.length-1).next().is(placeholder)){
							//console.log("Placeholder is appended, but at the wrong position, reorder it!");
							placeholder.insertAfter(siblings.eq(siblings.length-1));
							}else{
							//console.log("Placeholder is appended and it's on the right position!");
						}
					}
				}
				//console.log();
				//console.log("---------------------------------------------");
				//console.log();
				}else{
				if(!placeholder){
					receiver.append(placeholder=currentOptions.placeholder.clone());
				}
			}
			
			}else{
			if(receiver){
				receiver.removeClass('candidate');
				receiver=false;
			}
			if(placeholder){
				placeholder.remove();
				placeholder = false;
			}
		}
		////console.log('dragging',receiver);
		
	}
	
	var onscroll = function(){
		scrollTop = $doc.scrollTop();
	}
	
	var defaultOptions = {
		copy: false,
        dropFrom: '*',
		allowedToDrop: '*',
		dropFromOther: false,
        dropFromItself: true,
		targetElement: 'li',
        placeholder: $('<li></li>'),
		receive: onrecieve
	}
	
	var currentOptions = {};
	
	var dragList,
	dragElement,
	dragHelper,
	scrollTop = 0, 
	removedElementBackup, 
	canReceiveThis=[], 
	receiver=false, 
	placeholder=false,
	elementsBehind=[],
	scrollTop = $doc.scrollTop();
	
	$.fn[pluginName] = function(options) {	
		
		var thisOptions = Object.assign({},defaultOptions, options);
		thisOptions.placeholder.addClass('gravitytrap-placeholder');
		$doc.on('scroll',onscroll);
		onscroll();
		//console.log(thisOptions.finalElement);
		this.each(function(){
			var $this = $(this);
			$this
			.attr('dropFromOther',thisOptions.dropFromOther)
			.attr('dropFromItself',thisOptions.dropFromItself)
			.attr('allowedToDrop',thisOptions.allowedToDrop)
			.attr('dropFrom',thisOptions.dropFrom)
			.addClass('gravity-sortable-list')
			.data('currentOptions',thisOptions)
			.on('receive',thisOptions.receive);
			$this.children('li').each(function(){
				var $dragtarget = $(this).find('.drag-target');
				($dragtarget.length?$dragtarget:$(this)).on('mousedown', onmousedown); 
			});
			
		})
		
		return this;
	};
	
}(jQuery, window, 'gravitySortable');


