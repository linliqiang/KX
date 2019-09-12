$(document).ready(function(){
     $(function(){
        // $(".quseRepeatBox").eq(0).children(".quesItem:last").css("borderBottom","0px")
     })
})
//普通列表数据样本
        var repeatItems = [
                {
                    img:"img/new2_03.png",
                    headerImg:"img/header001.png",
                    type:"经验",
                    title:"政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    name:"刘思雨",
                    form:"新华社",
                    company:"四川省成都医院",
                    time:"2018-6-8",
                    look:5000,
                    formType:"doctor",
                },
                {
                    img:"img/new2_03.png",
                    headerImg:"img/header001.png",
                    type:"秘方",
                    title:"政策法规政策法规政策法规政策法规政策",
                    msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    name:"刘思雨",
                    form:"新华社",
                    company:"四川省成都医院",
                    time:"2018-6-8",
                    look:5000,
                    formType:"expert",
                },
                {
                    img:"img/new2_03.png",
                    headerImg:"",
                    type:"精选",
                    title:"政策法规政策法规政策法规政策法规政策",
                    msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    name:"刘思雨",
                    form:"新华社",
                    company:"四川省成都医院",
                    time:"2018-6-8",
                    look:5000,
                    formType:"",
                },
                {
                    img:"img/new2_03.png",
                    headerImg:"img/header001.png",
                    type:"精选",
                    title:"政策法规政策法规政策法规政策法规政策",
                    msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    name:"刘思雨",
                    form:"新华社",
                    company:"四川省成都医院",
                    time:"2018-6-8",
                    look:5000,
                    formType:"expert",
                },
        ];
        var repeatItemss = [
                {
                    img:"img/new2_03.png",
                    headerImg:"",
                    type:"经验",
                    title:"政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    name:"张一凡",
                    form:"新华社",
                    company:"四川省成都医院",
                    time:"2018-6-8",
                    look:5000,
                    formType:"",
                },
                {
                    img:"img/new2_03.png",
                    headerImg:"",
                    type:"秘方",
                    title:"政策法规政策法规政策法规政策法规政策",
                    msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    name:"张一凡",
                    form:"新华社",
                    company:"四川省成都医院",
                    time:"2018-6-8",
                    look:5000,
                    formType:"",
                },
                {
                    img:"img/new2_03.png",
                    headerImg:"",
                    type:"精选",
                    title:"政策法规政策法规政策法规政策法规政策",
                    msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    name:"张一凡",
                    form:"新华社",
                    company:"四川省成都医院",
                    time:"2018-6-8",
                    look:5000,
                    formType:"",
                },
                {
                    img:"img/new2_03.png",
                    headerImg:"",
                    type:"精选",
                    title:"政策法规政策法规政策法规政策法规政策",
                    msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    name:"张一凡",
                    form:"新华社",
                    company:"四川省成都医院",
                    time:"2018-6-8",
                    look:5000,
                    formType:"",
                },
        ];
//问答列表数据样本
        var quseRepeatItems = [
                {
                    title:"政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政",
                    msg:"",
                    answer:0,
                    guanzhu:true,
                },
                {
                    title:"政策法规政策法规政策法规政策法规政策",
                    msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    answer:16,
                    guanzhu:true,
                },
                {
                    title:"政策法规政策法规政策法规政策法规政策",
                    msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    answer:16,
                    guanzhu:true,
                },
                {
                    title:"政策法规政策法规政策法规政策法规政策",
                    msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                    answer:16,
                    guanzhu:true,
                },
        ];

//我的关注，医友
var gzyys = [
                {
                    img:"img/header001.png",
                    name:"张婷",
                    guanzhu:true,
                },
                {
                    img:"img/header001.png",
                    name:"刘心",
                    guanzhu:true,
                },
                {
                    img:"img/header001.png",
                    name:"张海",
                    guanzhu:true,
                },
                {
                    img:"img/header001.png",
                    name:"海心",
                    guanzhu:true,
                },
                {
                    img:"img/header001.png",
                    name:"心",
                    guanzhu:true,
                },
                {
                    img:"img/header001.png",
                    name:"海",
                    guanzhu:true,
                },
                {
                    img:"img/header001.png",
                    name:"张海心",
                    guanzhu:true,
                },
                {
                    img:"img/header001.png",
                    name:"张海心",
                    guanzhu:true,
                },
                {
                    img:"img/header001.png",
                    name:"张海心",
                    guanzhu:true,
                },
                {
                    img:"img/header001.png",
                    name:"张海心",
                    guanzhu:true,
                }
        ];

function obj_json(data){
    //转json
    var data1 = JSON.stringify(data)
    //转对象
    var data2 = JSON.parse(data1)
    return data2
}

// 我的收藏，视频
var repeatItems1 = obj_json(repeatItems);
// 我的收藏，文章
var repeatItems2 = obj_json(repeatItems);
// 我的收藏，直播
var repeatItems3 = obj_json(repeatItems);
// 我的收藏，病例
var repeatItems4 = obj_json(repeatItems);
// 我的收藏，资讯
var repeatItems5 = obj_json(repeatItems);

// 我的发布，视频
var repeatItems6 = obj_json(repeatItemss);
// 我的发布，文章
var repeatItems7 = obj_json(repeatItemss);
// 我的发布，病例
var repeatItems8 = obj_json(repeatItemss);

// 我的发布，问答
var quseRepeatItems1 = obj_json(quseRepeatItems);

//我的关注，问答
var quseRepeatItems2 = obj_json(quseRepeatItems);

var v = new Vue({
    el: "#app",
    data: {
        //用户信息
        userMsg:false,
        //头部导航标记
        navSign:0,
      
        //个人菜单导航样式标记
        subNavSign:1,


        // 普通用户是否认证
        renzheng:false,


        // 我的收藏
        collNav:1,
        // 我的发布
        relNav:1,
        // 我的关注
        follNav:1,
        // 我的设置
        setNav:1,
        //绑定手机验证码
        yanNum:"验证码",
        
        

        // 我的收藏，视频
        repeatItem1: repeatItems1,
        // repeatItem1: [],
        // 我的收藏，文章
        repeatItem2: repeatItems2,
        // 我的收藏，直播
        repeatItem3: repeatItems3,
        // 我的收藏，病例
        repeatItem4: repeatItems4,
        // 我的收藏，资讯
        repeatItem5: repeatItems5,

        // 我的发布，视频
        repeatItem6:repeatItems6,
        // 我的发布，文章
        repeatItem7:repeatItems7,
        // 我的发布，病例
        repeatItem8:repeatItems8,
        // 我的发布，提问
        quseRepeatItem1:quseRepeatItems1,
        


        // 我的关注-医友
        gzyy:gzyys,
        
        //我的关注，提问
        quseRepeatItem2:quseRepeatItems2,

        // 订单数据
        dingdan:[],
        dingdanAll:[
                {
                    title:"第一期第一期标题第一期标题标题",
                    title2:"第一期",
                    price:19.9,
                    pay:"no",
                },
                {
                    title:"第一期标题",
                    title2:"第一期",
                    price:19.9,
                    pay:"no",
                },
                {
                    title:"第一期标题",
                    title2:"第一期",
                    price:19.9,
                    pay:"ok",
                },
                {
                    title:"第一期标题",
                    title2:"第一期",
                    price:19.9,
                    pay:"ok",
                }
        ],
        dingdanNo:[
                {
                    title:"第一期第一期标题第一期标题标题",
                    title2:"第一期",
                    price:19.9,
                    pay:"no",
                },
                {
                    title:"第一期标题",
                    title2:"第一期",
                    price:19.9,
                    pay:"no",
                },
                {
                    title:"第一期标题",
                    title2:"第一期",
                    price:19.9,
                    pay:"no",
                },
                {
                    title:"第一期标题",
                    title2:"第一期",
                    price:19.9,
                    pay:"no",
                }
        ],
        dingdanOk:[
                {
                    title:"第一期第一期标题第一期标题标题",
                    title2:"第一期",
                    price:19.9,
                    pay:"ok",
                },
                {
                    title:"第一期标题",
                    title2:"第一期",
                    price:19.9,
                    pay:"ok",
                },
                {
                    title:"第一期标题",
                    title2:"第一期",
                    price:19.9,
                    pay:"ok",
                },
                {
                    title:"第一期标题",
                    title2:"第一期",
                    price:19.9,
                    pay:"ok",
                }
        ],
        // 邀请码课程数据
        yaoqing:[
                {
                    title:"第一期第一期标题第一期标题标题",
                },
                {
                    title:"第一期标题",
                },
                {
                    title:"第一期标题",
                },
                {
                    title:"第一期标题",
                }
        ],
        // 邀请码目录标记
        yaoqingSign:1,
        code:"",

        // 订单目录标记
        dingdanSign:1,

       
    },
    created:function() {
       if( window.localStorage.getItem("user") ){
            console.log(window.localStorage.getItem("user"))
            var datas = JSON.parse(window.localStorage.getItem("user"))
            this.userMsg = datas

       }
       if( window.localStorage.getItem("userc") ){
            this.subNavSign = window.localStorage.getItem("userc")*1
       }

       var that = this;
       for(var i=0;i<that.repeatItem8.length;i++){
            that.repeatItem8[i].headerImg = that.userMsg.img;
            that.repeatItem8[i].formType = that.userMsg.type;
        }

        this.repeatItem2[0].img = ""
        this.repeatItem2[0].name = ""
        this.repeatItem2[0].company = ""

        this.repeatItem2[1].name = ""
        this.repeatItem2[2].company = ""

        this.repeatItem4[0].img = ""
        this.repeatItem4[1].headerImg = ""
        this.repeatItem4[1].name = ""


        this.repeatItem7[0].img = ""
        this.repeatItem8[0].img = ""

        this.dingdan = this.dingdanAll

    },
    mounted:function() {
       
        if(this.userMsg.type == "ordinary"){
            this.relNav = 0
        }else{
            this.relNav = 1
        }

        if(this.userMsg.type == "doctor"){
            this.relNav = 3
        }

        
        if( window.sessionStorage.getItem("renzheng") == "ok"){
            this.renzheng = true;
        }

        var strs = window.location.href.split("?")
        if(strs[1]){
            this.subNavSign = 5
        }
    
    },

    methods: {
      // header方法
        touser:function(index){
            window.localStorage.setItem("userc",index)
            window.location.href = "user.html"
        },
        signOut:function(){
            this.userMsg = false;
            window.localStorage.removeItem('user');
            window.location.href = "index.html"
        },



        myChoise:function(sign){
            this.subNavSign = sign
            window.localStorage.setItem("userc",sign)
        },

        // #我的收藏
        collClick:function(sign){
          this.collNav = sign
        },
        //取消收藏
        delColl:function(sign,sign2){
            if( sign2 == 1 ){
                this.repeatItem1.splice(sign,1)
            }else if( sign2 == 2 ){
                this.repeatItem2.splice(sign,1)
            }else if( sign2 == 3 ){
                this.repeatItem3.splice(sign,1)
            }else if( sign2 == 4 ){
                this.repeatItem4.splice(sign,1)
            }else{
                this.repeatItem5.splice(sign,1)
            }

        },
        // 我的收藏#
        
        // 我的发布
        relClick:function(sign){
            if(this.userMsg.type == "ordinary"){
                this.relNav = 0
            }else{
                this.relNav = sign
            } 
        },
        // 前往发布页面
        tofabu:function(){
            if( this.userMsg.type == "ordinary" ){
                // 普通用户
                if(window.sessionStorage.getItem("renzheng")){
                    alertRZ2();
                }else{
                    alertRZ();
                } 
            }else{
                window.location.href = "edit.html"
            }
        },
        // 我的关注
        follClick:function(sign){
          this.follNav = sign
        },
         yygz:function(sign){
            this.gzyy[sign].guanzhu = !this.gzyy[sign].guanzhu;
        },
        //取消关注方法，发布和关注的提问通用
        quseGuanzhuThing:function(sign,sign2){
            if( sign2 == 1 ){
                //我的发布，是否关注
                this.quseRepeatItem1[sign].guanzhu = !this.quseRepeatItem1[sign].guanzhu
            }else{
                //我的关注问题，是否关注
                this.quseRepeatItem2[sign].guanzhu = !this.quseRepeatItem2[sign].guanzhu
            }
        },
        // 我的设置
        setClick:function(sign){
          this.setNav = sign
        },


        
        //#意见反馈
        feedSub:function(){
          var str1 = $(".feed textarea").val()
          var str2 = $(".feed input").val()
          if( str1 == "" ){
            alertWarn("请完善意见信息")
          }else if( str2 == "" ){
            alertWarn("请填写联系方式")
          }else{
            alertSuc("提交成功");
            $(".feed textarea").val("")
            $(".feed input").val("")
          }
          
        },
        //意见反馈#
        //#修改密码
        setPsw:function(){
          var str1 = $(".setBoxpsw .setPsw1").val()
          var str2 = $(".setBoxpsw .setPsw2").val()
          var str3 = $(".setBoxpsw .setPsw3").val()
          if( str1 == "" ){
            alertWarn("请输入原始密码")
          }else if( str2 == "" ){
            alertWarn("请输入新密码")
          }else if( str2.length < 6 ){
            alertWarn("设置新密码长度必须大于6")
          }else if( str2 != str3 ){
            alertWarn("两次新密码必须保持一致")
          }else{
            alertSuc("修改密码成功");
            $(".setBoxpsw .setPsw1").val("")
            $(".setBoxpsw .setPsw2").val("")
            $(".setBoxpsw .setPsw3").val("")
          }
        },
        //修改密码#
        //#绑定手机
        bdPhone:function(){
           // this.user.phone = false
          // $(".setBoxadm .setBoxadm1").hide();
          // $(".setBoxadm .setBoxadm2").show();
          // $(".setPhoneON").hide();
          // $(".setPhone").show();

          alertphoneUp();

        },
        getYanNum:function(){
            var regPhone = new RegExp(/^[1][3,4,5,7,8][0-9]{9}$/);
            var str1 = $(".setPhone .setPhoneText1").val();
            var that = this;
            if( !regPhone.test(str1) ){
                alertWarn("请输入正确手机号码")
            }else{
                that.yanNum = 60;
                $(".yanzheng button").attr("disabled", true);
                var setInt = setInterval(function(){
                    that.yanNum = that.yanNum - 1;
                    if(that.yanNum == 0){
                        clearInterval(setInt);
                        that.yanNum = "获取验证码";
                        $(".yanzheng button").removeAttr("disabled");
                    }
                },1000)
            }



        },
        setPhoneOK:function(){

          var regPhone = new RegExp(/^[1][3,4,5,7,8][0-9]{9}$/);
          var str1 = $(".setPhone .setPhoneText1").val();
          var str2 = $(".setPhone .setPhoneText2").val();
          if( !regPhone.test(str1) ){
            alertWarn("请输入正确手机号码")
          }else if( str2.length < 4 ){
            alertWarn("请输入正确的验证码")
          }else{
            alertSuc("绑定手机成功");
            this.userMsg.phone = str1
            $(".setPhone .setPhoneText1").val("");
            $(".setPhone .setPhoneText2").val("");
            $(".setBoxadm .setBoxadm1").show();
            $(".setBoxadm .setBoxadm2").hide();
          }

        },
        //绑定手机#
        //
        //#个人信息设置
        userSave:function(){
            console.log("保存")
            var suinp = $(".setBoxmy input")
            for(var i=0;i<suinp.length;i++){
                console.log(i)
                if( suinp.eq(i).attr("type") ==  "text"){
                    if( suinp.eq(i).val() ==  ""){
                        alertWarn("请输入"+suinp.eq(i).attr("alt"))
                        return false;
                    }else{
                        if( suinp.eq(i).attr("regs") == "mail" ){
                            var regmail = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");//邮箱正则
                            if( !regmail.test(suinp.eq(i).val()) ){
                                alertWarn("请输入邮箱地址")
                                return false;
                            }
                        }
                    }
                }
                if( suinp.eq(i).attr("type") ==  "radio" ){
                    if($("input[name="+suinp.eq(i).attr("name")+"]:checked").length == 0){
                        alertWarn("请选择"+suinp.eq(i).attr("alt"))
                        return false;
                    }
                }
            }
            alertSuc("修改成功")
        },
        //个人信息设置#
        
        
        //#医生已经认证，修改信息
        ysrzImg:function(){
            $("#ysrzInp").click();
            $("#ysrzInp").live("change", function() {
                    var reader = new FileReader();
                    var file = $("#ysrzInp")[0].files[0];
                    var imgUrlBase64;
                    if (file) {
                        imgUrlBase64 = reader.readAsDataURL(file);
                        reader.onload = function (e) {//读取成功后的回调
                            $("#ysimg").attr('src',reader.result); 
                        }
                    }
            });
        },
        ysChange:function(){
            var suinp = $(".ysrz input")
            for(var i=0;i<suinp.length;i++){
                if( suinp.eq(i).attr("type") ==  "text"){
                    if( suinp.eq(i).val() ==  ""){
                        alertWarn("请输入"+suinp.eq(i).attr("alt"))
                        return false;
                    }
                }
              
            }
            alertSuc("修改成功")
        },
        //医生已经认证，修改信息#
        tofeed:function(){
            if(this.userMsg){
                window.location.href = "user.html?type=or"
            }else{
                window.location.href = "login.html"
            }
        },




        repeatItemMore1:function(){
            for(var i=0;i<4;i++){
                this.repeatItem1.push(
                            {
                                img:"img/new2_03.png",
                                headerImg:"",
                                type:"精选",
                                title:"政策法规政策法规政策法规政策法规政策",
                                msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                                name:"刘思雨",
                                form:"新华社",
                                company:"四川省成都医院",
                                time:"2018-6-8",
                                look:5000
                            }
                );
            };
        },
        repeatItemMore2:function(){
            for(var i=0;i<4;i++){
                this.repeatItem2.push(
                            {
                                img:"img/new2_03.png",
                                headerImg:"",
                                type:"精选",
                                title:"政策法规政策法规政策法规政策法规政策",
                                msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                                name:"刘思雨",
                                form:"新华社",
                                company:"四川省成都医院",
                                time:"2018-6-8",
                                look:5000
                            }
                );
            };
        },
        repeatItemMore3:function(){
            for(var i=0;i<4;i++){
                this.repeatItem3.push(
                            {
                                img:"img/new2_03.png",
                                headerImg:"",
                                type:"精选",
                                title:"政策法规政策法规政策法规政策法规政策",
                                msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                                name:"刘思雨",
                                form:"新华社",
                                company:"四川省成都医院",
                                time:"2018-6-8",
                                look:5000
                            }
                );
            };
        },
        repeatItemMore4:function(){
            for(var i=0;i<4;i++){
                this.repeatItem4.push(
                            {
                                img:"img/new2_03.png",
                                headerImg:"",
                                type:"精选",
                                title:"政策法规政策法规政策法规政策法规政策",
                                msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                                name:"刘思雨",
                                form:"新华社",
                                company:"四川省成都医院",
                                time:"2018-6-8",
                                look:5000
                            }
                );
            };
        },
        repeatItemMore5:function(){
            for(var i=0;i<4;i++){
                this.repeatItem5.push(
                            {
                                img:"img/new2_03.png",
                                headerImg:"",
                                type:"精选",
                                title:"政策法规政策法规政策法规政策法规政策",
                                msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                                name:"刘思雨",
                                form:"新华社",
                                company:"四川省成都医院",
                                time:"2018-6-8",
                                look:5000
                            }
                );
            };
        },
        repeatItemMore6:function(){
            for(var i=0;i<4;i++){
                this.repeatItem6.push(
                            {
                                img:"img/new2_03.png",
                                headerImg:"",
                                type:"精选",
                                title:"政策法规政策法规政策法规政策法规政策",
                                msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                                name:"刘思雨",
                                form:"新华社",
                                company:"四川省成都医院",
                                time:"2018-6-8",
                                look:5000
                            }
                );
            };
        },
        repeatItemMore7:function(){
            for(var i=0;i<4;i++){
                this.repeatItem7.push(
                            {
                                img:"img/new2_03.png",
                                headerImg:"",
                                type:"精选",
                                title:"政策法规政策法规政策法规政策法规政策",
                                msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                                name:"刘思雨",
                                form:"新华社",
                                company:"四川省成都医院",
                                time:"2018-6-8",
                                look:5000
                            }
                );
            };
        },
        repeatItemMore8:function(){
            for(var i=0;i<4;i++){
                this.repeatItem8.push(
                            {
                                img:"img/new2_03.png",
                                headerImg:"",
                                type:"精选",
                                title:"政策法规政策法规政策法规政策法规政策",
                                msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                                name:"刘思雨",
                                form:"新华社",
                                company:"四川省成都医院",
                                time:"2018-6-8",
                                look:5000
                            }
                );
            };
        },
        qItemMore1:function(){
            for(var i=0;i<4;i++){
                this.quseRepeatItem1.push(
                            {
                                title:"政策法规政策法规政策法规政策法规政策",
                                msg:"政策法规政策法规政策政策法规政策法规政策法规政策法规政策政策法规政策法规政策法规政策法规政策",
                                answer:16,
                                guanzhu:true,
                            }
                );
            };
        },


        tovid:function(pay){
            if(pay=='ok'){
                window.location.href = "vidDet_xindian.html?pay=ok"
            }else{
                window.location.href = "vidDet_xindian.html?pay=no"
            }
            
        },
        tovid2:function(){
            window.location.href = "vidDet_xindian.html?pay=fr"
        },
        yaoqingSignT:function(sign){
            this.yaoqingSign = sign
        },



        codeT:function(){
            if( this.code == "" ){
               alertWarn("请填写正确的邀请码");
            }else{
                this.code = "";
                alertSuc("兑换成功");
                this.yaoqing.push({
                    title:"第二期标题",
                })
            }
        },

        dingdanMore:function(){


            if(this.dingdanSign==1){
                for(var i=0;i<4;i++){
                    this.dingdanAll.push(
                                {
                                    title:"第一期第一期标题第一期标题标题",
                                    title2:"第一期",
                                    price:19.9,
                                    pay:"ok",
                                },
                    );
                };
            }else if(this.dingdanSign==2){
                for(var i=0;i<4;i++){
                    this.dingdanNo.push(
                                {
                                    title:"第一期第一期标题第一期标题标题",
                                    title2:"第一期",
                                    price:19.9,
                                    pay:"no",
                                },
                    );
                };
            }else{
                for(var i=0;i<4;i++){
                    this.dingdanOk.push(
                                {
                                    title:"第一期第一期标题第一期标题标题",
                                    title2:"第一期",
                                    price:19.9,
                                    pay:"ok",
                                },
                    );
                };
            }

            
        },

        yaoqingMore:function(){
            for(var i=0;i<4;i++){
                this.yaoqing.push(
                            {
                                title:"第一期第一期标题第一期标题标题",
                            },
                );
            };
        },


        dingdanSignT:function(sign){
            this.dingdanSign = sign
            if( sign == 1 ){
                this.dingdan = this.dingdanAll
            }else if( sign == 2 ){
                this.dingdan = this.dingdanNo
            }else{
                this.dingdan = this.dingdanOk
            }
        },


    }

})

