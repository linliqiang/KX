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
        // 用户点击了哪个视频标记
        videoSign:1000,
        // 课程数据列表
        curriculum:[
                    {
                      title:"一个冬天的早晨一个冬天的早晨一个冬天的早晨一个冬天的早晨一个冬天的早晨一个冬天的早晨一个冬天的早晨一个冬天的早晨",
                      videoSrc:"video/qwe.mp4",
                      jurisdiction:0,
                    },
                    {
                      title:"一个冬天的早晨2",
                      videoSrc:"video/qwe.mp4",
                      jurisdiction:0,
                    },
                    {
                      title:"一个冬天的早晨3",
                      videoSrc:"video/qwe.mp4",
                      jurisdiction:0,
                    },
                    {
                      title:"一个冬天的早晨4",
                      videoSrc:"video/qwe.mp4",
                      jurisdiction:0,
                    },
                    {
                      title:"一个冬天的早晨5",
                      videoSrc:"video/qwe.mp4",
                      jurisdiction:0,
                    },
                    {
                      title:"一个冬天的早晨6",
                      videoSrc:"video/qwe.mp4",
                      jurisdiction:0,
                    },
                    {
                      title:"一个冬天的早晨7",
                      videoSrc:"video/qwe.mp4",
                      jurisdiction:0,
                    },
        ],
        // 赞
        zanN:0,
        zanB:false,
        shouN:12,
        shouB:false,
        // 二级回复目标
        toname:"",
        //二级回复下标
        toSign:"",
        //评论数据
        commentData:{
                    data:[
                          {
                            img:"img/header001.png",
                            name:"李淼",
                            formType:"doctor",
                            time:"2018-12-07-16:30",
                            msg:"这是一级评论",
                            zan:12,
                            repBoxShow:false,
                            n:3,//加载条数
                            ntext:"展开所有评论",
                            otherData:[
                                      {
                                        formName:"校长",
                                        toName:"小明",
                                        time:"2018-12-07 16:30",
                                        msg:"这是二级回复",
                                      },
                                      {
                                        formName:"张张",
                                        toName:"明凯",
                                        time:"2018-12-07 16:30",
                                        msg:"这是二级回复这是二级回复这是二级回复这是二级回复这是二级回复这是二级回复这是二级回复",
                                      },
                                      {
                                        formName:"张张",
                                        toName:"明凯",
                                        time:"2018-12-07 16:30",
                                        msg:"这是二级回复这是二级回复这是二级回复这是二级回复这是二级回复这是二级回复这是二级回复这是二级回复这是二级回复这是二级回复这是二级回复这是二级回复这是二级回复这是二级回复这是二级回复",
                                      },
                                      {
                                        formName:"张张",
                                        toName:"明凯",
                                        time:"2018-12-07 16:30",
                                        msg:"这是二级回复这是二级回复这是二级回复这二级回复这是二级回复这是二级回复这是二级回复这是二级回复这是二级回复",
                                      },
                                      {
                                        formName:"张张",
                                        toName:"明凯",
                                        time:"2018-12-07 16:30",
                                        msg:"这是二级回复这是二级回复复这是二级回复这是二级回复这是二级回复这是二级回复",
                                      },
                                      
                            ],
                          },
                          {
                            img:"img/header001.png",
                            name:"梅梅",
                            formType:"expert",
                            time:"2018-12-07-16:30",
                            msg:"这是一级评论,很棒的文章",
                            zan:6,
                            repBoxShow:false,
                            n:3,//加载条数
                            ntext:"展开所有评论",
                            otherData:[
                                      {
                                        formName:"流川枫",
                                        toName:"晴子",
                                        time:"2018-12-07 16:30",
                                        msg:"这是二级回复",
                                      },
                                      {
                                        formName:"黑雪姬",
                                        toName:"左手画心",
                                        time:"2018-12-07 16:30",
                                        msg:"这是二级回复",
                                      },
                                      
                            ],
                          },
                          {
                            img:"img/header001.png",
                            name:"张火",
                            formType:"ordinary",
                            time:"2018-12-07-16:30",
                            msg:"棒棒哒",
                            zan:6,
                            repBoxShow:false,
                            n:3,//加载条数
                            ntext:"展开所有评论",
                            otherData:[
                                      {
                                        formName:"枫",
                                        toName:"晴",
                                        time:"2018-12-07 16:30",
                                        msg:"这是二级回复",
                                      },
                                      {
                                        formName:"雪姬",
                                        toName:"画心",
                                        time:"2018-12-07 16:30",
                                        msg:"这是二级回复",
                                      }, 
                            ],
                          }
                    ],
        }
    },
    watch:{
      commentData:{
      　　　　handler:function(newValue, oldValue){
      　　　　　　console.log("监听数据变化")
                  addemoji();
      　　　　},
      　　　　deep: true
  　　}
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
       // 判断是否从购买页面跳转
       var payType = window.location.href.split("?")[1].split("=")[1];
       if( payType == "fr" ){
          this.boxNavSign = 1;
          this.videoJurisdiction = 0
       }else if( payType == "ok" ){
          this.boxNavSign = 2;
          this.videoJurisdiction = 2
       }else if( payType == "no" ){
          this.boxNavSign = 1;
          this.videoJurisdiction = 1
       }else{

       }
       // 根据用户对于此课程的购买情况（免费，已购买，未购买）设定播放权限
       // 免费或已经购买
       if(that.videoJurisdiction == 0 || that.videoJurisdiction == 2){
        for( var i = 0;i<that.curriculum.length;i++){
            that.curriculum[i].jurisdiction = 100
        }
       // 未购买
       }else{
          for( var i = 0;i<that.curriculum.length;i++){
              
              if( i == 0){
                  that.curriculum[i].jurisdiction = 10
              }else{
                  that.curriculum[i].jurisdiction = 0
              }
          }
       }
    },
    mounted:function() {
       addemoji();
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
        boxNavt:function(sign){
          this.boxNavSign = sign
        },
        videoPlay:function(videoSrc,jurisdiction,sign){
            // this.videoSign = sign;
            this.$refs.vid.src = videoSrc;
            videoStart(jurisdiction,sign);
            if(jurisdiction==10 || jurisdiction==100){
                this.videoSign = sign;
            }else{
                this.videoSign = 10000;
            }
        },
        quanping:function(){
          if( this.userMsg){
              // 用户已经登录
              sessionStorage.setItem('meal',"no");
              window.location.href = "vidDet_pay.html"
          }else{
              // 用户没有登录
              window.location.href = "login.html"
          }
        },


        











        // # 评论
        // 判断是否登录
        isToLogin:function(){
          if( !this.userMsg){
              window.location.href = "login.html";
              return false;
          }
        }, 
        //点赞
        dianzan:function(event,sign){
              this.isToLogin();
              var el = event.currentTarget;
              if( el.getAttribute("class") == "bh"){
                  this.commentData.data[sign].zan = this.commentData.data[sign].zan - 1
                  el.removeAttribute("class","bh") 
              }else{
                  this.commentData.data[sign].zan = this.commentData.data[sign].zan + 1
                  el.setAttribute("class","bh") 
              }
        },
        //为循环出的文本框添加id
        forId:function(index){
          return "forId_"+index;
        },
        //字符转义
        replace:function(value){
            var replace=replace_em(value);
            return replace
        },
        //发布一级评论
        huifu1OK:function(){
            this.isToLogin();
            var that = this;
            var str = $("#mainarea").val(); //多行文本框
            this.commentData.num = this.commentData.num +1;
            this.commentData.data.unshift(
                                      {
                                        img:that.userMsg.img,
                                        name:that.userMsg.name,
                                        formType:that.userMsg.type,
                                        time:getTime(),
                                        msg:str,
                                        zan:0,
                                        repBoxShow:false,
                                        n:3,//加载条数
                                        ntext:"展开所有评论",
                                        otherData:[],
                                      }
              );
            $("#mainarea").val("");
        },
        //二级回复事件
        huifu2:function(sign,name,sign2){
          var that = this;
              this.isToLogin();
              if(name){
                  this.commentData.data[sign].repBoxShow = !this.commentData.data[sign].repBoxShow;
                  $("#forId_"+sign).attr("placeholder","回复"+name+"：");
                  this.toname = name;
                  this.toSign = sign2;
              }else{
                  this.commentData.data[sign].repBoxShow = !this.commentData.data[sign].repBoxShow;
                  $("#forId_"+sign).attr("placeholder","回复楼主：");
                  this.toname = "";
                  this.toSign = "";
              }

              setTimeout(function(){

                if( that.commentData.data[sign].repBoxShow ){

                    var topn2 =  $("#forId_"+sign).offset().top;
                    $("body,html").animate({
                        scrollTop:topn2-400 
                    });
                    $("#forId_"+sign).focus();

                }

              },100);


        },
        huifu2qu:function(sign){
          this.commentData.data[sign].repBoxShow = false
        },
        huifu2OK:function(sign){
          var that = this
          var el = event.currentTarget;
          var str = $("#forId_"+sign).val();
          if(that.toname){
              this.commentData.data[sign].otherData.splice(that.toSign+1,0,{
                                                                              formName:that.userMsg.name,
                                                                              toName:that.toname,
                                                                              time:getTime(),
                                                                              msg:str,
                                                                            }
                )
              $("#forId_"+sign).val("");
              this.commentData.data[sign].repBoxShow = false;
          }else{
              this.commentData.data[sign].otherData.unshift(
                                                    {
                                                      formName:that.userMsg.name,
                                                      toName:"",
                                                      time:getTime(),
                                                      msg:str,
                                                    }
                )
              $("#forId_"+sign).val("");
              this.commentData.data[sign].repBoxShow = false;
          }

          this.commentData.data[sign].n = 1000000
          this.commentData.data[sign].ntext = "收起评论" 

        },
        // 删除评论
        delCom:function(sign,sign2){
          var that = this;
          if( sign2 >= 0){
            that.commentData.data[sign].otherData.splice(sign2,1)
          }else{
            that.commentData.data.splice(sign,1)
          }
        },

        //展开所有评论
        showAll:function(sign){
          console.log(sign)
          if( this.commentData.data[sign].n == 1000000 ){
               this.commentData.data[sign].n = 3 
               this.commentData.data[sign].ntext = "展开所有评论" 
          }else{
                this.commentData.data[sign].n = 1000000
                this.commentData.data[sign].ntext = "收起评论" 
          }
          
        },
        
        // 评论 #
        
        // 赞和收藏
        mzan:function(){
          if(this.zanB){
              this.zanN = this.zanN*1 - 1
          }else{
              this.zanN = this.zanN*1 + 1
          }
          this.zanB = !this.zanB
        },
        mshou:function(){
          if(this.shouB){
              this.shouN = this.shouN*1 - 1
          }else{
              this.shouN = this.shouN*1 + 1
          }
          this.shouB = !this.shouB
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



// #qq表情
function replace_em(str){

    str = str.replace(/\</g,'&lt;');

    str = str.replace(/\>/g,'&gt;');

    str = str.replace(/\n/g,'<br/>');

    str = str.replace(/\[em_([0-9]*)\]/g,'<img src="qqFace/arclist/$1.gif" border="0" />');

    return str;

}
//添加表情事件
function addemoji(){
  $('.yjxiao').qqFace({
        // id : 'facebox',
        assign:'mainarea',
        path:'qqFace/arclist/'  //表情存放的路径
    });

  var erjixiao = $('.erjixiao')
  for(var i=0;i<erjixiao.length;i++){
    (function(j){
        var n = erjixiao.eq(j).parents(".my-rep").eq(0).index()
        erjixiao.eq(j).qqFace({
              // id : 'facebox',
              assign:"forId_"+n,
              path:'qqFace/arclist/'  //表情存放的路径
        });
    })(i)
  }

}


// 进入全屏的兼容性写法
function reqFullScreen(element) {
        var de = element;
        if (de.requestFullscreen) {
            de.requestFullscreen();
        } else if (de.mozRequestFullScreen) {
            de.mozRequestFullScreen();//火狐浏览器的请求全屏
        } else if (de.webkitRequestFullScreen) {
            de.webkitRequestFullScreen();//谷歌、Safari浏览器的请求全屏
        } else if (de.msRequestFullscreen) {
            de.msRequestFullscreen();//IE浏览器的请求全屏
        } else {
            console.log("进入全屏失败")
        }
    }


// 退出全屏的兼容性写法
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }
    else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
    else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    }
    else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    }  
}

var video = document.getElementById('vid');//视频播放元素

function videoStart(time,sign){







        $(".alertPay").remove();

        // video.currentTime=0;

        video.addEventListener('loadedmetadata', function () {
            if (video.currentTime!=0) {
                video.currentTime=0;
            }
        });



        if(time == 0){
            $(".ban img").show();
            $(".ban video").hide();
            if( v.userMsg){
                // 用户已经登录
                alertPay("购买后可观看完整课程","是否前往购买?");
            }else{
                // 用户没有登录
                alertPay("登录并购买后可观看完整课程","是否前往登录?");
            }
        }else if(time==10){



            console.log("10秒");

            $(".ban img").hide();
            $(".ban video").show();
            $(window).scrollTop(0);


            // 开启全屏 
            // reqFullScreen(video);

            video.addEventListener("timeupdate",function(){
                var timeDisplay = Math.floor(video.currentTime);
                console.log(timeDisplay)
                if(timeDisplay > 10){

                        exitFullscreen();

                        video.currentTime = 0;
                        video.pause();


                        $(".ban video").hide();
                        $(".ban img").show();


                        if( v.userMsg){
                            // 用户已经登录
                            sessionStorage.setItem('meal',"no");
                            alertPay("购买后可观看完整课程","是否前往购买?");
                        }else{
                            // 用户没有登录
                            alertPay("登录并购买后可观看完整课程","是否前往登录?");
                        }
   
                }
            },false);
            video.play();

        }else{

            $(window).scrollTop(0);
            $(".ban img").hide();
            $(".ban video").show();

            // 开启全屏 
            // reqFullScreen(video)

            video.play();
        }
        
    }



//提示购买弹框
function alertPay(msg1,msg2){
    $("body").append("<div class='bg-xd'></div>")
    $("body").append("<div class='alertPay'><p>"+msg1+"</p><p>"+msg2+"</p><div><button class='alertPayHide'>取消</button><button class='alertPayOK'>确定</button></div></div>");
    $(".alertPayHide").click(function(){
      $(".alertPay").remove();
      $(".bg-xd").remove();
    })
    $(".alertPayOK").click(function(){
      if( v.userMsg){
          // 用户已经登录
          sessionStorage.setItem('meal',"no");
          window.location.href = "vidDet_pay.html"
      }else{
          // 用户没有登录
          window.location.href = "login.html"
      }
      
    })
}



