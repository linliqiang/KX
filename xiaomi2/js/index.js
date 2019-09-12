var v = new Vue({
    el: "#app",
    data: {
        data0:[],
        data:[],
        pageIndex:0,
        pageSize:10,
        pullUpLoad: true,
        pullUpLoadThreshold: 0,
        pullUpLoadMoreTxt: '加载中...',
        pullUpLoadNoMoreTxt: '没有更多啦 (ㄒoㄒ)',
        upTrue:false,
        upt:"加载中...",

        items: [
            {
              url: 'details.html',
              image: 'images/timg.jpg'
            },
            {
              url: 'details.html',
              image: 'images/timg1.jpg'
            },
            {
              url: 'details.html',
              image: 'images/timg2.jpg'
            }
        ],
        items2: [
            {
              url: 'http://www.didichuxing.com/',
              image: 'images/icon5_1.jpg'
            },
            {
              url: 'http://www.didichuxing.com/',
              image: 'images/icon5_2.jpg'
            },
            {
              url: 'http://www.didichuxing.com/',
              image: 'images/icon5_3.jpg'
            },
            {
              url: 'http://www.didichuxing.com/',
              image: 'images/icon5_2.jpg'
            },
            {
              url: 'http://www.didichuxing.com/',
              image: 'images/icon5_1.jpg'
            }
        ],
    },
    computed: {
      options() {
        return {
          pullDownRefresh: this.pullDownRefreshObj,
          pullUpLoad: this.pullUpLoadObj,
          scrollbar: true
        }
      },
      pullUpLoadObj: function() {
          return this.pullUpLoad ? {
            threshold: parseInt(this.pullUpLoadThreshold),
            txt: {
              more: this.pullUpLoadMoreTxt,
              noMore: this.pullUpLoadNoMoreTxt
            }
          } : false
        }
    },
    created:function() {
        var that = this;
        $.ajax({
            type:"get",
            url:'json/json1.json',
            dataType:'json',
            success:function(data){
                console.log(data)
                if(data.length<=0){
                    that.upTrue = true;
                    that.upt = "没有数据了"
                }else if(data.length<=10){
                    that.data = data;
                    that.upTrue = true;
                    that.upt = "没有数据了"
                }else{
                    that.data0 = data;
                    that.data=data.slice(0,10);
                    that.upt = "上拉加载更多"
                }
            },
            error:function(jqXHR){
                console.log("ajax失败")
                that.upt = "没有数据了"
            }
        });
    },
    mounted:function() {
        // scroll.refresh();
    },
    methods: {
        onPullingUp:function() {
            var that  = this;
            that.pageIndex = that.pageIndex*1 + 1;
            if(that.upTrue){
                that.$refs.scroll.forceUpdate();
                that.upt = "没有数据了"
            }else{
                that.upt = "加载中..."
                that.data = that.data0.slice(0,10+that.pageIndex*10);
                console.log(that.data0.slice(0,10+that.pageIndex*10))
                if(that.data0.slice(0,10+that.pageIndex*10).length%10!=0){
                    that.upTrue = true;
                    that.upt = "没有数据了"
                }
            } 
        },
    }
})



// 移动端下拉列表没有任何初始数据
function dataErr2(nodeClass,msg){
    $(nodeClass).append("<li class='noData2'><span>"+msg+"</span></li>")
}
// dataErr2(".itemBox","没有数据");