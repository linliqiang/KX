// 保存验证码
var codeStr = "";

function randomRgbColor() { //随机生成RGB颜色
    var r = Math.floor(Math.random() * 256); //随机生成256以内r值
    var g = Math.floor(Math.random() * 256); //随机生成256以内g值
    var b = Math.floor(Math.random() * 256); //随机生成256以内b值
    return "rgb(" + r + "," + g + "," + b + ")"; //返回rgb(r,g,b)格式颜色
}

function draw(){
    codeStr = "";//清空验证码
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    canvas.width = 120;
    canvas.height = 40;
    context.strokeRect(0, 0, 120, 40);
    var aCode = "a,b,c,e,f,g,h,j,k,m,n,r,s,t,w,x,y,2,3,4,5,6,7,8";
    console.log(aCode.split(","));
    var aLength = aCode.split(",").length;
    for (var i = 0; i <= 3; i++) {
        var x = 20 + i * 20;
        var y = 20 + Math.random() * 10;
        var j = Math.floor(Math.random() * aLength);
        var deg = Math.random() * 40 * Math.PI / 180;//随机弧度
        var txt = aCode.split(",")[j];
        codeStr = codeStr + txt;//保存验证码
        context.fillStyle = randomRgbColor();
        context.font = "bold 24px 微软雅黑";
        //修改坐标原点和旋转角度
        context.translate(x, y);
        context.rotate(deg);
        context.fillText(txt, 0, 0);
        //恢复坐标原点和旋转角度
        context.rotate(-deg);
        context.translate(-x, -y);
    }
    //干扰线
    for (var i = 0; i < 0; i++) {
        context.strokeStyle = randomRgbColor();
        context.beginPath();
        context.moveTo(Math.random() * 120, Math.random() * 40);
        context.lineTo(Math.random() * 120, Math.random() * 40);
        context.stroke();
    }
    /**绘制干扰点**/
    for (var i = 0; i < 20; i++) {
        context.fillStyle = randomRgbColor();
        context.beginPath();
        context.arc(Math.random() * 120, Math.random() * 40, 1, 0, 2 * Math.PI);
        context.fill();
    }
}

function oi2(node){
    var val = $(node).val()
    if( !(/^1(3|4|5|6|7|8)\d{9}$/.test(val))  &&  val.length >= 11){
        mui.toast('请输入正确手机号码',{ duration:'long', type:'div' });
        return false; 
    }
}

var v = new Vue({
    el: "#app",
    data: {
        acc:"",
        pas:"",
        name:"",
        hospital:"",
        department:"",
        duty:"",
        phone:"",
        code:"",
    },
    created:function() {
    },
    mounted:function() {
    },

    methods: {
        getCode:function(){
            if( !(/^1(3|4|5|6|7|8)\d{9}$/.test(this.phone)) ){
                mui.toast('请先填写正确手机号码',{ duration:'long', type:'div' }) 
            }else{
                draw();
            }
        },
        regBut:function(){
            if( this.acc == ""){
                mui.toast('请填写用户账号',{ duration:'long', type:'div' });
                return false; 
            }
            if( this.pas == ""){
                mui.toast('请填写用户密码',{ duration:'long', type:'div' });
                return false; 
            }
            if( this.name == ""){
                mui.toast('请填写姓名',{ duration:'long', type:'div' });
                return false; 
            }
            if( this.hospital == ""){
                mui.toast('请填写医院',{ duration:'long', type:'div' });
                return false; 
            }
            if( this.department == ""){
                mui.toast('请填写科室',{ duration:'long', type:'div' });
                return false; 
            }
            if( this.duty == ""){
                mui.toast('请填写职称',{ duration:'long', type:'div' });
                return false; 
            }
            if( !(/^1(3|4|5|6|7|8)\d{9}$/.test(this.phone)) ){
                mui.toast('请填写正确手机号码',{ duration:'long', type:'div' });
                return false; 
            }
            if( this.code.length == 4 && this.code == codeStr){
                console.log("注册成功");
                alertReg();
            }else{
                mui.toast('请填写正确验证码',{ duration:'long', type:'div' });
                return false; 
            }
        }


    }

})


