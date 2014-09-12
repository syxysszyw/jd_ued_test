		// var timer = index = 0, count, curIndex;
		
		// $(document).ready(function(){
		// 	count = $('.banner_list a').length;
		// 	$('.banner_list a:not(:first-child)').hide();
		// 	$('.banner li').on('click', function(){
		// 		var i = $(this).data('id') - 1;
		// 		index = i;
		// 		if(i >= count) return;
		// 		$('.banner_list a').filter(':visible').fadeOut(200).parent().children().eq(i).fadeIn(1000);
		// 		$('.banner').css('background', '');
		// 		$(this).toggleClass('on').siblings().removeAttr("class");
		// 	});

		// 	$('#prev').on('click', function(){
		// 		index = $('.banner_list a').filter(':visible').index();
		// 		index = index <= 0 ? (count - 1) : --index;
		// 		$('.banner li').eq(index).trigger('click');
		// 	});

		// 	$('#next').on('click', function(){
		// 		index = $('.banner_list a').filter(':visible').index();
		// 		index = index >= (count - 1)? 0 : ++index;
		// 		$('.banner li').eq(index).trigger('click');
		// 	});

		// 	timer = setInterval('fShowAuto()', 2000);
		// 	$('.banner').hover(function(){clearInterval(timer)}, function(){timer = setInterval('fShowAuto()', 2000);});
		// });

		// function fShowAuto(){
		// 	index = index >= (count - 1)? 0 : ++index;
		// 	$('.banner li').eq(index).trigger('click');
		// }