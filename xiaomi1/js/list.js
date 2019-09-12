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
        noData:true,

        items: [
            {
              url: 'http://www.didichuxing.com/',
              image: 'images/timg.jpg'
            },
            {
              url: 'http://www.didichuxing.com/',
              image: 'images/timg1.jpg'
            },
            {
              url: 'http://www.didichuxing.com/',
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

        var par = window.location.href.split("?")[1];//id
        var type = par.split("=")[1];
        console.log(type)

        if(type==1){
          $.ajax({
              type:"get",
              url:'json/json10.json',
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
        }else if(type==2){
          $.ajax({
              type:"get",
              url:'json/json20.json',
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
        }else if(type==3){
          $.ajax({
              type:"get",
              url:'json/json30.json',
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
        }else if(type==4){
          $.ajax({
              type:"get",
              url:'json/json40.json',
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
        }else if(type==5){
          $.ajax({
              type:"get",
              url:'json/json50.json',
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
        }else{
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
          that.signs = true;
        }

        // $.ajax({
        //     type:"get",
        //     url:'json/json1.json',
        //     dataType:'json',
        //     success:function(data){
        //         console.log(data)
        //         if(data.length<=0){
        //             that.noData = false;
        //             dataErr("没有数据 (ㄒoㄒ)");
        //         }else if(data.length<=10){
        //             that.data = data;
        //             that.upTrue = true;
        //         }else{
        //             that.data0 = data;
        //             that.data=data.slice(0,10);
        //         }
        //     },
        //     error:function(jqXHR){
        //         console.log("失败")
        //         that.noData = false;
        //         dataErr("发生错误啦 (ㄒoㄒ)");
        //     }
        // });



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
    }
})