var v = new Vue({
    el: "#app",
    data: {
        //用户信息
        userMsg:false,
        //头部导航标记
        navSign:2,
        // 标记：介绍、目录、评论
        boxNavSign:1,
        // 用户对于课程的权限类型：0免费；1付费但未购买；2已经购买
        videoJurisdiction:0,
        // 课程数据列表
        curriculum:[
                    {
                      title:"第一期：一个冬天的早晨一个冬天的早晨一个冬天的早晨一个冬天的早晨一个冬天的早晨一个冬天的早晨一个冬天的早晨一个冬天的早晨",
                      videoSrc:"video/qwe.mp4",
                      jurisdiction:0,
                    },
                    {
                      title:"第二期：一个冬天的早晨2",
                      videoSrc:"video/qwe.mp4",
                      jurisdiction:0,
                    },
                    {
                      title:"第三期：一个冬天的早晨3",
                      videoSrc:"video/qwe.mp4",
                      jurisdiction:0,
                    },
                    {
                      title:"第四期：一个冬天的早晨4",
                      videoSrc:"video/qwe.mp4",
                      jurisdiction:0,
                    },
                    {
                      title:"第五期：一个冬天的早晨5",
                      videoSrc:"video/qwe.mp4",
                      jurisdiction:0,
                    },
                    {
                      title:"第六期：一个冬天的早晨6",
                      videoSrc:"video/qwe.mp4",
                      jurisdiction:0,
                    },
                    {
                      title:"第七期：一个冬天的早晨7",
                      videoSrc:"video/qwe.mp4",
                      jurisdiction:0,
                    },
        ],
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
        tofeed:function(){
            if(this.userMsg){
                window.location.href = "user.html?type=or"
            }else{
                window.location.href = "login.html"
            }
        }, 
        boxNavt:function(sign){
          this.boxNavSign = sign
        },
        topay:function(){
            sessionStorage.setItem('meal',"ok");
            window.location.href = "vidDet_pay.html"
        },
        toDet:function(){
          window.location.href = "vidDet_xindian.html?pay=no"
        }
    }
})




