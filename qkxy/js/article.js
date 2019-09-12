$(document).ready(function(){

    $("#carousel_1").FtCarousel();

})


var v = new Vue({
    el: "#app",
    data: {
        //用户信息
        userMsg:false,
        //头部导航标记
        navSign:3,
       

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
                    name:"",
                    form:"新华社",
                    company:"",
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
                    company:"",
                    time:"2018-6-8",
                    look:5000,
                },
                {
                    img:"img/new2_03.png",
                    headerImg:"",
                    type:"精选",
                    title:"政策法规政策法规政策法规政策法规政策",
                    msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    name:"",
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
               $("#carousel_1").FtCarousel();
    var arr1 = $(".col-side2 li");
    var width0 = $(".col-side2-box").width();
    var width1 = 0;
    arr1.each(function(){
      width1 += $(this).width()+75;
    })
    if( width1 > 846){
      $(".col-side2").width(width1);
    }else{
      $(".col-side2").width(846);
    }
    var left1 = width1 - width0;
    if( left1 > 0 ){
      $(".col-side2-box-p").show();
      $(".icon-zuo").addClass('isign');
      $(".icon-zuo").click(function(){
          $('.col-side2').animate({
              left: 0
          },100,function(){
              $(".icon-zuo").addClass('isign');
              $(".icon-you").removeClass('isign');
          });
      })
      $(".icon-you").click(function(){
          $('.col-side2').animate({
              left: -1*(left1 + 60)
          },100,function(){
              $(".icon-you").addClass('isign');
              $(".icon-zuo").removeClass('isign');
          });
      })
    }else{
      $(".col-side2-box-p").hide();
    }
    
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
                                look:5000
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