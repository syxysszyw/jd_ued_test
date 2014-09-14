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
				$('.banner_list li').eq(i).fadeIn(4000).siblings().fadeOut(2000);
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

			window.debug('面试官您好！我是来自广东外语外贸大学软件工程1101专业的陈洁婷，我希望成为一名前端开发工程师，谢谢您给我面试的机会！');
			/*-------------------------End----------------------*/


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