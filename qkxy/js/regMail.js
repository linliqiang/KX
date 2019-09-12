


var v = new Vue({
    el: "#app",
    data: {
        userName:'',
        yanzhengma:'',
        yanNum:"获取验证码",
        userPsw:"",
        tips:" ",
    },
    created:function() {
        
    },
    mounted:function() {    

    },

    methods: {

        getBum:function(){

            var regMail = new RegExp( /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/);
            var that = this;
            
            if( !regMail.test(that.userName) ){
                that.tips = "请输入正确邮箱格式"
            }else{
                that.yanNum = 60;
                $(".yanzheng button").attr("disabled", true);
                var setInt = setInterval(function(){
                    that.yanNum = that.yanNum - 1;
                    if(that.yanNum == 0){
                        clearInterval(setInt);
                        that.yanNum = "获取验证码";
                        $(".yanzheng button").removeAttr("disabled");
                    }
                },1000)
                window.open("mailYZ.html"); 
            }

            

        },

        reg:function(){

            var regMail = new RegExp( /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/);
            var that = this;

            if( !regMail.test(that.userName) ){
                that.tips = "请输入正确邮箱格式"
            }else if( that.yanzhengma == "" ){
                that.tips = "请输入验证码"
            }else if( that.userPsw.length < 6 ){
                that.tips = "请输入密码，不少于6位"
            }else{
                alertSuc("注册成功，即将前往登录页")
                setTimeout(function(){
                    window.location.href = " login.html "
                },2000)
            }
        },
        tofeed:function(){
            if(this.userMsg){
                window.location.href = "user.html?type=or"
            }else{
                window.location.href = "login.html"
            }
        },


    }

})

$(document).ready(function(){
    $("input[type='text']").focus(function(){
        v.tips = ""
    })
    $("input[type='password']").focus(function(){
        v.tips = ""
    })
})