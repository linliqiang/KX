


function mapStart(a,b,c){
        // 百度地图API功能
        var map = new BMap.Map("allmap"); // 创建Map实例
        map.centerAndZoom(new BMap.Point(a, b), 16); // 初始化地图,设置中心点坐标和地图级别
        map.enableScrollWheelZoom(true)
        map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的

        var point = new BMap.Point(a, b); 
        var marker = new BMap.Marker(point);           
        map.addOverlay(marker);  
          // 标记起点
          var point1 = new BMap.Point(a, b)
          var opts1 = {
              position: point1, // 指定文本标注所在的地理位置
              offset: new BMap.Size(10, -40) //设置文本偏移量
          }
          var label1 = new BMap.Label(c, opts1); // 创建文本标注对象
          label1.setStyle({
              color: "red",
              fontSize: "12px",
              // width: '14px',
              height: "20px",
              lineHeight: "16px",
              fontFamily: '微软雅黑',
          })
          map.addOverlay(label1)
}

// 查看招聘信息详情弹框
function jiaDet(){

}

$(document).ready(function(){


        mapStart(116.404, 39.915,"康迅传媒");


            $('#slider5').bxSlider({

              mode: 'vertical',

              slideWidth: 1080,

              minSlides: 3,

              slideMargin: 10

            });


            $(".jia").click(function(){
              $(".bg1").css("zIndex","9999");
              $(".jiaDet").css("zIndex","10000");
            })

            $(".close").click(function(){
              $(".bg1").css("zIndex","-99");
              $(".jiaDet").css("zIndex","-99");
            })





})

var v = new Vue({
    el: "#app",
    data: {
       cnSign:1,
       mapSign:1,
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
      },
      mapSignT:function(sign){
        this.mapSign = sign

        if(sign==1){
          console.log("北京1")
          mapStart(116.404, 39.915,"康迅传媒");
        }else if(sign==2){
          console.log("北京2")
          mapStart(116.510, 39.842,"康迅传媒");
        }else{
          console.log("成都")
          mapStart(104.063, 30.666,"康迅传媒(成都)");
        }

        



      }
    }
})