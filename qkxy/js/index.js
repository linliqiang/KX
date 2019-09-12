$(document).ready(function(){

    // $(".col-side-nav").focus();

    // 第一个轮播
	$("#carousel_1").FtCarousel();

    //第二个轮播
    $('.ms1').bxSlider({

        slideWidth: 260,

        minSlides: 2,

        maxSlides: 3,

        slideMargin: 16

      });

    //第三个轮播
    $('.ms2').bxSlider({

        slideWidth: 260,

        minSlides: 2,

        maxSlides: 3,

        slideMargin: 16

      });

})


var v = new Vue({
    el: "#app",
    data: {
        //用户信息
        userMsg:false,
        //头部导航标记
        navSign:1,
       
        //横向导航标记
        csNum:1,
        //普通列表数据
        repeatItem:[
                {
                    img:"img/new2_03.png",
                    headerImg:"img/header001.png",
                    type:"经验",
                    title:"政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    name:"刘思雨",
                    form:"",
                    company:"四川省成都医院",
                    time:"2018-6-8",
                    look:5000,
                },
                {
                    img:"img/new2_03.png",
                    headerImg:"img/header001.png",
                    type:"秘方",
                    title:"政策法规政策法规政策法规政策法规政策",
                    msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    name:"刘思雨",
                    form:"新华社",
                    company:"四川省成都医院",
                    time:"2018-6-8",
                    look:5000,
                },
                {
                    img:"img/new2_03.png",
                    headerImg:"",
                    type:"精选",
                    title:"政策法规政策法规政策法规政策法规政策",
                    msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    name:"刘思雨",
                    form:"新华社",
                    company:"四川省成都医院",
                    time:"2018-6-8",
                    look:5000,
                },
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
                },
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
                },
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
                },
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
                },
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
                },
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
                },
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
                },
        ],

        // 轮播数据
        scr1:{
            mleft:0,
            start:0,
            end:4,

        }
        

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
        repeatItemMore:function(){
            for(var i=0;i<10;i++){
                    this.repeatItem.push(
                            {
                                img:"img/new2_03.png",
                                headerImg:"",
                                type:"精选",
                                title:"政策法规政策法规政策法规政策法规政策",
                                msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                                name:"刘思雨",
                                form:"新华社",
                                company:"四川省成都医院",
                                time:"2018-6-8",
                                look:5000,
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