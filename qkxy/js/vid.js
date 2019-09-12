var v = new Vue({
    el: "#app",
    data: {
       ///用户信息
        userMsg:false,
        //头部导航标记
        navSign:2,
      
        csNum:1,

        // 付费课程列表
        list2:[
              {
                title:"新生儿复苏石兰临床指南新生儿新生儿复苏石兰临床指南新生儿新生儿复苏石兰临床指南",
                img:"img/xindian.png",
                title2:"第一期",
                price:"免费",
                free:1,
              },
              {
                title:"新生儿复苏石兰临床指南新生儿新生儿复苏石兰临床指南新生儿新生儿复苏石兰临床指南",
                img:"img/xindian.png",
                title2:"第二期",
                price:"19.9",
                free:2,
              },
              {
                title:"新生儿复苏石兰临床指南新生儿新生儿复苏石兰临床指南新生儿新生儿复苏石兰临床指南",
                img:"img/xindian.png",
                title2:"第三期",
                price:"19.9",
                free:3,
              },
              // {
              //   title:"新生儿复苏石兰临床指南新生儿新生儿复苏石兰临床指南新生儿新生儿复苏石兰临床指南",
              //   img:"img/xindian.png",
              //   title2:"第四期",
              //   price:19.9,
              //   free:3,
              // },
              // {
              //   title:"新生儿复苏石兰临床指南新生儿新生儿复苏石兰临床指南新生儿新生儿复苏石兰临床指南",
              //   img:"img/xindian.png",
              //   title2:"第五期",
              //   price:19.9,
              //   free:3,
              // },
              // {
              //   title:"新生儿复苏石兰临床指南新生儿新生儿复苏石兰临床指南新生儿新生儿复苏石兰临床指南",
              //   img:"img/xindian.png",
              //   title2:"第六期",
              //   price:19.9,
              //   free:3,
              // },{
              //   title:"新生儿复苏石兰临床指南新生儿新生儿复苏石兰临床指南新生儿新生儿复苏石兰临床指南",
              //   img:"img/xindian.png",
              //   title2:"第七期",
              //   price:19.9,
              //   free:3,
              // }
              // ,{
              //   title:"新生儿复苏石兰临床指南新生儿新生儿复苏石兰临床指南新生儿新生儿复苏石兰临床指南",
              //   img:"img/xindian.png",
              //   title2:"第七期",
              //   price:19.9,
              //   free:3,
              // }
              // ,{
              //   title:"新生儿复苏石兰临床指南新生儿新生儿复苏石兰临床指南新生儿新生儿复苏石兰临床指南",
              //   img:"img/xindian.png",
              //   title2:"第七期",
              //   price:19.9,
              //   free:3,
              // }
        ]
        

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

        this.csNum = 2

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
       
      csThing:function(index){
          this.csNum = index;
      },
      tofeed:function(){
            if(this.userMsg){
                window.location.href = "user.html?type=or"
            }else{
                window.location.href = "login.html"
            }
      },

      repeatItemMore:function(){

        var that = this;

        if( this.csNum == 2 ){

          for( var i=0;i<10;i++ ){
               that.list2.push({
                title:"新生儿复苏石兰临床指南新生儿新生儿复苏石兰临床指南新生儿新生儿复苏石兰临床指南",
                img:"img/xindian.png",
                title2:"第七期",
                price:"19.9",
                free:3,
              })
          }


         



        }



      },



      xindian:function(free){
        console.log(free)
        if( free == 1 ){
          window.location.href = "vidDet_xindian.html?pay=fr"
        }else if( free == 2 ){
          window.location.href = "vidDet_xindian.html?pay=ok"
        }else{
          window.location.href = "vidDet_xindian.html?pay=no"
        }
      },


    }

})