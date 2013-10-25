/*
	通用js
*/
(function($){
	//关闭层
	$.fn.closeDiv = function(){
		$(this).click(function(){
			$(this).parent().remove();
		})
	};
	//dropdown菜单
	$.fn.dropDown = function(){
		$(this).hover(function(){
			$(this).find('a:first').addClass('on');
			$(this).find('>ul').show();
		},function(){
			$(this).find('a:first').removeClass('on');
			$(this).find('>ul').hide();
		});
	};
	//collapse
	$.fn.collapse = function(){
		$(this).find('a').click(function(event){
			$(this).next().toggle();
			$(this).toggleClass('open');
		});
	};
	
	
	
	
})(jQuery);

//tooltip，对qtip2的封装
(function($){
	$.fn.tooltip = function(options){
		//default setting
		$.fn.tooltip.defaults={
			//默认position
			position: {
				my: 'top center',  // Position my top left...
				at: 'bottom center', // at the bottom right of...
				adjust: {
					screen: true
				},
				viewport: $(window)
			},
			style: {
				classes: 'qtip-dark qtip-bootstrap'
			}
		};
		//定义位置map
		var positionJson = {
				top:{
					my:'bottom center',
					at:'top center'	
				},
				topLeft:{
					my:'bottom right',
					at:'top center'	
				},
				topRight:{
					my:'bottom left',
					at:'top center'	
				},
				right:{
					my:'center left',
					at:'center right'	
				},
				bottom:{
					my: 'top center',
					at: 'bottom center'
				},
				bottomLeft:{
					my: 'top right',
					at: 'bottom center'
				},
				bottomRight:{
					my: 'top left',
					at: 'bottom center'
				},
				left:{
					my: 'center right',
					at: 'center left'
				}
			}
		//
		return this.each(function(){
			var opts = $.extend({},$.fn.tooltip.defaults,options);
			//根据selector属性设置
			var position = $(this).attr('data-position');
			if(position!=''&&position!=undefined){
				opts.position.my = positionJson[position].my;
				opts.position.at = positionJson[position].at;
			}else{
				opts.position = $.fn.tooltip.defaults.position;
			}
			var title = $(this).attr('data-title');
			if(title!=''&&title!=undefined){
				opts.content = {
					title:title
				}
			}

			$(this).qtip(opts);
		});
	};
})(jQuery);
//
$(function(){
	//start
	
	//层关闭
	$('.close').closeDiv();
	
	//dropdown菜单
	$('.dropdown').dropDown();
	$('.sub-dropdown').dropDown();
	$('.hassub').collapse();
	//end
});