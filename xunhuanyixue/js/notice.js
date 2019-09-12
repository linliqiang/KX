var v = new Vue({
    el: "#app",
    data: {
        data:[],
        pageIndex:1,
        pageSize:10,
        
        pullUpLoad: true,
        pullUpLoadThreshold: 0,
        pullUpLoadMoreTxt: '加载中...',
        pullUpLoadNoMoreTxt: '没有更多啦 (ㄒoㄒ)',

        upTrue:false,

        noData:true,
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
            url:ajaxurl()+"/meet/list.aspx?pageIndex="+that.pageIndex+"&pageSize=10&type=0",
            success:function(data){
                var datas = json1(data);
                if(datas.data.length<=0){
                    that.noData = false;
                    noData();
                    that.upTrue = true;
                }else{
                    that.data = datas.data;
                    if(datas.data.length<10){
                        that.upTrue = true;
                    }
                }
            },
            error:function(jqXHR){
                console.log("失败")
            }
        });
    },
    mounted:function() {
    },
    methods: {
        noticeDet:function(id){
            var that = this;
            var path ="/ydbf/noticeDet.html?noticeid=" + id;//引号里面是我获取用户信息后要跳转的页面
            window.location.href = "http://xhyx.ikangxun.com/WeChat/WeCharAuth?returnPath=" + path;
        },
        onPullingUp:function() {
            var that  = this;
            that.pageIndex = that.pageIndex*1 + 1;
            if(that.upTrue){
                that.$refs.scroll.forceUpdate();
            }else{
                 $.ajax({
                    type:"get",
                    url:ajaxurl()+"/meet/list.aspx?pageIndex="+that.pageIndex+"&pageSize=10&type=0",
                    success:function(data){
                        var datas = json1(data);
                        that.data = that.data.concat(datas.data);
                        if( datas.data.length < 10 ){
                            that.upTrue = true;
                        }
                    },
                    error:function(jqXHR){
                        console.log("失败")
                    }
                });
            }

          },
    }
})




