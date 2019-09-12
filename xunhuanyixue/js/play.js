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
            url:ajaxurl()+"/meet/list.aspx?pageIndex="+that.pageIndex+"&pageSize=10&type=2",
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
        longTimeToData:function(value) {
            if (value == "" || value == null) {
                return "--";
            }
            var date = new Date(parseInt(value));//时间戳为10位需*1000，时间戳为13位的话不需乘1000
            var Y = date.getFullYear();
            var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
            var D = date.getDate();
            var h = date.getHours();
            var m = date.getMinutes();
            var s = date.getSeconds();
            var day = D >= 10 ? D : ("0" + D);
            var hour = h >= 10 ? h : ("0" + h);
            var mintu = m >= 10 ? m : ("0" + m);
            var sec = s >= 10 ? s : ("0" + s);
            return Y + "-" + M + "-" + day;
        },
        playDet:function(id){
            window.location.href = "playDet.html?id="+id
        },
        onPullingUp:function() {
            var that  = this;
            that.pageIndex = that.pageIndex*1 + 1;
            if(that.upTrue){
                that.$refs.scroll.forceUpdate();
            }else{
                 $.ajax({
                    type:"get",
                    url:ajaxurl()+"/meet/list.aspx?pageIndex="+that.pageIndex+"&pageSize=10&type=2",
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




