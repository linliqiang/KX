var v = new Vue({
    el: "#app",
    data: {
        sign:0,//选项卡标记
        data0:[],//标题列表
        titleid:'',//选项卡id

        data:[],
        pageIndex:1,
        pageSize:10,
        pullUpLoad: true,
        pullUpLoadThreshold: 0,
        pullUpLoadMoreTxt: '加载中...',
        pullUpLoadNoMoreTxt: '没有更多啦 (ㄒoㄒ)',
        upTrue:false,
        noData:false,
        fnoData:false,

        data2:[],
        pageIndex2:1,
        pageSize2:10,
        pullUpLoad2: true,
        pullUpLoadThreshold2: 0,
        pullUpLoadMoreTxt2: '加载中...',
        pullUpLoadNoMoreTxt2: '没有更多啦 (ㄒoㄒ)',
        upTrue2:false,
        noData2:false,
        fnoData2:false,

        data3:[],
        pageIndex3:1,
        pageSize3:10,
        pullUpLoad3: true,
        pullUpLoadThreshold3: 0,
        pullUpLoadMoreTxt3: '加载中...',
        pullUpLoadNoMoreTxt3: '没有更多啦 (ㄒoㄒ)',
        upTrue3:false,
        noData3:false,
        fnoData3:false,

    },
    computed: {
        // 第一组数据上拉配置
        options() {
            return {
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
        },
        // 第二组数据上拉配置
        options2() {
            return {
              pullUpLoad: this.pullUpLoadObj2,
              scrollbar: true
            }
        },
        pullUpLoadObj2: function() {
          return this.pullUpLoad2 ? {
            threshold: parseInt(this.pullUpLoadThreshold2),
            txt: {
              more: this.pullUpLoadMoreTxt2,
              noMore: this.pullUpLoadNoMoreTxt2
            }
          } : false
        },
        // 第三组数据上拉配置
        options3() {
            return {
              pullUpLoad: this.pullUpLoadObj3,
              scrollbar: true
            }
        },
        pullUpLoadObj3: function() {
          return this.pullUpLoad3 ? {
            threshold: parseInt(this.pullUpLoadThreshold3),
            txt: {
              more: this.pullUpLoadMoreTxt3,
              noMore: this.pullUpLoadNoMoreTxt3
            }
          } : false
        },
    },
    created:function() {
        var that = this;
        $.ajax({
            type:"get",
            url:ajaxurl()+"/cases/casetype.aspx",
            success:function(data){
                var data0s = json1(data);
                that.data0 = data0s.data
                that.titleid = that.data0[0].id;
                // 请求第一标题数据
                $.ajax({
                    type:"get",
                    url:ajaxurl()+"/cases/list.aspx?pageIndex="+that.pageIndex+"&pageSize="+that.pageSize+"&typeId="+json1(data).data[0].Id,
                    success:function(data){
                        var datas = json1(data);
                        if(datas.data.length<=0){
                            that.noData = false;
                            that.fnoData = true;
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
                // 请求第二标题数据
                $.ajax({
                    type:"get",
                    url:ajaxurl()+"/cases/list.aspx?pageIndex="+that.pageIndex2+"&pageSize="+that.pageSize2+"&typeId="+json1(data).data[1].Id,
                    success:function(data){
                        console.log(data);
                        var datas = json1(data);
                        if(datas.data.length<=0){
                            that.noData2 = false;
                            that.fnoData2 = true;
                            that.upTrue2 = true;
                        }else{
                            console.log("2有数据")
                            that.data2 = datas.data;
                            if(datas.data.length<10){
                                console.log("2数据少于10")
                                that.upTrue2 = true;
                            }
                        }
                    },
                    error:function(jqXHR){
                        console.log("失败")
                    }
                });
                // 请求第三标题数据
                $.ajax({
                    type:"get",
                    url:ajaxurl()+"/cases/list.aspx?pageIndex="+that.pageIndex3+"&pageSize="+that.pageSize3+"&typeId="+json1(data).data[2].Id,
                    success:function(data){
                        var datas = json1(data);
                        if(datas.data.length<=0){
                            that.noData3 = false;
                            that.fnoData3 = true;
                            that.upTrue3 = true;
                        }else{
                            that.data3 = datas.data;
                            if(datas.data.length<10){
                                that.upTrue3 = true;
                            }
                        }
                    },
                    error:function(jqXHR){
                        console.log("失败")
                    }
                });
            },
            error:function(jqXHR){
                console.log("失败")
            }
        });   
    },
    mounted:function() {
    },
    methods: {
      titleT:function(id,index){
        console.log(id)
        console.log(index)
        console.log(id)
        var that = this;
        that.sign = index;
        that.titleid = id
      },
      caseDet:function(id){
        var that = this;
        var path ="/ydbf/caseDet.html?id=" + id;//引号里面是我获取用户信息后要跳转的页面
        window.location.href = "http://xhyx.ikangxun.com/WeChat/WeCharAuth?returnPath=" + path;
      },
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
        // 第一组数据上拉刷新
        onPullingUp:function() {
            var that  = this;
            console.log("1上拉刷新")
                that.pageIndex = that.pageIndex*1 + 1;
                if(that.upTrue){
                    that.$refs.scroll.forceUpdate();
                }else{
                    $.ajax({
                        type:"get",
                        url:ajaxurl()+"/cases/list.aspx?pageIndex="+that.pageIndex+"&pageSize="+that.pageSize+"&typeId="+that.titleid,
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
        // 第二组数据上拉刷新
          onPullingUp2:function() {
            var that  = this;
                that.pageIndex2 = that.pageIndex2*1 + 1;
                if(that.upTrue2){
                    that.$refs.scroll2.forceUpdate();
                }else{
                    $.ajax({
                        type:"get",
                        url:ajaxurl()+"/cases/list.aspx?pageIndex="+that.pageIndex2+"&pageSize="+that.pageSize2+"&typeId="+that.titleid,
                        success:function(data){
                            var datas = json1(data);
                            that.data2 = that.data2.concat(datas.data);
                            if( datas.data.length < 10 ){
                                that.upTrue2 = true;
                            }
                        },
                        error:function(jqXHR){
                            console.log("失败")
                        }
                    });
                }
          },

        // 第三组数据上拉刷新
          onPullingUp3:function() {
            var that  = this;
                that.pageIndex3 = that.pageIndex3*1 + 1;
                if(that.upTrue3){
                    that.$refs.scroll3.forceUpdate();
                }else{
                    $.ajax({
                        type:"get",
                        url:ajaxurl()+"/cases/list.aspx?pageIndex="+that.pageIndex3+"&pageSize="+that.pageSize3+"&typeId="+that.titleid,
                        success:function(data){
                            var datas = json1(data);
                            that.data3 = that.data3.concat(datas.data);
                            if( datas.data.length < 10 ){
                                that.upTrue3 = true;
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




