//禁止鼠标右键
document.addEventListener("contextmenu",function(e){
	e.preventDefault()
})


window.onload = function (){
        function gotoTop(minHeight){
 
            // 定义点击返回顶部图标后向上滚动的动画
            $("#gotoTop").click(
                function(){$('html,body').animate({scrollTop:'0px'},'slow');
            })
 
            // 获取页面的最小高度，无传入值则默认为700像素
            minHeight? minHeight = minHeight:minHeight = 760;
 
            // 为窗口的scroll事件绑定处理函数
            $(window).scroll(function(){
 
                // 获取窗口的滚动条的垂直滚动距离
                var s = $(window).scrollTop();
 
                // 当窗口的滚动条的垂直距离大于页面的最小高度时，让返回顶部图标渐现，否则渐隐
                if( s > minHeight){
                    $("#gotoTop").fadeIn(500);
                }else{
                    $("#gotoTop").fadeOut(500);
                };
            });
        };
        gotoTop();
	

	//切换深色模式
	   var botton =document.getElementById('botton');
       var kaiguan = document.querySelector('.kaiguan');
       var body = document.getElementById('body');
       var temp = 1;
        botton.addEventListener('click',function(){
            if(temp==1){
                this.className = 'black';
                temp=0;
                kaiguan.style. border= '2px solid #ff003c';
                body.style.backgroundImage='linear-gradient(60deg, #29323c 0%, #485563 100%)';
				body.style.color = 'white';
            }else{
                this.className = 'white';
                temp=1;
                kaiguan.style. border= '2px solid #e0e0e0';
                body.style.backgroundImage='linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)';
				body.style.color = 'black';
            }

        })

	//按钮不可用
	let ele=document.getElementById('unable');
	ele.classList.add('pure-button');
	ele.classList.remove('btn-1');
	ele.classList.remove('btn-2');
	ele.classList.remove('btn-3');
	ele.classList.remove('btn-4');
	ele.classList.remove('btn-5');
	ele.classList.remove('btn-6');
	ele.classList.remove('btn-7');
	ele.classList.remove('btn-8');
	ele.classList.remove('btn-9');
	ele.classList.remove('btn-10');
	ele.classList.remove('btn-11');
	ele.classList.remove('btn-12');
	ele.classList.remove('btn-13');
	ele.classList.remove('btn-14');
	ele.classList.remove('btn-15');
	ele.classList.remove('btn-16');
}
/*--------------目录-----------------*/
$(window).scroll(function(e) {
    var menu_top=$(document).scrollTop()
	if (menu_top>500){
	 $("#menu").fadeIn(500);
	} else {
	 $("#menu").fadeOut(100);
	}
    });

/*-----------------标记---------------*/
$(function(){
	$('#searchstr').keydown(function (e) {
	    var key = e.which;
	    if (key == 13) highlight();
	})
	
	var i = 0;
	var sCurText;
	function highlight(){
		clearSelection();//先清空一下上次高亮显示的内容；
		var flag = 0;
	    var bStart = true;
		
		
		$('#tip').text('');
	    $('#tip').hide();
	    var searchText = $('#searchstr').val();
		var _searchTop = $('#searchstr').offset().top+30;
		var _searchLeft = $('#searchstr').offset().left;
		if($.trim(searchText)=="" || $.trim(searchText)=='.'){
			//alert(123);
			showTips("请输入关键字",_searchTop,3,_searchLeft);
			return;
		}
			
			
		var searchText = $('#searchstr').val();//获取你输入的关键字；
		var regExp = new RegExp(searchText, 'g');//创建正则表达式，g表示全局的，如果不用g，则查找到第一个就不会继续向下查找了；
		var content = $("#content").text();
		if (!regExp.test(content)) {
			showTips("没有找到查找值",_searchTop,3,_searchLeft);
	        return;
	    } else {
	        if (sCurText != searchText) {
	            i = 0;
	            sCurText = searchText;
	         }
	     }
		
		$('p').each(function(){
			var html = $(this).html();
			var newHtml = html.replace(regExp, '<span class="highlight">'+searchText+'</span>');//将找到的关键字替换，加上highlight属性；

			$(this).html(newHtml);//更新；
			flag = 1;
		});
		$('li').each(function(){
			var html = $(this).html();
			var newHtml = html.replace(regExp, '<span class="highlight">'+searchText+'</span>');//将找到的关键字替换，加上highlight属性；

			$(this).html(newHtml);//更新；
			flag = 1;
		});
		$('h1').each(function(){
			var html = $(this).html();
			var newHtml = html.replace(regExp, '<span class="highlight">'+searchText+'</span>');//将找到的关键字替换，加上highlight属性；

			$(this).html(newHtml);//更新；
			flag = 1;
		});
		$('h2').each(function(){
			var html = $(this).html();
			var newHtml = html.replace(regExp, '<span class="highlight">'+searchText+'</span>');//将找到的关键字替换，加上highlight属性；

			$(this).html(newHtml);//更新；
			flag = 1;
		});
		$('h3').each(function(){
			var html = $(this).html();
			var newHtml = html.replace(regExp, '<span class="highlight">'+searchText+'</span>');//将找到的关键字替换，加上highlight属性；

			$(this).html(newHtml);//更新；
			flag = 1;
		});
		$('td').each(function(){
			var html = $(this).html();
			var newHtml = html.replace(regExp, '<span class="highlight">'+searchText+'</span>');//将找到的关键字替换，加上highlight属性；

			$(this).html(newHtml);//更新；
			flag = 1;
		});
		
		if (flag == 1) {
			if ($(".highlight").size() > 1) {
				var _top = $(".highlight").eq(i).offset().top+$(".highlight").eq(i).height();
				var _tip = $(".highlight").eq(i).parent().find("strong").text();
				if(_tip=="") _tip = $(".highlight").eq(i).parent().parent().find("strong").text();
				var _left = $(".highlight").eq(i).offset().left;
	            var _tipWidth = $("#tip").width();
				if (_left > $(document).width() - _tipWidth) {
	                    _left = _left - _tipWidth;
	            }
				$("#tip").html(_tip).show();
	            $("#tip").offset({ top: _top, left: _left });
	            $("#search_btn").val("查找下一个");
			}else{
				var _top = $(".highlight").offset().top+$(".highlight").height();
				var _tip = $(".highlight").parent().find("strong").text();
	            var _left = $(".highlight").offset().left;
	            $('#tip').show();
	            $("#tip").html(_tip).offset({ top: _top, left: _left });
			}
			$("html, body").animate({ scrollTop: _top - 50 });
	        i++;
	        if (i > $(".highlight").size() - 1) {
	            i = 0;
	        }
		}
	}
	function clearSelection(){
		$('p').each(function(){
			//找到所有highlight属性的元素；
			$(this).find('.highlight').each(function(){
				$(this).replaceWith($(this).html());//将他们的属性去掉；
			});
		});
		$('li').each(function(){
			//找到所有highlight属性的元素；
			$(this).find('.highlight').each(function(){
				$(this).replaceWith($(this).html());//将他们的属性去掉；
			});
		});
		$('h1').each(function(){
			//找到所有highlight属性的元素；
			$(this).find('.highlight').each(function(){
				$(this).replaceWith($(this).html());//将他们的属性去掉；
			});
		});
		$('h2').each(function(){
			//找到所有highlight属性的元素；
			$(this).find('.highlight').each(function(){
				$(this).replaceWith($(this).html());//将他们的属性去掉；
			});
		});
		$('h3').each(function(){
			//找到所有highlight属性的元素；
			$(this).find('.highlight').each(function(){
				$(this).replaceWith($(this).html());//将他们的属性去掉；
			});
		});
		$('td').each(function(){
			//找到所有highlight属性的元素；
			$(this).find('.highlight').each(function(){
				$(this).replaceWith($(this).html());//将他们的属性去掉；
			});
		});
	}
	//mask
	var tipsDiv = '<div class="tipsClass"></div>'; 
	$( 'body' ).append( tipsDiv );
	function showTips( tips, height, time,left ){ 
		var windowWidth = document.documentElement.clientWidth; 
		$('.tipsClass').text(tips);
		$( 'div.tipsClass' ).css({ 
		'top' : height + 'px', 
		'left' :left + 'px', 
		'position' : 'absolute', 
		'padding' : '8px 6px', 
		'background': '#000000', 
		'font-size' : 14 + 'px', 
		'font-weight': 900,
		'margin' : '0 auto', 
		'text-align': 'center', 
		'width' : 'auto', 
		'color' : '#fff', 
		'border-radius':'2px', 
		'opacity' : '0.8' ,
		'box-shadow':'0px 0px 10px #000',
		'-moz-box-shadow':'0px 0px 10px #000',
		'-webkit-box-shadow':'0px 0px 10px #000'
		}).show(); 
		setTimeout( function(){$( 'div.tipsClass' ).fadeOut();}, ( time * 1000 ) ); 
	} 
})

/* 鼠标点击随机文字
jQuery(document).ready(function($) {
        $("body").click(function(e) {
            //随机选择文字
            var a_idx = Math.floor((Math.random() * 26));
            var a = new Array(
                "乐观", "❤", "积极", "向上", "自由", "正能量", "(*^▽^*)", "元气满满", "开心", "快乐",
                 "善良", "可爱", "暴富", "暴瘦", "❤","富强", "民主", "文明", "和谐", "自由", "平等", 
                 "公正" ,"法治", "爱国", "敬业", "诚信", "友善"

 
                 );
            // 随机产生文字颜色
            var color1 = Math.floor((Math.random() * 255));
            var color2 = Math.floor((Math.random() * 255));
            var color3 = Math.floor((Math.random() * 255));
 
            var $i = $("<span />").text(a[a_idx]);
            a_idx = (a_idx + 1) % a.length;
            var x = e.pageX,
                y = e.pageY;
            $i.css({　　　　　　//文字样式--------------------------
                "z-index": 9999999999999 ,
                "top": y - 20,
                "left": x,
                "position": "absolute",
                "font-family":"mmm",
                "fontSize":Math.floor((Math.random() * 22)+15),
                "font-weight": "bold",
                "color": "rgb("+color1+","+color2+","+color3+")",
                "-webkit-user-select":"none",
                "-moz-user-select":"none",
                "-ms-user-select":"none",
                "user-select":"none",
            });
            $("body").append($i);
            $i.animate({
                    "top": y - 200,  //点击后文字上升高度
                    "opacity": 0    //透明度
                },
                1000,
                function() {
                    $i.remove();//文字消失时间
                });
        });
    });
*/