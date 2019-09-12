




var v = new Vue({
    el: "#app",
    data: {
        //用户信息
        userMsg:false,
        //头部导航标记
        navSign:0,
        //通知导航标记
        msgSign:1,

        msgd0:[
            {
                msg:"《热退诊出：幼儿急诊鉴别诊断6大要点（附图）》",
                time:"2018-11-11  12:00",
                name:"晴子",
                msg2:"回复了你"
            },
            {
                msg:"《热退诊出：幼儿急诊鉴别诊断6大要点（附图）》",
                time:"2018-11-11  12:00",
                name:"晴子",
                msg2:"回复了你"
            },
            {
                msg:"《热退诊出：幼儿急诊鉴别诊断6大要点（附图）》",
                time:"2018-11-11  12:00",
                name:"晴子",
                msg2:"评论了你"
            },
            {
                msg:"《热退诊出：幼儿急诊鉴别诊断6大要点（附图）》",
                time:"2018-11-11  12:00",
                name:"晴子",
                msg2:"评论了你"
            },
        ],

        msgd:[
            {
                msg:"两人都是中唐时期十分出名的诗人，在这一期，例如韩愈。",
                time:"2018-11-11  12:00",
            },
            {
                msg:"两人都是中唐时期十分出名的诗人，在这一期，例如韩愈。",
                time:"2018-11-11  12:00",
            },
            {
                msg:"两人都是中唐时期十分出名的诗人，在这一期，例如韩愈。",
                time:"2018-11-11  12:00",
            },
            {
                msg:"两人都是中唐时期十分出名的诗人，在这一期，例如韩愈。",
                time:"2018-11-11  12:00",
            },
            {
                msg:"两人都是中唐时期十分出名的诗人两人都是中唐时期十分出名的诗人两人都是中唐时期十分出名的诗人两人都是中唐时期十分出名的诗人两人都是中唐时期十分出名的诗人两人都是中唐时期十分出名的诗人两人都是中唐时期十分出名的诗人两人都是中唐时期十分出名的诗人两人都是中唐时期十分出名的诗人",
                time:"2018-11-11    12:00",
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
       


        newsThing:function(index){
            this.newsNum = index
        },
        polItemMore:function(){
            var polItems = this.polItem;
            for(var i=0;i<10;i++){
                polItems.push({
                    title:"政策法规政策法规政策法规政策法规政策",
                    msg:"政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    form:"新华社",
                    time:"2018-6-8",
                })
            };

            this.polItem = polItems;
            
        },


       
        msgType:function(sign){
            this.msgSign = sign
            if(sign==2){
                setTimeout(function(){
                    texten();
                },100)
                
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
    $(".msgRight2 p").click(function(){
        if($(this).hasClass('pSign')){
            $(this).removeClass('pSign')
            $(this).siblings("i").css("transform","rotateX(180deg)");
        }else{
            $(this).addClass('pSign')
            $(this).siblings("i").css("transform","rotateX(0deg)");
        }
    })

    $(".msgRight2 i").click(function(){
        if($(this).siblings("p").hasClass('pSign')){
            $(this).siblings("p").removeClass('pSign')
            $(this).css("transform","rotateX(180deg)");
        }else{
            $(this).siblings("p").addClass('pSign')
            $(this).css("transform","rotateX(0deg)");
        }
    })




})

function texten(){
   $('.msgRight2 p').each(function(index, element) {
        var textWidth = $(this).find('span').width();
        if( textWidth > 656 ){
            $(this).siblings("i").show();
        }
    });
}