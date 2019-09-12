var v = new Vue({
    el: "#app",
    data: {
      //用户信息
        userMsg:false,
        //头部导航标记
        navSign:4,
       
     
        timeh:05,
        timem:01,
        times:10,


    },
    created:function() {
       if( window.localStorage.getItem("user") ){
            console.log(window.localStorage.getItem("user"))
            var datas = JSON.parse(window.localStorage.getItem("user"))
            this.userMsg = datas

       }else{
        console.log("没有登录用户信息")
       }
    },
    mounted:function() {

      var that = this;
       
       setInterval(function(){
        that.times = that.times*1 - 1;
        if( that.times == 0){
          that.times = 59;
          that.timem = that.timem*1 - 1;
          if( that.timem == 0 ){
            that.timem = 59
            that.timeh =  that.timeh*1 - 1
          }
        }
       },1000)
    
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

        tofeed:function(){
            if(this.userMsg){
                window.location.href = "user.html?type=or"
            }else{
                window.location.href = "login.html"
            }
        },
       

       

    }

})