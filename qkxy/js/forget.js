


var v = new Vue({
    el: "#app",
    data: {
        userName:'',
        yanzhengma:'',
        yanNum:"获取验证码",
        tips:"",
    },
    created:function() {
        
    },
    mounted:function() {    

    },

    methods: {

        getBum:function(){

            // 手机正则
            var regPhone = new RegExp(/^[1][3,4,5,7,8][0-9]{9}$/);
            // 邮箱正则
            var regMail = new RegExp(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/);

            var that = this;
            if( !regPhone.test(that.userName) && !regMail.test(that.userName) ){
                that.tips = "请输入正确手机或邮箱格式"
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

        thing:function(){
            // 手机正则
            var regPhone = new RegExp(/^[1][3,4,5,7,8][0-9]{9}$/);
            // 邮箱正则
            var regMail = new RegExp(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/);
            var that = this
            if( !regPhone.test(that.userName) && !regMail.test(that.userName) ){
                that.tips = "请输入正确手机或邮箱格式"
            }else if( that.yanzhengma == ""){
                that.tips = "请输入验证码"
            }else{
                window.location.href = "forget2.html"
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