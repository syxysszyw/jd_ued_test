		var timer = index = 0, count;
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
			/*--------------------轮播图------------------------*/
			count = $('.banner_list li').length;
			$('.banner_list li:not(:first-child)').hide();
			$('.banner-page-ul li').on('click', function(){				
				$('.banner_list li:animated').stop(true, true);
				var i = $(this).index();
				index = i;
				if(i >= count) return;
				$('.banner-wrapper').css('background', '');
				$('.banner_list li').eq(i).fadeIn(2000).siblings().fadeOut(1000);
				$(this).toggleClass('on').siblings().removeAttr("class");
			});

			$('#prev').on('click', function(){
				$('.banner_list li:animated').stop(true, true);
				index = $('.banner_list li').filter(':visible').index();
				console.log(index);
				index = index <= 0 ? (count - 1) : --index;
				$('.banner-page-ul li').eq(index).trigger('click');
			});

			$('#next').on('click', function(){					
				$('.banner_list li:animated').stop(true, true);
				index = $('.banner_list li').filter(':visible').index();
				index = index >= (count - 1)? 0 : ++index;
				$('.banner-page-ul li').eq(index).trigger('click');
			});

			timer = setInterval('showAuto()', 4000);
			$('.banner-wrapper').hover(function(){
				clearInterval(timer);
			}, function(){
				timer = setInterval('showAuto()', 4000);
			});
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
			/*---------------------console output --------------*/

			window.debug('Dear JD面试官您好！我是来自广东外语外贸大学软件工程1101专业的陈洁婷o(∩_∩)o，谢谢您给我面试的机会，不管面试结果如何，我都希望有机会能和你们一起探讨一下我实现的页面中存在的问题！1. 关于宽窄版页面的实现。ie9以及以上、ff, chrome我是采用media query来实现宽窄屏，ie8及以下通过引入js来判断调整。我想尝试在浏览器resize的时候就重新设置一下版面的布局，但是未果。所以ie8及以下的浏览器只得重新刷新页面才可以实现宽窄版布局的切换。2. 轮播图。我观察了一下我实现的轮播图，发现只有第一个图有淡入淡出效果，第二第三个图有淡出效果没有淡入效果。而最后一个图感觉淡入淡出都没有●﹏●，我尝试了很多次但是还没有找到解决问题的办法。');


		});
		function showAuto(){
			index = index >= (count - 1)? 0 : ++index;
			$('.banner-page-ul li').eq(index).trigger('click');
		}

		;(function(){
		    if(!window.debug){
			    window.debug = function(message){
				  try{
					   if(!window.console){
						   window.console = {};
						   window.console.log = function(){
							  return;
						   }
					   }
				    window.console.log(message + ' ');
			      }catch(e){}
				}
			}
		})();