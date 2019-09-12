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
    $("body").append("<div class='alertReg'><p>您已注册完成请返回登录！</p><a href='login.html'>确认并返回</a></div>");
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