$(document).ready(function(){
     $(function(){
        $(".repeatItemBox").eq(0).children(".repeatItem:last").css("borderBottom","0px")
        $(".repeatItemBox").eq(1).children(".repeatItem:last").css("borderBottom","0px")
        $(".repeatItemBox").eq(2).children(".repeatItem:last").css("borderBottom","0px")
        // $(".repeatItemBox").children(".repeatItem:last-child").css("borderBottom","0px")
     })
})
//普通列表数据样本
        var repeatItems = [
                {
                    img:"img/new2_03.png",
                    headerImg:"img/header001.png",
                    type:"经验",
                    title:"政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    name:"张一凡",
                    form:"新华社",
                    company:"四川省成都医院",
                    time:"2018-6-8",
                    look:5000,
                    formType:"doctor",
                },
                {
                    img:"img/new2_03.png",
                    headerImg:"img/header001.png",
                    type:"秘方",
                    title:"政策法规政策法规政策法规政策法规政策",
                    msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    name:"张一凡",
                    form:"新华社",
                    company:"四川省成都医院",
                    time:"2018-6-8",
                    look:5000,
                    formType:"expert",
                },
                {
                    img:"img/new2_03.png",
                    headerImg:"",
                    type:"精选",
                    title:"政策法规政策法规政策法规政策法规政策",
                    msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    name:"张一凡",
                    form:"新华社",
                    company:"四川省成都医院",
                    time:"2018-6-8",
                    look:5000,
                    formType:"",
                },
                {
                    img:"img/new2_03.png",
                    headerImg:"img/header001.png",
                    type:"精选",
                    title:"政策法规政策法规政策法规政策法规政策",
                    msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    name:"张一凡",
                    form:"新华社",
                    company:"四川省成都医院",
                    time:"2018-6-8",
                    look:5000,
                    formType:"expert",
                },
                {
                    img:"img/new2_03.png",
                    headerImg:"img/header001.png",
                    type:"经验",
                    title:"政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    name:"张一凡",
                    form:"新华社",
                    company:"四川省成都医院",
                    time:"2018-6-8",
                    look:5000,
                    formType:"doctor",
                },
                {
                    img:"img/new2_03.png",
                    headerImg:"img/header001.png",
                    type:"秘方",
                    title:"政策法规政策法规政策法规政策法规政策",
                    msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    name:"张一凡",
                    form:"新华社",
                    company:"四川省成都医院",
                    time:"2018-6-8",
                    look:5000,
                    formType:"expert",
                },
                {
                    img:"img/new2_03.png",
                    headerImg:"",
                    type:"精选",
                    title:"政策法规政策法规政策法规政策法规政策",
                    msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    name:"张一凡",
                    form:"新华社",
                    company:"四川省成都医院",
                    time:"2018-6-8",
                    look:5000,
                    formType:"",
                },
                {
                    img:"img/new2_03.png",
                    headerImg:"img/header001.png",
                    type:"精选",
                    title:"政策法规政策法规政策法规政策法规政策",
                    msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    name:"张一凡",
                    form:"新华社",
                    company:"四川省成都医院",
                    time:"2018-6-8",
                    look:5000,
                    formType:"expert",
                },
                {
                    img:"img/new2_03.png",
                    headerImg:"img/header001.png",
                    type:"经验",
                    title:"政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    name:"张一凡",
                    form:"新华社",
                    company:"四川省成都医院",
                    time:"2018-6-8",
                    look:5000,
                    formType:"doctor",
                },
                {
                    img:"img/new2_03.png",
                    headerImg:"img/header001.png",
                    type:"秘方",
                    title:"政策法规政策法规政策法规政策法规政策",
                    msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    name:"张一凡",
                    form:"新华社",
                    company:"四川省成都医院",
                    time:"2018-6-8",
                    look:5000,
                    formType:"expert",
                },
        ];
//问答列表数据样本
        var quseRepeatItems = [
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
                    guanzhu:true,
                },
                {
                    title:"政策法规政策法规政策法规政策法规政策",
                    msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    answer:16,
                    guanzhu:true,
                },
                {
                    title:"政策法规政策法规政策法规政策法规政策",
                    msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    answer:16,
                    guanzhu:true,
                },
                {
                    title:"政策法规政策法规政策法规政策法规政策",
                    msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    answer:16,
                    guanzhu:true,
                },
                {
                    title:"政策法规政策法规政策法规政策法规政策",
                    msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    answer:16,
                    guanzhu:true,
                },
                {
                    title:"政策法规政策法规政策法规政策法规政策",
                    msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    answer:16,
                    guanzhu:true,
                },
                {
                    title:"政策法规政策法规政策法规政策法规政策",
                    msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    answer:16,
                    guanzhu:true,
                },
                {
                    title:"政策法规政策法规政策法规政策法规政策",
                    msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    answer:16,
                    guanzhu:true,
                },
                {
                    title:"政策法规政策法规政策法规政策法规政策",
                    msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    answer:16,
                    guanzhu:true,
                },
        ];

//克隆数据
function obj_json(data){
    //转json
    var data1 = JSON.stringify(data)
    //转对象
    var data2 = JSON.parse(data1)
    return data2
}

// 视频
var repeatItems1 = obj_json(repeatItems);
// 文章
var repeatItems2 = obj_json(repeatItems);
// 病例
var repeatItems3 = obj_json(repeatItems);
// 提问
var quseRepeatItems1 = obj_json(quseRepeatItems);


var v = new Vue({
    el: "#app",
    data: {
        //用户信息
        userMsg:false,
        //头部导航标记
        navSign:0,
        //专家个人作品导航标记
        newsNum:1,

        // 视频
        repeatItem1:repeatItems1,
        // 文章
        repeatItem2:repeatItems2,
        // 病例
        repeatItem3:repeatItems3,
        // 提问
        quseRepeatItem1:quseRepeatItems1,
        
    },
    created:function() {
       if( window.localStorage.getItem("user") ){
            console.log(window.localStorage.getItem("user"))
            var datas = JSON.parse(window.localStorage.getItem("user"))
            this.userMsg = datas

       }else{
        console.log("没有登录用户信息")
       }
       this.repeatItem2[0].img = ""
       this.repeatItem3[0].img = ""
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
        // 查看更多
        lookMore:function(){
            if( this.newsNum == 1 ){
                for(var i=0;i<10;i++){
                    this.repeatItem1.push(
                                        {
                                            img:"img/new2_03.png",
                                            headerImg:"img/header001.png",
                                            type:"精选",
                                            title:"政策法规政策法规政策法规政策法规政策",
                                            msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                                            name:"刘思雨",
                                            form:"新华社",
                                            company:"四川省成都医院",
                                            time:"2018-6-8",
                                            look:5000, 
                                        }
                    )
                }
                
            }else if( this.newsNum == 2 ){
                for(var i=0;i<10;i++){
                    this.repeatItem2.push(
                                        {
                                            img:"img/new2_03.png",
                                            headerImg:"img/header001.png",
                                            type:"精选",
                                            title:"政策法规政策法规政策法规政策法规政策",
                                            msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                                            name:"刘思雨",
                                            form:"新华社",
                                            company:"四川省成都医院",
                                            time:"2018-6-8",
                                            look:5000, 
                                        }
                    )
                }
            }else if( this.newsNum == 3 ){
                for(var i=0;i<10;i++){
                    this.repeatItem3.push(
                                        {
                                            img:"img/new2_03.png",
                                            headerImg:"img/header001.png",
                                            type:"精选",
                                            title:"政策法规政策法规政策法规政策法规政策",
                                            msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                                            name:"刘思雨",
                                            form:"新华社",
                                            company:"四川省成都医院",
                                            time:"2018-6-8",
                                            look:5000, 
                                        }
                    )
                }
            }else{
                for(var i=0;i<10;i++){
                    this.quseRepeatItem1.push(
                                        {
                                            title:"政策法规政策法规政策法规政策法规政策",
                                            msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                                            answer:16,
                                            guanzhu:true,
                                        }
                    )
                }
            }
        },

        //取消关注方法，发布和关注的提问通用
        quseGuanzhuThing:function(sign){
                this.quseRepeatItem1[sign].guanzhu = !this.quseRepeatItem1[sign].guanzhu
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