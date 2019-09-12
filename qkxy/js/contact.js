$(document).ready(function(){
    // 百度地图API功能
        var map = new BMap.Map("allmap"); // 创建Map实例
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 16); // 初始化地图,设置中心点坐标和地图级别
        map.enableScrollWheelZoom(true)
        map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的

        var point = new BMap.Point(116.404, 39.915); 
        var marker = new BMap.Marker(point);           
        map.addOverlay(marker);  


          // 标记起点
          var point1 = new BMap.Point(116.404, 39.915)
          var opts1 = {
              position: point1, // 指定文本标注所在的地理位置
              offset: new BMap.Size(10, -40) //设置文本偏移量
          }
          var label1 = new BMap.Label('全科学院', opts1); // 创建文本标注对象
          label1.setStyle({
              color: "red",
              fontSize: "12px",
              // width: '14px',
              height: "20px",
              lineHeight: "16px",
              fontFamily: '微软雅黑',
          })
          map.addOverlay(label1)
})


var v = new Vue({
    el: "#app",
    data: {
        //用户信息
        userMsg:false,
        //头部导航标记
        navSign:0,
       
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


        tofeed:function(){
            if(this.userMsg){
                window.location.href = "user.html?type=or"
            }else{
                window.location.href = "login.html"
            }
        },
        

       


    }

})