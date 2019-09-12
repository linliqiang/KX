var reg1 = new RegExp(/^\d{6}$/);//6位数字
var reg2 = new RegExp(/^1[34578]\d{9}$/);//手机

var v = new Vue({
    el: "#app",
    data: {
        n:"获取验证码",
        name:"",
        hos:"",
        dep:"",
        tit:"",
        phone:"",
        code:"",
    },
    created:function() {
    },
    mounted:function() {
    },
    methods: {
        getCode:function(){
            $(".code").addClass('ex1')
            var that = this;
            that.n = 60;
            var timer = setInterval(function(){
                that.n = that.n - 1;
                if(that.n <= 0){
                    clearInterval(timer);
                    that.n = "获取验证码";
                    $(".code").removeClass('ex1')
                }
            },1000)
        },
        login:function(){
            var that = this;
            if(that.name==""){
                console.log("姓名不正确")
                my_alert_m("姓名不正确");
            }else if(that.hos==""){
                console.log("医院不正确")
                my_alert_m("医院不正确");
            }else if(that.dep==""){
                console.log("科室不正确")
                my_alert_m("科室不正确");
            }else if(that.tit==""){
                console.log("职称不正确")
                my_alert_m("职称不正确");
            }else if(!reg2.test(that.phone)){
                console.log("手机不正确")
                my_alert_m("手机不正确");
            }else if(!reg1.test(that.code)){
                console.log("验证码不正确")
                my_alert_m("验证码不正确");
            }else{
                console.log("通过")
            }
        }
    }
})