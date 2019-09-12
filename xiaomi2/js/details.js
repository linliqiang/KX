
var v = new Vue({
    el: "#app",
    data: {
        // 标记简介和评分选项卡
        sign:1,

        // 收藏
        sctext:"收藏",

        disabled:true,
        justify:true,

        // 评论
        dataUser0:[],
        dataUser:[],
        nodataUser:false,
        contentText:"",
        pageIndex:0,
        pageSize:10,
        pullUpLoad: true,
        pullUpLoadThreshold: 0,
        pullUpLoadMoreTxt: '加载中...',
        pullUpLoadNoMoreTxt: '没有更多啦 (ㄒoㄒ)',
        upTrue:false,
        upt:"加载中...",

        // 视频打分
        disabled1: false,
        max1: 5,
        value1: 0,
        justify1: false,
        disabled2: false,
        max2: 5,
        value2: 0,
        justify2: false,
        starText1:false,
        starText2:false,
        starText3:false,
        contentText2:"",

        datisign:false,
        dataans:[
            {
                title:"高峰论坛活动展板高峰论坛活动展板",
                qus1:"答案",
                qus2:"答案",
                qus3:"答案",
                qus4:"答案",
                value:0,
            },
            {
                title:"高峰论坛活动展板高峰论坛活动展板",
                qus1:"答案",
                qus2:"答案",
                qus3:"答案",
                qus4:"答案",
                value:0,
            },
            {
                title:"高峰论坛活动展板高峰论坛活动展板",
                qus1:"答案",
                qus2:"答案",
                qus3:"答案",
                qus4:"答案",
                value:0,
            },
            {
                title:"高峰论坛活动展板高峰论坛活动展板",
                qus1:"答案",
                qus2:"答案",
                qus3:"答案",
                qus4:"答案",
                value:0,
            }
       ]
    },
    computed: {
      options() {
        return {
          // pullDownRefresh: this.pullDownRefreshObj,
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
    },
    created:function() {

        var that = this;
        $.ajax({
            type:"get",
            url:'json/c2.json',
            dataType:'json',
            success:function(data){
                console.log(data)
                if(data.length<=0){
                    that.upTrue=true;
                    that.upt = "没有数据了"
                }else if(data.length<=10){
                    that.dataUser = data;
                    that.upTrue = true;
                    that.upt = "没有数据了"
                }else{
                    that.dataUser0 = data;
                    that.dataUser=data.slice(0,10);
                }
            },
            error:function(jqXHR){
                console.log("ajax失败")
                that.upt = "没有数据了"
            }
        });
    },
    mounted:function() {
        lid();
    },
    methods: {
        signt:function(sign){
            this.sign = sign
            if(sign==2){
                $(".sco").addClass('scos')
            }
        },
        queding:function(){
            var that = this;
            if(that.contentText != ""){
                    that.dataUser.unshift({
                        img:"images/head.jpg",
                        name:"王华东",
                        time:"2019-04-30",
                        msg:that.contentText
                    });
                    alertm1("留言成功")
                    that.contentText = ""
                    $(".textarea").hide();
                    $(".bgcase").hide();
                    $(window).scrollTop(0);
                    that.$refs.scroll.forceUpdate();
                    that.$refs.scroll.scrollTo(0,0);
            }else{
                $(".textarea textarea").focus();
            }
        },
        quxiao:function(){
            this.contentText = "";
            $(".textarea textarea").blur();
            $(".textarea").hide();
            $(".bgcase").hide();
        },
        areaShow:function(){
            $(".bgcase").show();
            $(".textarea").show();
            $(".textarea textarea").focus();
        },
        stt:function(sign){
            if(sign==1){
                this.starText1 = !this.starText1
            }else if(sign==2){
                this.starText2 = !this.starText2
            }else{
                this.starText3 = !this.starText3
            }
        },
        cha:function(){
            $(".sco").removeClass('scos')
            $(".tic3close").click(function(){
                tic3close()
            })
        },
        retaSubs:function(){
            var that = this;
            that.dataUser.unshift({
                                    img:"images/head.jpg",
                                    name:"王华东",
                                    time:"2019-04-30",
                                    msg:that.contentText2,
                                    value1:that.value3,
                                    value2:that.value4,
                                    v1:that.starText1,
                                    v2:that.starText2,
                                    v3:that.starText3,
                    });
            that.contentText2 = "";
            that.value3=5;
            that.value4=5;
            that.starText1=false;
            that.starText2=false;
            that.starText3=false;
            $(".sco").removeClass('scos');
            that.$refs.scroll.scrollTo(0,0);
            $(window).scrollTop(0);
            
            alertm1("评论成功");
            // $(".tic3close").click(function(){
            //     tic3close()
            // })
            // if(this.sign2==1){
            //     this.sign2=2;
            //     $(".alerts").css("top","200%");
            //     $("body .bg").remove();
            // }
            // if(this.sign2==3){
            //     this.sign2=0;
            // }
        },
        onPullingUp:function() {
            var that  = this;
            that.pageIndex = that.pageIndex*1 + 1;
            if(that.upTrue){
                that.$refs.scroll.forceUpdate();
                that.upt = "没有数据了"
            }else{
                that.upt = "加载中..."
                that.dataUser = that.dataUser0.slice(0,10+that.pageIndex*10);
                console.log(that.dataUser0.slice(0,10+that.pageIndex*10))
                if(that.dataUser0.slice(0,10+that.pageIndex*10).length%10!=0){
                    that.upTrue = true;
                    that.upt = "没有数据了"
                }
            } 
        },
        datit:function(){
            this.datisign = true;
            $(".tic3close").unbind();
        },
        datitt:function(){
            this.datisign = false;
            $(".tic3close").click(function(){
                tic3close()
            })
        },
        datitt2:function(){
            var d = dati();
            if(d){
                this.datisign = false;
                alertm1("提交成功");
                dati2();
                $(".tic3close").click(function(){
                    tic3close()
                })
            } 
        },
        pft:function(){
            $(".sco").addClass('scos')
            $(".tic3close").unbind();
        },
        shouc:function(){
            if($("span.scbut").hasClass('scbut2')){
                $("span.scbut").removeClass('scbut2')
            }else{
                $("span.scbut").addClass('scbut2')
            }

        },
        sct:function(){
            var that = this;
            if(that.sctext == "收藏"){
                that.sctext = "已收藏"
            }else{
                that.sctext = "收藏"
            }
        }
    }
})

function dati(){
    var an = $(".datibox input");
    for(var i=0;i<an.length;i++){
        //单选框
        if( an.eq(i).attr("type") == "radio" ){
            if($("input[name="+an.eq(i).attr("name")+"]:checked").length <= 0){
                alertm1("请选择第"+an.eq(i).attr("alt")+"题")
                an.eq(i).focus();
                return false;
            }
        //多选框
        }else if( an.eq(i).attr("type") == "checkbox" ){
            // console.log("多选框")
            if($("input[name="+an.eq(i).attr("name")+"]:checked").length <= 0){
                alertm1("请选择第"+an.eq(i).attr("alt")+"题")
                an.eq(i).focus();
                return false;
            }
        }
    }
    // console.log("通过验证")
    return true
}

function dati2(){
    var an2 = $(".datibox input");
    for(var i=0;i<an2.length;i++){
        an2.eq(i).attr("disabled","disabled");
    }
    $(".subbox button").addClass('ssbb');
    $(".subbox button").text('已提交');
    return true
}

function lid(){
    $(".int ul").each(function(){
        var st = $(this).css("listStyleType")
        $(this).children("li").css("listStyleType",st)
    })
}

// 从屏幕外移入一个大型模块
function tic3(){
    $(".alerts").css("top","0");
    $("body").append("<div class='bg'></div>");
    $(".tic3close").click(function(){
        tic3close()
    })
}
function tic3close(){
    $(".alerts").css("top","200%");
    $("body .bg").remove();
}