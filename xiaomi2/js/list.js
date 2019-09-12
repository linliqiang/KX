var v = new Vue({
    el: "#app",
    data: {
        signs:false,
        data0:[],
        data:[],
        pageIndex:0,
        pageSize:10,
        pullUpLoad: true,
        pullUpLoadThreshold: 0,
        pullUpLoadMoreTxt: '加载中...',
        pullUpLoadNoMoreTxt: '没有更多啦 (ㄒoㄒ)',
        upTrue:false,

        upt:"上拉加载更多",
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
        var par = window.location.href.split("?")[1];//id
        var type = par.split("=")[1];
        console.log(type)
        $.ajax({
              type:"get",
              url:'json/json10.json',
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