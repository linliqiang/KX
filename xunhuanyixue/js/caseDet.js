

var v = new Vue({
    el: "#app",
    data: {
        oid:"",
        caseid:"",
        sign:1,
        data:{},
        dataEx:[
                // {
                //     OSSName:"images/heard.png",
                //     Content:"评论评论",
                //     Description:"专家简家简",
                // },
                // {
                //     OSSName:"images/heard.png",
                //     Content:"评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论论评论评论评论评论评论评论评论评论评论评论论评论评论评论评论评论评论评论评论评论评论论评论评论评论评论评论评论评论评论评论评论评论评论",
                //     Description:"专家简介专家简介专家简介专家简介专家简介专家简介专家简介专家简介专家简介专家简介专家简介专家简介专家简介专家简介专家简介专家简介专家简介专家简介专家简介专家简介专家简介",
                // },
                // {
                //     OSSName:"images/heard.png",
                //     Content:"简介专家简11介专家简介专家简介专家简介专家简介专家简介专家简介专家简介专专家简介专家简介专家简介专家简介专家简介家简介专家简介专家简介专家",
                //     Description:"简介专家简介专家简介专家简介专家简介专家简介专家简介专家",
                // },
        ],
        nodataEx:false,
        num:6,
        text:"展开所有评论",

        dataUser:[],
        nodataUser:false,
        num2:6,
        text2:"展开所有评论",

        pageIndex:1,
        pageSize:10,

        contentText:"",

    },
    watch: {
      dataEx:function(val) {

        this.$nextTick(function(){

                 $(".rp").each(function(){

                    if($(this).height()*1 > 90 ){

                        $(this).addClass('msg-right-sign');
                        $(this).children('i').show();

                            $(this).children("i").click(function(){
                                
                                if($(this).parent().hasClass('msg-right-sign')){
                                    $(this).parent().removeClass('msg-right-sign')
                                }else{
                                    $(this).parent().addClass('msg-right-sign');
                                }
                            })
                    }
                })

                 $(".rp2").each(function(){

                    if($(this).height()*1 > 36 ){

                        $(this).addClass('msg-right-sign2');
                        $(this).children('i').show();

                            $(this).children("i").click(function(){
                                
                                if($(this).parent().hasClass('msg-right-sign2')){
                                    $(this).parent().removeClass('msg-right-sign2')
                                }else{
                                    $(this).parent().addClass('msg-right-sign2');
                                }
                            })
                    }
                })

        })

      }
    },
    created:function() {
        var that = this;
        var par = window.location.href.split("?")[1];//id
        var ids = par.split("&")[0];
        var id = ids.split("=")[1];//获取到id
        that.caseid = id;
        var oids = par.split("&")[1];
        var oid = oids.split("=")[1];//获取到openid
        that.oid = oid;
        // 获取基础数据
        $.ajax({
            type:"get",
            url:ajaxurl()+"/cases/detail.aspx?caseId="+id,
            success:function(data){
                var datas = json1(data);
                that.data = datas.data
            },
            error:function(jqXHR){
                console.log("失败")
            }
        });
        // 获取专家点评数据
        $.ajax({
            type:"get",
            url:ajaxurl()+"/cases/caseExCommlist.aspx?caseId="+id,
            success:function(data){
                var datas = json1(data);
                that.dataEx = datas.data
                if(datas.data.length <= 0){
                    that.nodataEx = true;
                }
            },
            error:function(jqXHR){
                console.log("失败")
            }
        });
        // 获取普通点评数据
        $.ajax({
            type:"get",
            url:ajaxurl()+"/cases/caseUserCommlist.aspx?caseId="+id,
            success:function(data){
                var datas = json1(data);
                that.dataUser = datas.data;
                if(datas.data.length <= 0){
                    that.nodataUser = true;
                }
            },
            error:function(jqXHR){
                console.log("失败")
            }
        });
        $("textarea").blur(function() {
            alert("in")
           $(window).scrollTop(0);
        });
    },
    mounted:function() {
    },
    methods: {
      butThing:function(index){
        this.sign = index;
      },
      areaShow:function(){
        $(".bgcase").show();
        $(".textarea").show();
        $(".textarea textarea").focus();
      },
      quxiao:function(){
        this.contentText = "";
        $(".textarea textarea").blur();
        $(".textarea").hide();
        $(".bgcase").hide();
      },
      queding:function(){
        
        var that = this;
        if(that.contentText != ""){

            $.ajax({
                type:"get",
                url:ajaxurl()+"/cases/InsertComm.aspx",
                data:{
                    openId:that.oid,
                    Content:that.contentText,
                    caseId:that.caseid
                },
                success:function(data){

                    that.contentText = ""
                    $(".textarea").hide();
                    $(".bgcase").hide();
                    
                    $.ajax({
                        type:"get",
                        url:ajaxurl()+"/cases/caseUserCommlist.aspx?caseId="+that.caseid,
                        success:function(data2){
                            var datas = json1(data2);
                            that.dataUser = datas.data;
                            that.nodataUser = false;
                            
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
        }else{
            $(".textarea textarea").focus();
        }
      },
      userSub:function(){
        var that = this;
        if(that.contentText != ""){
            $.ajax({
                type:"get",
                url:ajaxurl()+"/cases/InsertComm.aspx",
                data:{
                    openId:that.oid,
                    Content:that.contentText,
                    caseId:that.caseid
                },
                success:function(data){
                    that.contentText = ""
                    $.ajax({
                        type:"get",
                        url:ajaxurl()+"/cases/caseUserCommlist.aspx?caseId="+that.caseid,
                        success:function(data2){
                            var datas = json1(data2);
                            that.dataUser = datas.data;
                            that.nodataUser = false;
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
        }
        
      },
      pdf:function(){
        var that = this;
        if( that.data.PathUrl ){
            window.location.href = "http://xhyx.ikangxun.com/assets/js/pdfjs/web/viewer.html?url_file=/assets/aspx/OSSIndex.aspx?type=1&path="+that.data.PathUrl;
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
      
    }
})


$("textarea").blur(function() {
        $(window).scrollTop(0);
});


// setTimeout(function(){
//     v.dataEx = [
//                 {
//                     OSSName:"images/heard.png",
//                     Content:"评论评论",
//                     Description:"专家简家简",
//                 },
//                 {
//                     OSSName:"images/heard.png",
//                     Content:"评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论论评论评论评论评论评论评论评论评论评论评论论评论评论评论评论评论评论评论评论评论评论论评论评论评论评论评论评论评论评论评论评论评论评论",
//                     Description:"专家简介专家简介专家简介专家简介专家简介专家简介专家简介专家简介专家简介专家简介专家简介专家简介专家简介专家简介专家简介专家简介专家简介专家简介专家简介专家简介专家简介",
//                 },
//                 {
//                     OSSName:"images/heard.png",
//                     Content:"简介专家简11介专家简介专家简介专家简介专家简介专家简介专家简介专家简介专专家简介专家简介专家简介专家简介专家简介家简介专家简介专家简介专家",
//                     Description:"",
//                 }
//         ]
// },1000);