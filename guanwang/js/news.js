

$(document).ready(function(){

    $('.slider').bxSlider({

        slideWidth: 378,

        minSlides: 2,

        maxSlides: 3,

        slideMargin: 22

      });

    $('.slider2').bxSlider({

        slideWidth: 360,

        minSlides: 2,

        maxSlides: 3,

        slideMargin: 50

      });

    $('.slider3').bxSlider({

        mode: 'vertical',

        slideWidth: 1180,

        minSlides: 3,

        slideMargin: 0

      });

    $(".sr2").each(function(){
      var h3 = $(this).find("h3");
      var p = $(this).find("p");
      var h6 = $(this).find("h6");
      if(h3.height()>=42){
        p.hide();
        h3.css("marginTop","10px");
        h6.css("marginBottom","10px");
      }
    })

    $(".s2-top").each(function(){
      var h4 = $(this).find("h4");
      var p = $(this).find("p");
      var h5 = $(this).find("h5");
      if(h4.height()<=25){
        
        p.addClass("sp2");

        
      }
    })

    $(".cb1-si").each(function(){
      
      var h4 = $(this).find("h4");
      var p = $(this).find("p");
      var bu = $(this).find("button");

      // if(h3.height()>=42){
      //   p.hide();
      //   h3.css("marginTop","10px");
      //   h6.css("marginBottom","10px");
      // }
    })


})

var v = new Vue({
    el: "#app",
    data: {
       cnSign:1,
    },
    created:function() {
      var loca = window.location.href.split("?")
        if(loca[1]){
          var loc = loca[1].split("=")[1]
          console.log(loc)
          this.cnSign = loc*1
        }
    },
    mounted:function() {

    },
    methods: {
      cnT:function(sign){
      	this.cnSign = sign
        if(sign==2){
          
        }
      },
      newsDet:function(){
        window.location.href = "news-det.html"
      }
    }
})