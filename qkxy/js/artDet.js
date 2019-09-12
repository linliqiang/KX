
// $(function(){

//   var listType1 = $(".det-Msg ul");
//   var listType1s;
//   for(var i = 0;i<listType1.length;i++){
//     // console.log(i)
//     listType1s = listType1.eq(i).css("listStyleType")
//     // console.log(listType1s)
//     listType1.eq(i).children("li").css("listStyleType",listType1s)
//   }

//   var listType2 = $(".det-Msg ol");
//   var listType2s;
//   for(var i = 0;i<listType2.length;i++){
//     // console.log(i)
//     listType2s = listType2.eq(i).css("listStyleType")
//     // console.log(listType2s)
//     listType2.eq(i).children("li").css("listStyleType",listType2s)
//   }

// })


var v = new Vue({
    el: "#app",
    data: {
       //用户信息
        userMsg:false,
        //头部导航标记
        navSign:3,

        // 赞
        zanN:0,
        zanB:false,
        shouN:0,
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
        console.log(n)
        erjixiao.eq(j).qqFace({
              // id : 'facebox',
              assign:"forId_"+n,
              path:'qqFace/arclist/'  //表情存放的路径
        });
    })(i)
  }

}