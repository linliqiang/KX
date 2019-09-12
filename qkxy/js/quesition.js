var v = new Vue({
    el: "#app",
    data: {
        //用户信息
        userMsg:false,
        //头部导航标记
        navSign:7,
        
       
        //横向导航标记
        csNum:1,
        //问答列表数据
        quseRepeatItem:[
                {
                    title:"政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    answer:16,
                    guanzhu:true,
                },
                {
                    title:"政策法规政策法规政策法规政策法规政策",
                    msg:"",
                    answer:0,
                    guanzhu:false,
                },
                {
                    title:"政策法规政策法规政策法规政策法规政策",
                    msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    answer:16,
                    guanzhu:true,
                },
                {
                    title:"政策法规政策法规政策法规政策法规政策",
                    msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    answer:16,
                    guanzhu:true,
                },
        ],
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
       


        // 横向导航方法
        csThing:function(index){
            this.csNum = index
        },
        quseGuanzhuThing:function(sign){
            console.log(sign)
            this.quseRepeatItem[sign].guanzhu = !this.quseRepeatItem[sign].guanzhu
        },
        quesItemMore:function(){
            for(var i=0;i<4;i++){
                this.quseRepeatItem.push(
                            {
                                title:"政策法规政策法规政策法规政策法规政策",
                                msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                                answer:16,
                                guanzhu:true,
                            }
                );
            };
        },

       bianji:function(){
            if(!this.userMsg){
                window.location.href = "login.html"
            }else if( this.userMsg.type == "ordinary" ){
                // 普通用户
                if(window.sessionStorage.getItem("renzheng")){
                    alertRZ2();
                }else{
                    alertRZ();
                }
                
            }else{
                window.location.href = "editQuse.html"
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