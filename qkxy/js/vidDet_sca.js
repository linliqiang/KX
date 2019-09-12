var v = new Vue({
    el: "#app",
    data: {
    },
    created:function() {
    },
    mounted:function() {
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
        payok:function(){
            window.location.href = "vidDet_payok.html"
        }
    }
})




