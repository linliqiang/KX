//请求
function ajaxurl(){
    return "http://xhyx.ikangxun.com/api";
}
//get参数跟在url参数后面，post参数写在data里面，数值是对象
//api:
function ajax(){
    // $.ajax({
    //     type:"GET",
    //     url:" ",
    //     dataType:"json",
    //     success:function(data){
    //         console.log("成功")
    //     },
    //     error:function(jqXHR){
    //         console.log("失败")
    //     }
    // });
}
//--------------------------------------------------json
//json转对象
function json1(data){
    var datas = JSON.parse(data)
    return datas
}
//对象转json
function json2(data){
    var datas = JSON.stringify(data)
    return datas
}
//json克隆数据
function json3(data) {
    return JSON.parse(JSON.stringify(data))
}

//--------------------------------------------------时间
/* 获取当前的时间 */
function getTime() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    return [year+"",month+"",strDate+""];
}


// 注册成功弹框
function alertReg(){
    $("body").append("<div class='bg'></div>")
    $("body").append("<div class='alertReg'><p>您已提交成功！</p><a onClick='javascript:history.go(-1)'>确认并返回</a></div>");
}
// 修改成功弹框
function alertMod(){
    $("body").append("<div class='bg'></div>")
    $("body").append("<div class='alertMod'><p>您已修改完成！</p><a href='index.html'>确认并返回</a></div>");
}
// 提交成功弹框
function alertSub(){
    $("body").append("<div class='bg'></div>")
    $("body").append("<div class='alertMod'><p>您已提交成功请返回！</p><a href='index.html'>确认并返回</a></div>");
}

// 查看大图
function alertBigImg(imgUrl){
    $("body").append("<div class='alertBigImg'><img src='"+imgUrl+"' />");
    $(".alertBigImg").click(function(){
        alertBigImgHide();
    })
}
function alertBigImgHide(){
    $(".alertBigImg").remove();
}
//时间戳转年月日时分秒
function time2(timeData) {
    var time = new Date(timeData);
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return y + '年' + this.add0(m) + '月' + this.add0(d) + '日  ' + this.add0(h) + ':' + this.add0(mm) + ':' + this.add0(s);
}
function add0(m) { return m < 10 ? '0' + m : m }
// 时间戳转年月日时分秒
function longTimeToData(value) {
        if (value == "" || value == null) {
            return "--";
        }
        var date = new Date(parseInt(value));//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear();
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
        var D = date.getDate();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();

        var day = D >= 10 ? D : ("0" + D);
        var hour = h >= 10 ? h : ("0" + h);
        var mintu = m >= 10 ? m : ("0" + m);
        var sec = s >= 10 ? s : ("0" + s);

        return Y + "-" + M + "-" + day + " " + hour + ":" + mintu + ":" + sec;
    }
function noData(){
    $("body").append("<div class='noData'><span>没有数据 (ㄒoㄒ)</span></div>")
}