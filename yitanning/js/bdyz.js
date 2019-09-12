/**
 * Created by wangyang on 2017/3/6.
 */
function myCheck(){
    for(var i=0;i<document.ptmsg.elements.length-1;i++)
    {
        if(document.ptmsg.elements[i].value=="")
        {
            showTip("信息录入不全", "error");
            document.ptmsg.elements[i].focus();
            return false;
        }
    }
    return true;
}
//表单失败弹出样式
function showTip(msg, msgtype) {
    var defaults = {
        Event: "click",			//响应的事件
        timeOut: 3000,				//提示层显示的时间
        msg: msg,			//显示的消息
        speed: 300,				//滑动速度
        type: msgtype			//提示类型（1、success 2、error 3、warning）
    };
    $(".container").remove();
    var options = $.extend(defaults, options);
    var bid = parseInt(Math.random() * 100000);
    $("body").prepend('<div id="tip_container' + bid + '" class="container tip_container"><div id="tip' + bid + '" class="mtip"><i class="micon"></i><span id="tsc' + bid + '"></span><i id="mclose' + bid + '" class="mclose"></i></div></div>');
    var $this = $(this);
    var $tip_container = $("#tip_container" + bid)
    var $tip = $("#tip" + bid);
    var $tipSpan = $("#tsc" + bid);
    var $colse = $("#mclose" + bid);
    //先清楚定时器
    clearTimeout(window.timer);
    $tip.attr("class", options.type).addClass("mtip");
    $tipSpan.html(options.msg);
    $tip_container.slideDown(options.speed);
    //提示层隐藏定时器
    window.timer = setTimeout(function () {
        $tip_container.slideUp(options.speed);
    }, options.timeOut);

    ////鼠标移到提示层时清除定时器
    $("body").on("mouseover", "#tip_container" + bid, function () {
        clearTimeout(window.timer);
    });
    ////鼠标移出提示层时启动定时器
    $("body").on("mouseout", "#tip_container" + bid, function () {
        window.timer = setTimeout(function () {
            $tip_container.slideUp(options.speed);
        }, options.timeOut);
    });
    //关闭按钮绑定事件
    $("body").on("click", "#mclose" + bid, function () {
        $tip_container.slideUp(options.speed);
    });
}