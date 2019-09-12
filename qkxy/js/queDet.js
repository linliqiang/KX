var v = new Vue({
    el: "#app",
    data: {
        //用户信息
        userMsg:false,
        //头部导航标记
        navSign:7,

        // 二级回复目标
        toname:"",
        //二级回复目标的下标
        toSign:'',
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
                            repBoxShow1:false,
                            n:6,//加载条数
                            ntext:"更多回答",
                            otherData:[
                                      {
                                        img:"img/header001.png",
                                        formName:"校长",
                                        toName:"小明",
                                        time:"2018-12-07 16:30",
                                        msg:"这是二级回复",
                                      },
                                      {
                                        img:"img/header001.png",
                                        formName:"张张",
                                        toName:"明凯",
                                        time:"2018-12-07 16:30",
                                        msg:"这是二级回复这是二级回复这是二级回复这是二级回复这是二级回复这是二级回复这是二级回复",
                                      },
                                      {
                                        img:"img/header001.png",
                                        formName:"张张",
                                        toName:"明凯",
                                        time:"2018-12-07 16:30",
                                        msg:"这是二级回复这是二级回复这是二级回复这是二级回复这是二级回复这是二级回复这是二级回复这是二级回复这是二级回复这是二级回复这是二级回复这是二级回复这是二级回复这是二级回复这是二级回复",
                                      },
                                      {
                                        img:"img/header001.png",
                                        formName:"张张",
                                        toName:"明凯",
                                        time:"2018-12-07 16:30",
                                        msg:"这是二级回复这是二级回复这是二级回复这二级回复这是二级回复这是二级回复这是二级回复这是二级回复这是二级回复",
                                      },
                                      {
                                        img:"img/header001.png",
                                        formName:"张张",
                                        toName:"明凯",
                                        time:"2018-12-07 16:30",
                                        msg:"这是二级回复这是二级回复复这是二级回复这是二级回复这是二级回复这是二级回复",
                                      },
                                      {
                                        img:"img/header001.png",
                                        formName:"张张",
                                        toName:"明凯",
                                        time:"2018-12-07 16:30",
                                        msg:"这是二级回复这是二级回复复这是二级回复这是二级回复这是二级回复这是二级回复",
                                      },
                                      {
                                        img:"img/header001.png",
                                        formName:"张张",
                                        toName:"明凯",
                                        time:"2018-12-07 16:30",
                                        msg:"这是二级回复这是二级回复复这是二级回复这是二级回复这是二级回复这是二级回复",
                                      },
                                      {
                                        img:"img/header001.png",
                                        formName:"张张",
                                        toName:"明凯",
                                        time:"2018-12-07 16:30",
                                        msg:"这是二级回复这是二级回复复这是二级回复这是二级回复这是二级回复这是二级回复",
                                      },
                                      {
                                        img:"img/header001.png",
                                        formName:"张张",
                                        toName:"明凯",
                                        time:"2018-12-07 16:30",
                                        msg:"这是二级回复这是二级回复复这是二级回复这是二级回复这是二级回复这是二级回复",
                                      },
                                      {
                                        img:"img/header001.png",
                                        formName:"张张",
                                        toName:"明凯",
                                        time:"2018-12-07 16:30",
                                        msg:"这是二级回复这是二级回复复这是二级回复这是二级回复这是二级回复这是二级回复",
                                      },
                                      {
                                        img:"img/header001.png",
                                        formName:"张张",
                                        toName:"明凯",
                                        time:"2018-12-07 16:30",
                                        msg:"这是二级回复这是二级回复复这是二级回复这是二级回复这是二级回复这是二级回复",
                                      },
                                      {
                                        img:"img/header001.png",
                                        formName:"张张",
                                        toName:"明凯",
                                        time:"2018-12-07 16:30",
                                        msg:"这是二级回复这是二级回复复这是二级回复这是二级回复这是二级回复这是二级回复",
                                      },
                                      {
                                        img:"img/header001.png",
                                        formName:"张张",
                                        toName:"明凯",
                                        time:"2018-12-07 16:30",
                                        msg:"这是二级回复这是二级回复复这是二级回复这是二级回复这是二级回复这是二级回复",
                                      },
                                      {
                                        img:"img/header001.png",
                                        formName:"张张",
                                        toName:"明凯",
                                        time:"2018-12-07 16:30",
                                        msg:"这是二级回复这是二级回复复这是二级回复这是二级回复这是二级回复这是二级回复",
                                      },
                                      {
                                        img:"img/header001.png",
                                        formName:"张张",
                                        toName:"明凯",
                                        time:"2018-12-07 16:30",
                                        msg:"这是二级回复这是二级回复复这是二级回复这是二级回复这是二级回复这是二级回复",
                                      },
                                      {
                                        img:"img/header001.png",
                                        formName:"张张",
                                        toName:"明凯",
                                        time:"2018-12-07 16:30",
                                        msg:"这是二级回复这是二级回复复这是二级回复这是二级回复这是二级回复这是二级回复",
                                      },
                                      {
                                        img:"img/header001.png",
                                        formName:"张张",
                                        toName:"明凯",
                                        time:"2018-12-07 16:30",
                                        msg:"这是二级回复这是二级回复复这是二级回复这是二级回复这是二级回复这是二级回复",
                                      },
                                      {
                                        img:"img/header001.png",
                                        formName:"张张",
                                        toName:"明凯",
                                        time:"2018-12-07 16:30",
                                        msg:"这是二级回复这是二级回复复这是二级回复这是二级回复这是二级回复这是二级回复",
                                      },
                                      {
                                        img:"img/header001.png",
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
                            repBoxShow1:false,
                            n:6,//加载条数
                            ntext:"更多回答",
                            otherData:[
                                      {
                                        img:"img/header001.png",
                                        formName:"流川枫",
                                        toName:"晴子",
                                        time:"2018-12-07 16:30",
                                        msg:"这是二级回复",
                                      },
                                      {
                                        img:"img/header001.png",
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
                            repBoxShow1:false,
                            n:6,//加载条数
                            ntext:"更多回答",
                            otherData:[
                                      {
                                        img:"img/header001.png",
                                        formName:"枫",
                                        toName:"晴",
                                        time:"2018-12-07 16:30",
                                        msg:"这是二级回复",
                                      },
                                      {
                                        img:"img/header001.png",
                                        formName:"雪姬",
                                        toName:"画心",
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
                            repBoxShow1:false,
                            n:6,//加载条数
                            ntext:"更多回答",
                            otherData:[
                                      {
                                        img:"img/header001.png",
                                        formName:"枫",
                                        toName:"晴",
                                        time:"2018-12-07 16:30",
                                        msg:"这是二级回复",
                                      },
                                      {
                                        img:"img/header001.png",
                                        formName:"雪姬",
                                        toName:"画心",
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
                            repBoxShow1:false,
                            n:6,//加载条数
                            ntext:"更多回答",
                            otherData:[
                                      {
                                        img:"img/header001.png",
                                        formName:"枫",
                                        toName:"晴",
                                        time:"2018-12-07 16:30",
                                        msg:"这是二级回复",
                                      },
                                      {
                                        img:"img/header001.png",
                                        formName:"雪姬",
                                        toName:"画心",
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
                            repBoxShow1:false,
                            n:6,//加载条数
                            ntext:"更多回答",
                            otherData:[
                                      {
                                        img:"img/header001.png",
                                        formName:"枫",
                                        toName:"晴",
                                        time:"2018-12-07 16:30",
                                        msg:"这是二级回复",
                                      },
                                      {
                                        img:"img/header001.png",
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
       if( window.localStorage.getItem("user") ){
            console.log(window.localStorage.getItem("user"))
            var datas = JSON.parse(window.localStorage.getItem("user"))
            this.userMsg = datas

       }else{
        console.log("没有登录用户信息")
       }
    },
    mounted:function() {
       
       addemoji();

       // 查询导航是否有type=2，有则是从写回答按钮进来，需要跳到写评论的地方
       
       var tp = window.location.href.split("?")[1];
       if(tp){
          var topn =  $("#mainarea").offset().top;
          $("body,html").animate({
              scrollTop:topn-400 
          });
          $("#mainarea").focus();

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
        //为直接回复楼主的文本框添加id
        forIdLou:function(index){
          return "forIdLou_"+index;
        },
        //给评论容器添加id
        forIdMr:function(index){
          return "forIdMr_"+index;
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
                                        repBoxShow1:false,
                                        repBoxShow:false,
                                        n:6,//加载条数
                                        ntext:"更多回答",
                                        otherData:[],
                                      }
              );
            $("#mainarea").val("");
        },
        //二级回复事件
        huifu2:function(sign,name,sign2){
              var that = this;
              this.isToLogin();
              this.commentData.data[sign].repBoxShow = !this.commentData.data[sign].repBoxShow;
              $("#forId_"+sign).attr("placeholder","回复"+name+"：");
              this.toname = name;
              this.toSign = sign2;
 

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
          console.log(that.toSign)
          this.commentData.data[sign].otherData.splice(that.toSign+1,0,{
                                                                        img:"img/header001.png",
                                                                        formName:that.userMsg.name,
                                                                        toName:that.toname,
                                                                        time:getTime(),
                                                                        msg:str,
                                                                      }
            )
          $("#forId_"+sign).val("");
          this.commentData.data[sign].repBoxShow = false;

          // 
          // 
          
          



        },
        //#回复楼主事件
        huifuLou:function(sign,name){
          console.log("inin")
              this.isToLogin();

              this.commentData.data[sign].repBoxShow1 = !this.commentData.data[sign].repBoxShow1;
              console.log(this.commentData.data[sign].repBoxShow1)
              $("#forIdLou_"+sign).attr("placeholder","回复"+name+"：")



        },
        hfLouqu:function(sign){
          this.commentData.data[sign].repBoxShow1 = false
          $("#forIdLou_"+sign).val("");
        },


        // 在此回复后，焦点聚集到回复的最后一条
        hfLouOK:function(event,sign,name){
          var that = this;
          var str = $("#forIdLou_"+sign).val();
          this.commentData.data[sign].otherData.unshift(
                                                    {
                                                      img:"img/header001.png",
                                                      formName:that.userMsg.name,
                                                      toName:"",
                                                      time:getTime(),
                                                      msg:str,
                                                    }
            )
          $("#forIdLou_"+sign).val("");
          this.commentData.data[sign].repBoxShow1 = false;

          var topn =  $("#forId_"+sign).offset().top;
          $("body,html").animate({
              scrollTop:topn 
          });       




          setTimeout(function(){
            var topn3 =  $("#forIdMr_"+sign+" "+".other-rep-item:last").offset().top;
                    $("body,html").animate({
                        scrollTop:topn3-400 
                    });
          },10);   


          



        },
        //回复楼主事件#
        
        //更多回答
        showAll:function(sign){
          console.log(sign)
          if( this.commentData.data[sign].n == 1000000 ){
               this.commentData.data[sign].n = 6 
               this.commentData.data[sign].ntext = "更多回答" 
          }else{
                this.commentData.data[sign].n = 1000000
                this.commentData.data[sign].ntext = "收起回答" 
          }
          
        },
        
        // 评论 #
        tofeed:function(){
            if(this.userMsg){
                window.location.href = "user.html?type=or"
            }else{
                window.location.href = "login.html"
            }
        },










        // #新代码
        // 删除一级评论功能
        deleteh1:function(index){
          console.log(index)
          this.commentData.data.splice(index, 1);
        },
        // 删除二级评论功能
        deleteh2:function(index,index2){
          console.log(index)
          console.log(index2)
          this.commentData.data[index].otherData.splice(index2, 1);
        }




        // 新代码#        
       


       
      

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
        console.log(n)
        erjixiao.eq(j).qqFace({
              // id : 'facebox',
              assign:"forId_"+n,
              path:'qqFace/arclist/'  //表情存放的路径
        });
    })(i)
  }

  

  var xiaoyi1 = $('.xiaoyi1')
  for(var i=0;i<xiaoyi1.length;i++){
    (function(j){
        var n = xiaoyi1.eq(j).parents(".my-rep").eq(0).index()
        // console.log(n)
        xiaoyi1.eq(j).qqFace({
              // id : 'facebox',
              assign:"forIdLou_"+n,
              path:'qqFace/arclist/'  //表情存放的路径
        });
    })(i)
  }

}
