
var v = new Vue({
    el: "#app",
    data: {
       sign:1,
       
        // 视频分数
        disabled1: true,
        max1: 5,
        value1: 3,
        justify1: false,
        disabled2: true,
        max2: 5,
        value2: 3,
        justify2: false,

        // 视频打分
        disabled3: false,
        max3: 5,
        value3: 5,
        justify3: false,
        disabled4: false,
        max4: 5,
        value4: 5,
        justify4: false,

        // 三个评论短语
        starText1:false,
        starText2:false,
        starText3:false,

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
        noData:true,

        // 评论2
        dataUser20:[],
        dataUser2:[],
        nodataUser2:false,
        contentText2:"",
        pageIndex2:0,
        pageSize2:10,
        pullUpLoad2: true,
        pullUpLoadThreshold2: 0,
        pullUpLoadMoreTxt2: '加载中...',
        pullUpLoadNoMoreTxt2: '没有更多啦 (ㄒoㄒ)',
        upTrue2:false,
        noData2:true,

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
     options2() {
        return {
          // pullDownRefresh: this.pullDownRefreshObj2,
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
        }
    },
    created:function() {

        var that = this;
        $.ajax({
            type:"get",
            url:'json/c1.json',
            dataType:'json',
            success:function(data){
                console.log(data)
                if(data.length<=0){
                    that.upTrue=true;
                    that.noData = false;
                    dataErr(".comment","没有数据 (ㄒoㄒ)");
                }else if(data.length<=10){
                    that.dataUser = data;
                    that.upTrue = true;
                }else{
                    that.dataUser0 = data;
                    that.dataUser=data.slice(0,10);
                }
            },
            error:function(jqXHR){
                console.log("失败")
                that.upTrue=true;
                that.noData = false;
                dataErr(".comment","发生错误啦 (ㄒoㄒ)");
            }
        });
        $.ajax({
            type:"get",
            url:'json/c2.json',
            dataType:'json',
            success:function(data){
                console.log(data)
                if(data.length<=0){
                    that.upTrue2=true;
                    that.noData2 = false;
                    dataErr(".score","没有数据 (ㄒoㄒ)");
                }else if(data.length<=10){
                    that.dataUser2 = data;
                    that.upTrue2 = true;
                }else{
                    that.dataUser20 = data;
                    that.dataUser2=data.slice(0,10);
                }
            },
            error:function(jqXHR){
                console.log("失败")
                that.upTrue2=true;
                that.noData2 = false;
                dataErr(".score","发生错误啦 (ㄒoㄒ)");
            }
        });

    },
    mounted:function() {
    },
    methods: {
        
        signt:function(sign){
            this.sign = sign
            if(sign==3){
                $(".sco").addClass('scos')
            }
        },
        duall:function(){
            var that = this;
            if( that.num2 == 6 ){
                that.num2 = 1000000;
                that.text2 = "收起评论"
            }else{
                that.num2 = 6;
                that.text2 = "展开所有评论"
            }
        },
        duall2:function(){
            var that = this;
            if( that.num22 == 6 ){
                that.num22 = 1000000;
                that.text22 = "收起评论"
            }else{
                that.num22 = 6;
                that.text22 = "展开所有评论"
            }
        },
        deall:function(){
            var that = this;
            if( that.num == 6 ){
                that.num = 1000000;
                that.text = "收起评论"
            }else{
                that.num = 6;
                that.text = "展开所有评论"
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
                    my_alert_m("留言成功")
                    that.contentText = ""
                    $(".textarea").hide();
                    $(".bgcase").hide();
                    $(window).scrollTop(0);
                    that.$refs.scroll.forceUpdate();

                    that.$refs.scroll.scrollTo(0,0);

                    // $(window).scrollTop(0);

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
        },
        retaSubs:function(){
            var that = this;
            that.dataUser2.unshift({
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
            my_alert_m("评论成功");
            that.$refs.scroll2.scrollTo(0,0);
            $(window).scrollTop(0);
        },
        onPullingUp:function() {
            var that  = this;
            that.pageIndex = that.pageIndex*1 + 1;
            if(that.upTrue){
                that.$refs.scroll.forceUpdate();
            }else{
                that.dataUser = that.dataUser0.slice(0,10+that.pageIndex*10);
                console.log(that.dataUser0.slice(0,10+that.pageIndex*10))
                if(that.dataUser0.slice(0,10+that.pageIndex*10).length%10!=0){
                    that.upTrue = true;
                }
            } 
        },
        onPullingUp2:function() {
            console.log("2滚")
            var that  = this;
            that.pageIndex2 = that.pageIndex2*1 + 1;
            if(that.upTrue2){
                that.$refs.scroll2.forceUpdate();
            }else{
                that.dataUser2 = that.dataUser20.slice(0,10+that.pageIndex2*10);
                console.log(that.dataUser20.slice(0,10+that.pageIndex2*10))
                if(that.dataUser20.slice(0,10+that.pageIndex2*10).length%10!=0){
                    that.upTrue2 = true;
                }
            } 
        },
        datit:function(){
            this.datisign = true;
        },
        datitt:function(){
            this.datisign = false;
        },
        datitt2:function(){

            var d = dati();
            if(d){
                this.datisign = false;
                my_alert_m("提交成功");
                dati2();
            }

            
        },
        shouc:function(){
            if($("span.scbut").hasClass('scbut2')){
                $("span.scbut").removeClass('scbut2')
            }else{
                $("span.scbut").addClass('scbut2')
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
                my_alert_m("请选择第"+an.eq(i).attr("alt")+"题")
                an.eq(i).focus();
                return false;
            }
        //多选框
        }else if( an.eq(i).attr("type") == "checkbox" ){
            // console.log("多选框")
            if($("input[name="+an.eq(i).attr("name")+"]:checked").length <= 0){
                my_alert_m("请选择第"+an.eq(i).attr("alt")+"题")
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

