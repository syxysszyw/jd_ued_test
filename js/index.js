		var timer = index = 0, count, curIndex;
		$(function(){
			/*------------ie67兼容before&after伪类-----------*/
			var $beforeAfter = function(dom) { 
			if (document.querySelector || !dom && dom.nodeType !== 1) return; 
				var content = dom.getAttribute("data-content") || ''; 
				var before = document.createElement("before"), 
					after = document.createElement("after"); 
				// 内部content 
				before.innerHTML = content; 
				after.innerHTML = content; 
				// 前后分别插入节点 
				dom.insertBefore(before, dom.firstChild); 
				dom.appendChild(after); 
			};  
			$beforeAfter($('.service')[0]);
			/* --------------------End------------------------- */
			/*--------------------轮播图--------------------*/
			count = $('.banner_list li').length;
			$('.banner_list li:not(:first-child)').hide();
			$('.banner-page-ul li').on('click', function(){
				var i = $(this).data('id') - 1;
				index = i;
				if(i >= count) return;
				$('.banner_list li').filter(':visible').fadeOut(500).parent().children().eq(i).fadeIn(1000);
				$(this).toggleClass('on').siblings().removeAttr("class");
			});

			$('#prev').on('click', function(){
				index = $('.banner_list li').filter(':visible').index();
				index = index <= 0 ? (count - 1) : --index;
				$('.banner-page-ul li').eq(index).trigger('click');
			});

			$('#next').on('click', function(){
				index = $('.banner_list li').filter(':visible').index();
				index = index >= (count - 1)? 0 : ++index;
				$('.banner-page-ul li').eq(index).trigger('click');
			});

			timer = setInterval('showAuto()', 2000);
			$('.banner-wrapper').hover(function(){clearInterval(timer)}, function(){timer = setInterval('showAuto()', 2000);});
			/* --------------------End------------------------- */
			/* --------------------产品切换-------------------- */
			$('.product-top-page').on('click', function(evt){
				var _this = $(evt.target);
				if(_this.data('id')){
					_this.trigger('loadImg');
					_this.toggleClass('on').siblings().removeAttr('class');
					var prodPageIndex = _this.data('id').charAt(4);
					var target = _this.parent().parent().next().children().children().removeClass('productShow').eq(prodPageIndex-1).addClass('productShow').find('.lazy').trigger('sporty');
				}				
			});
			/* --------------------End------------------------- */
		});
		function showAuto(){
			index = index >= (count - 1)? 0 : ++index;
			$('.banner-page-ul li').eq(index).trigger('click');
		}