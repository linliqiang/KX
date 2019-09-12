var v = new Vue({
    el: "#app",
    data: {
        //用户信息
        userMsg:false,
        //头部导航标记
        navSign:6,
        expItem:[
                {
                    name:"张一凡",
                    dep:"风湿免疫科",
                    form:"河北省医科大学第二人民医院",
                    title:"政策法政政策法规政策法规政策规政策法规政策法规政策法规政策",
                },
                {
                    name:"张一凡",
                    dep:"风湿免疫科",
                    form:"河北省医科大学第二人民医院",
                    title:"政策法政政策法规政策法规政策规政策法规政策法规政策法规政策",
                },
                {
                    name:"张一凡",
                    dep:"风湿免疫科",
                    form:"河北省医科大学第二人民医院",
                    title:"政策法政政策法规政策法规政策规政策法规政策法规政策法规政策政策法政政策法规政策法规政策规政策法规政策法规政策法规政策政策法政政策法规政策法规政策规政策法规政策法规政策法规政策",
                },
                {
                    name:"张一凡",
                    dep:"风湿免疫科",
                    form:"河北省医科大学第二人民医院",
                    title:"政策法政政策法规政策法规政策规政策法规政策法规政策法规政策",
                },
                {
                    name:"张一凡",
                    dep:"风湿免疫科",
                    form:"河北省医科大学第二人民医院",
                    title:"政策法政政策法规政策法规政策规政策法规政策法规政策法规政策",
                },
                {
                    name:"张一凡",
                    dep:"风湿免疫科",
                    form:"河北省医科大学第二人民医院",
                    title:"政策法政政策法规政策法规政策规政策法规政策法规政策法规政策",
                },
                {
                    name:"张一凡",
                    dep:"风湿免疫科",
                    form:"河北省医科大学第二人民医院",
                    title:"政策法政政策法规政策法规政策规政策法规政策法规政策法规政策",
                },
                {
                    name:"张一凡",
                    dep:"风湿免疫科",
                    form:"河北省医科大学第二人民医院",
                    title:"政策法政政策法规政策法规政策规政策法规政策法规政策法规政策",
                },
                {
                    name:"张一凡",
                    dep:"风湿免疫科",
                    form:"河北省医科大学第二人民医院",
                    title:"政策法政政策法规政策法规政策规政策法规政策法规政策法规政策",
                },
                {
                    name:"张一凡",
                    dep:"风湿免疫科",
                    form:"河北省医科大学第二人民医院",
                    title:"政策法政政策法规政策法规政策规政策法规政策法规政策法规政策",
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
       
        expItemMore:function(){
            for(var i=0;i<10;i++){
                this.expItem.push(
                            {
                                name:"郭艺芳",
                                dep:"老年心血管科",
                                form:"河北省医科大学第二人民医院",
                                title:"政策法政政策法规政策法规政策规政策法规政策法规政策法规政策",
                            }
                );
            };
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