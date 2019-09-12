var v = new Vue({
    el: "#app",
    data: {
       time:300,
    },
    created:function() {
    },
    mounted:function() {
        var that = this;
        setInterval(function(){
            that.time = that.time - 1;
            if(that.time == 0){
                var meal = sessionStorage.getItem('meal');
                sessionStorage.removeItem('meal');
                if( meal == "ok" ){
                    sessionStorage.setItem('mealok',"ok");
                     window.location.href = "vid.html"
                }else{
                     window.location.href = "vidDet_xindian.html?pay=ok"
                }
            }
        },1000)
    },
    methods: {
        // 意见反馈
        tofeed:function(){
            if(this.userMsg){
                window.location.href = "user.html?type=or"
            }else{
                window.location.href = "login.html"
            }
        }, 
    }
})







