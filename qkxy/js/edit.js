var v = new Vue({
    el: "#app",
    data: {
        //用户信息
        userMsg:false,

        //编辑标记
        editSign:0,

        // 视频正文
        vidText:"请输入视频简介",


    },
    // watch: {
    //             vidText(newValue, oldValue) {
    //             console.log(oldValue,newValue)
    //         }
    // },
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
       
       // this.vidText = "一个"
    
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
            window.location.href = "index.html"
        },
        
        editChoise:function(sign){
            this.editSign = sign
        },

        editNext:function(){
            if( this.editSign == 1 ){
                window.location.href = "editVid.html"
                // window.open("editVid.html");
            }else if( this.editSign == 2 ){
                window.location.href = "editArt.html"
                // window.open("editArt.html");
            }else if( this.editSign == 3 ){
                window.location.href = "editCase.html"
                // window.open("editCase.html");
            }else if( this.editSign == 4 ){
                window.location.href = "editQuse.html"
                // window.open("editQuse.html");
            }else{
                alertWarn("请选择编辑类型")
                return false;
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



