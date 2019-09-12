// var caseArr = [];
// var startNum = 0;
// var endNum = 3;
var v = new Vue({
    el: "#app",
    data: {
        // start:0,
        // end:2,
        data:[],
    },
    created:function() {

        var that = this;

        $.ajax({
            type:'get',
            url:'json/json1.json',
            dataType:'json',
            success:function(data){
                console.log(data);
                // caseArr = data;
                // that.data = data.slice(0,3);
                that.data = data
            },
            error:function(){
                console.log("error");
            }
        })

    },
    mounted:function() {
    },
    methods: {
    }
})

// mui('.mui-scroll-wrapper').scroll({
//     deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
// });

// mui.init({
//   pullRefresh : {
//     container:refreshContainer,//待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
//     up : {
//       height:50,//可选.默认50.触发上拉加载拖动距离
//       auto:false,//可选,默认false.自动上拉加载一次
//       contentrefresh : "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
//       contentnomore:'没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
//       callback :pullfresh //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
//     }
//   }
// });


// function pullfresh() {
//      //业务逻辑代码，比如通过ajax从服务器获取新数据；
//      // endNum = endNum + 3;
//      // console.log("999")
//      // v.data = caseArr.slice(0,endNum);
//      //注意：
//      //1、加载完新数据后，必须执行如下代码，true表示没有更多数据了：
//      //2、若为ajax请求，则需将如下代码放置在处理完ajax响应数据之后
//      this.endPullupToRefresh(false);
// }