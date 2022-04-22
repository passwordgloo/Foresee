	//滚动导航
$(window).scroll(function(e) {
    var header_istop=$(document).scrollTop()
	if (header_istop>0){
	 $(".header").addClass("header_fixed");
	} else {
	 $(".header").removeClass("header_fixed")
	}
    });
$(window).scroll(function(e) {
    var header_istop=$(document).scrollTop()
	if (header_istop>0){
	 $(".header").addClass("header_fixed");
	} else {
	 $(".header").removeClass("header_fixed")
	}
    });


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
                body.style. backgroundColor= '#121212';
				body.style.color = 'white';
            }else{
                this.className = 'white';
                temp=1;
                kaiguan.style. border= '2px solid #e0e0e0';
                body.style. backgroundColor='#f2f2f2';
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
//目录
$(window).scroll(function(e) {
    var menu_top=$(document).scrollTop()
	if (menu_top>350){
	 $("#menu").fadeIn(500);
	} else {
	 $("#menu").fadeOut(100);
	}
    });

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