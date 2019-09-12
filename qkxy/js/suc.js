


var v = new Vue({
    el: "#app",
    data: {
        userName:'',
        yanzhengma:'',
        yanNum:"获取验证码",
    },
    created:function() {
        
    },
    mounted:function() {    

    },

    methods: {

        reg:function(){
            console.log(this.userName)
            console.log(this.yanzhengma)
            window.location.href = "login.html"
            // if(){
                
            //     window.location.href = "index.html"

            // }
        },

        getBum:function(){
            var that = this;
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