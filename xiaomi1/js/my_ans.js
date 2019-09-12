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
        quxiao:function(sign){
            console.log(sign);
            malert2("确认删除观看记录？",sign);
        },
    }
})



// 确认取消弹框
function malert2(msg,sign){
  var re = 0; 
  $("body .malert2").remove();
  $("body .bg").remove();
  $("body").append("<div class='bg'></div>")
  $("body").append("<div class='malert2'><span>"+msg+"</span><div><button class='leftb'>确认</button><button class='rightb'>取消</button></div></div>");
    $(".leftb").click(function(){
      $(".bg").remove();
      $(".malert2").remove();
      v.data.splice(sign,1);
    })
    $(".rightb").click(function(){
      $(".bg").remove();
      $(".malert2").remove();
    })
}