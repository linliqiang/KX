


var v = new Vue({
    el: "#app",
    data: {
        userName:'',
        userPhone:'',
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
            var regPhone = new RegExp(/^[1][3,4,5,7,8][0-9]{9}$/);
            var that = this;
            if( !regPhone.test(that.userPhone) ){
                that.tips = "请输入正确手机号码"
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
            }



        },

         reg:function(){

            var regPhone = new RegExp(/^[1][3,4,5,7,8][0-9]{9}$/);
            var that = this;

            if( that.userName == "" ){
                that.tips = "请输入昵称"
            }else if( !regPhone.test(that.userPhone) ){
                that.tips = "请输入正确手机号码"
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