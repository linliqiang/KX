


var v = new Vue({
    el: "#app",
    data: {
        userName:'',
        userName2:'',
        tips:"",
    },
    created:function() {
        
    },
    mounted:function() {    

    },

    methods: {

        thing:function(){

            var that = this;
            if( that.userName.length < 6){
                that.tips = "请输入正确密码，且不能少于6位"
            }else if( that.userName != that.userName2 ){
                that.tips = "请输入相同密码"
            }else{
                    window.location.href = "suc.html" 
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