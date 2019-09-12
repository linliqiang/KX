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
        noData:true,

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
    // components: {
    //     // CubePage
    // },
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
                    that.noData = false;
                    dataErr("没有数据 (ㄒoㄒ)");
                }else if(data.length<=10){
                    that.data = data;
                    that.upTrue = true;
                }else{
                    that.data0 = data;
                    that.data=data.slice(0,10);
                }
            },
            error:function(jqXHR){
                console.log("失败")
                that.noData = false;
                dataErr("发生错误啦 (ㄒoㄒ)");
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
            }else{
                that.data = that.data0.slice(0,10+that.pageIndex*10);
                console.log(that.data0.slice(0,10+that.pageIndex*10))
                if(that.data0.slice(0,10+that.pageIndex*10).length%10!=0){
                    that.upTrue = true;
                }
            } 
        },
    }
})