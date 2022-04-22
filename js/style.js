// 屏蔽鼠标右键、F12、ctrl+c
document.oncontextmenu = new Function("return false");
document.oncontextmenu = function () { return false; };
document.onkeydown = function () {
    if ((window.event && window.event.keyCode == 123) || ((event.ctrlKey) || (window.event.keycode == 67))) {
        event.keyCode = 0;
        event.returnValue = false;
        return false;
    }
};

function loading(){
	document.getElementById('loading').style.display="none";
	}
setTimeout(loading,5000);

window.onload = function () {
    $(window).scroll(function (e) {
        var menu_top = $(document).scrollTop()
        if (menu_top > 420) {
            $("#menu").fadeIn(500);
        } else {
            $("#menu").fadeOut(100);
        }
    });

    function gotoTop(minHeight) {

        // 定义点击返回顶部图标后向上滚动的动画
        $("#gotoTop").click(
            function () {
                $('html,body').animate({ scrollTop: '0px' }, 'slow');
            })

        // 获取页面的最小高度，无传入值则默认为700像素
        minHeight ? minHeight = minHeight : minHeight = 760;

        // 为窗口的scroll事件绑定处理函数
        $(window).scroll(function () {

            // 获取窗口的滚动条的垂直滚动距离
            var s = $(window).scrollTop();

            // 当窗口的滚动条的垂直距离大于页面的最小高度时，让返回顶部图标渐现，否则渐隐
            if (s > minHeight) {
                $("#gotoTop").fadeIn(500);
            } else {
                $("#gotoTop").fadeOut(500);
            };
        });
    };
    gotoTop();
}

window.addEventListener('DOMContentLoaded', function () {
    var galley = document.getElementById('galley');
    var viewer = new Viewer(galley, {
        url: 'data-original',
        toolbar: {
            oneToOne: true,
            prev: function () {
                viewer.prev(true);
            },

            play: true,

            next: function () {
                viewer.next(true);
            },
        },
    });
});