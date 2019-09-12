var v = new Vue({
    el: "#app",
    data: {
        //用户信息
        userMsg:false,
        //头部导航标记
        navSign:2,
        choise:"",
    },

    created:function() {
      var that = this;
       if( window.localStorage.getItem("user") ){
            console.log(window.localStorage.getItem("user"))
            var datas = JSON.parse(window.localStorage.getItem("user"))
            this.userMsg = datas

       }else{
        console.log("没有登录用户信息")
       }
    },
    mounted:function() {
    },
    methods: {
        // header方法
        touser:function(index){
            window.localStorage.setItem("userc",index)
            window.location.href = "user.html"
        },
        signOut:function(){
            this.userMsg = false;
            window.localStorage.removeItem('user');
        },
        // 意见反馈
        tofeed:function(){
            if(this.userMsg){
                window.location.href = "user.html?type=or"
            }else{
                window.location.href = "login.html"
            }
        }, 
        sca:function(){
            console.log(this.choise)
            if( this.choise ){
                window.location.href = "vidDet_sca.html"
            }else{
                alertWarn("请选择支付方式")
            }
        }
    }
})




