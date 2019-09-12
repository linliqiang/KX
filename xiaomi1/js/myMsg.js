var reg2 = new RegExp(/^1[34578]\d{9}$/);//手机
var timer;
function changepic() {
    var reads= new FileReader();
    var f=document.getElementById('file').files[0];
    reads.readAsDataURL(f);
    reads.onload=function (e) {
        // var that = this;
        v.msg.img = this.result
    console.log(v.msg.img)
    };
}

var v = new Vue({
    el: "#app",
    data: {
        msg:{
            img:"images/head.jpg",
            names:"流川枫",
            name:"樱木",
            hos:"陵南医院",
            dep:"神经外科",
            pos:"主刀医生",
            pho:"15856566324",
        },
        modtitle:"",
        n:"",
        modt:"",
        phos:"",
        code:"获取验证码",
    },
    created:function() {
    },
    mounted:function() {
    },
    methods: {
        upThing:function(){
            $("#file").click();
        },
        mod:function(title,n){
            this.modtitle = title
            this.n = n;
            
            if(n==1){
                this.modt = this.msg.names
                $(".alerts").css("left","0")
            }else if(n==2){
                this.modt = this.msg.name
                $(".alerts").css("left","0")
            }else if(n==3){
                this.modt = this.msg.hos
                $(".alerts").css("left","0")
            }else if(n==4){
                this.modt = this.msg.dep
                $(".alerts").css("left","0")
            }else if(n==5){
                this.modt = this.msg.pos
                $(".alerts").css("left","0")
            }else{
                // this.modt = this.msg.pho
                $(".alerts2").css("left","0")
            }
            
        },
        alertsclose:function(){
            $(".alerts").css("left","200%");
            this.modt = "";
        },
        alertsok:function(){
            if(this.modt==""){
                my_alert_m("请输入要修改的内容");
                return false;
            }
            if(this.n==1){
                this.msg.names = this.modt
            }else if(this.n==2){
                this.msg.name = this.modt
            }else if(this.n==3){
                this.msg.hos = this.modt
            }else if(this.n==4){
                this.msg.dep = this.modt
            }else if(this.n==5){
                this.msg.pos = this.modt
            }else{
                if(reg2.test(this.modt)){
                    this.msg.pho = this.modt
                }else{
                     my_alert_m("请输入正确手机号码");
                     return false;
                }
            }
            $(".alerts").css("left","200%")
            this.modt = "";
            return true;
        },
        alertsclose2:function(){
            $(".alerts2").css("left","200%");
            if(timer){
                clearInterval(timer); 
            }
            this.phos = "";
            this.code = "获取验证码";
        },
        alertsok2:function(){

            if(reg2.test(this.phos)){
                if(this.modt==""){
                    my_alert_m("请输入验证码");
                    return false;
                }else{
                    $(".alerts2").css("left","200%")
                    this.msg.pho=this.phos
                    this.modt = "";
                    if(timer){
                        clearInterval(timer); 
                    }
                    this.phos = "";
                    this.code = "获取验证码";
                    return true;
                }
            }else{
                 my_alert_m("请输入正确手机号码");
                 return false;
            }
            
        },
        getCode:function(){
            if(!reg2.test(this.phos)){
                my_alert_m("请输入正确手机号码");
                return false;
            }
            $(".code").addClass('ex1')
            var that = this;
            that.code = 60;
            timer = setInterval(function(){
                that.code = that.code - 1;
                if(that.code <= 0){
                    clearInterval(timer);
                    that.code = "获取验证码";
                    $(".code").removeClass('ex1')
                }
            },1000)
        },
       
    }
})

