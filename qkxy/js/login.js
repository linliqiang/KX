



var v = new Vue({
    el: "#app",
    data: {
        userName:'',
        userPsw:'',
        tipsMsg:"",
    },
    created:function() {
        
    },
    mounted:function() {    
    
    },

    methods: {

        login:function(){
            var that = this;
            console.log(that.userName)
            console.log(that.userPsw)

            // 手机正则
            // var regPhone = new RegExp(/^[1][3,4,5,7,8][0-9]{9}$/);
            // 邮箱正则
            // var regPhone = new RegExp(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/);
            if( that.userName == "" ){
                that.tipsMsg = "请输入账号"
            }else if( that.userPsw == "" ){
                that.tipsMsg = "请输入密码"
            }else if( that.userPsw.length < 6){
                that.tipsMsg = "请输入最少6位密码"
            }else{
                
                if(that.userName == "88888888" && that.userPsw == "11111111"){

                    // 普通用户
                    var userMsg = {
                        name:"张一凡",
                        userName:"88888888",
                        userPsw:"11111111",
                        img:"img/zji.jpg",
                        phone:'15856565658',
                        type:"ordinary",
                          
                    }
                    var datas = JSON.stringify(userMsg)
                    window.localStorage.setItem("user",datas)
                    window.location.href = "index.html"


                }else if(that.userName == "88888888" && that.userPsw == "22222222"){


                    //医生
                    var userMsg = {
                        name:"张一凡",
                        userName:"88888888",
                        userPsw:"22222222",
                        img:"img/zji.jpg",
                        phone:'13980566666',
                        type:"doctor",
                        company:"四川省成都医院",
                        ysNum:"1565834813516451556",
                    }
                    var datas = JSON.stringify(userMsg)
                    window.localStorage.setItem("user",datas)
                    window.location.href = "index.html"


                }else if(that.userName == "88888888" && that.userPsw == "33333333"){


                    //专家
                    var userMsg = {
                        name:"张一凡",
                        userName:"88888888",
                        userPsw:"33333333",
                        img:"img/zji.jpg",
                        phone:'13980566666',
                        type:"expert",
                    }
                    var datas = JSON.stringify(userMsg)
                    window.localStorage.setItem("user",datas)
                    window.location.href = "index.html"


                }else{
                   that.tipsMsg = "账号或密码错误"
                }
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
        v.tipsMsg = ""
    })
    $("input[type='password']").focus(function(){
        v.tipsMsg = ""
    })
})