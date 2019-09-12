



//为单选框添加样式和方法1，其他单选框样式同理
function initRadioStyle1(className){
    //男女单选框添加样式
    var radioArr = $(className);
    for (var i = 0; i < radioArr.length; i++) {
        radioArr.eq(i).after("<img class='radio-style-img' src='images/v2.jpg' alt=''>");
    };
    //男女单选框添加事件
    radioArr.click(function () {
        var names = $(this).attr("name");
        var cspan = $("input[name='" + names + "']");
        for (var i = 0; i < cspan.length; i++) {
            cspan.eq(i).next().attr('src','images/v2.jpg');
        }
        $(this).next().attr('src','images/v1.jpg');
        v.sex = $('.radio-style:checked').val()
    })
}
var v = new Vue({
    el: "#app",
    data: {
        id:"",
        oid:"",
        isBao:false,
        data:{
            meet:{
                Id:"",
                Title:"",
                OSSName:"",
                StartDate:"",
                EndDate:"",
                Content:"",
                Places:"",
                CreateDate:"",
                SourIndex:"",
                State:"",
                PathUrl:"",
                PSSPath:"",
                TeacherName:"",
                TeacherRemake:"",
            }
        },
        name:"",
        sex:"",
        region:"",
        company:"",
        position:"",
        mail:"",
        phone:"",
        code:"",
        codeNumber:"获取验证码"
    },
    created:function() {
        var that = this;
        var par = window.location.href.split("?")[1];//id
        var ids = par.split("&")[0];
        var id = ids.split("=")[1];//获取到id
        that.id = id;
        var oids = par.split("&")[1];
        var oid = oids.split("=")[1];//获取到openid
        that.oid = oid;
        $.ajax({
            type: "get",
            url: ajaxurl() + "/meet/detail.aspx?meetId=" + id,
            success: function (data) {
                that.data = json1(data);
            },
            error: function (jqXHR) {
                console.log("失败")
            }
        });
        try{
            $.ajax({
                type: "get",
                url: ajaxurl() + "/meet/IsBao.aspx?openId="+oid+"&meetId=" + id,
                success: function (data) {
                    var datas = json1(data);
                   if(datas.code == 200){
                   }else{

                    // alert(data)

                    $(".code").hide();
                    $(".sub").addClass('subSign')
                    that.name = datas.user.Name;
                    that.sex = datas.user.Sex;
                    $(".radio-style").eq(0).next().css('zIndex','100');
                    $(".radio-style").eq(1).next().css('zIndex','100');


                    if(datas.user.Sex == 1){
                        $(".radio-style").eq(0).next().attr('src','images/v1.jpg');
                    }
                    if(datas.user.Sex == 2){
                        $(".radio-style").eq(1).next().attr('src','images/v1.jpg');
                    }


                    that.region = datas.user.Region;
                    that.company = datas.user.Company;
                    that.position = datas.user.Title;
                    that.mail = datas.user.Email;
                    that.phone = datas.user.Telephone;
                    $("input").attr("readonly","readonly");
                    $(".code button").addClass('ex-0');
                    that.isBao = true;
                   }
                },
                error: function (jqXHR) {
                    console.log("失败")
                }
            });
        }
        catch(err){
            console.log(err.message)
        }
    },
    mounted:function() {
        initRadioStyle1(".radio-style");
        if(this.sex == 1){
            $(".radio-style").eq(0).next().attr('src','images/v1.jpg');
        }
        if(this.sex == 2){
            $(".radio-style").eq(1).next().attr('src','images/v1.jpg');
        }
    },
    methods: {
      butThing:function(index){
        this.sign = index
      },
      getCode:function(e){
        var event = e || window.event;
        var target = event.target || event.srvElement;
        var that = this;
        if( !(/^1(3|4|5|6|7|8)\d{9}$/.test(that.phone)) ){
            mui.toast('请您填写电话',{ duration:'long', type:'div' });
            return false;
        }else{
            $.ajax({
                type:"get",
                url:ajaxurl()+"/SendNum.aspx?Telephone="+that.phone+"&TemplateId=32062",
                success:function(data){
                    var datas = json1(data);
                    if(datas.code == 200){
                        mui.toast('验证码已发送您的手机',{ duration:'long', type:'div' });
                        $(target).addClass('ex-0');
                        that.codeNumber = 60;
                        var sett = setInterval(function(){
                            if( that.codeNumber <= 1 ){
                                clearInterval(sett);
                                that.codeNumber = "获取验证码";
                                $(target).removeClass('ex-0');
                            }else{
                               that.codeNumber = that.codeNumber*1 - 1; 
                            }
                        },1000);
                    }else{
                        mui.toast('验证码发送失败',{ duration:'long', type:'div' });
                    }
                },
                error:function(jqXHR){
                    console.log("失败")
                }
            });
        }
      },
      subt:function(){
        var that = this;
        if( that.isBao ){
            mui.toast('您已经报名了',{ duration:'long', type:'div' });
            return false;
        }
        if( this.name == "" ){
            mui.toast('请您填写姓名',{ duration:'long', type:'div' });
            return false;
        }
        if( this.sex == "" ){
             mui.toast('请您填写性别',{ duration:'long', type:'div' });
            return false;
        }
        if( this.region == "" ){
             mui.toast('请您填写地区',{ duration:'long', type:'div' });
            return false;
        }
        if( this.company == "" ){
             mui.toast('请您填写单位',{ duration:'long', type:'div' });
            return false;
        }
        if( this.position == "" ){
             mui.toast('请您填写职称',{ duration:'long', type:'div' });
            return false;
        }
        if( this.mail == "" ){
             mui.toast('请您填写邮箱',{ duration:'long', type:'div' });
            return false;
        }else{
            if(!(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(this.mail)) ){
                mui.toast('请填写正确邮箱',{ duration:'long', type:'div' });
                return false; 
            }  
        }
        if( this.phone == "" ){
             mui.toast('请您填写电话',{ duration:'long', type:'div' });
            return false;
        }else{
            if(!(/^1(3|4|5|6|7|8)\d{9}$/.test(this.phone)) ){
                mui.toast('请填写正确电话号码',{ duration:'long', type:'div' });
                return false; 
            }  
        }
        if( this.code == "" ){
            mui.toast('请您填写验证码',{ duration:'long', type:'div' });
            return false;
        }else{

        }



        $.ajax({
            type:"post",
            url:ajaxurl()+"/meet/baoming.aspx",
            data: {
                "Company": that.company,
                "Email": that.mail,
                "MId": that.id,
                "Telephone": that.phone,
                "Name": that.name,
                "Sex": that.sex,
                "Region": that.region,
                "Title": that.position,
                "openId": that.oid,
                "yanzhenma": that.code
            },
            success: function (data) {
                var datas = json1(data)
                if(datas.code == 200){

                    // sessionStorage.setItem("need-refresh", true);
                    
                    alertReg();
                }else{
                    mui.toast(datas.msg,{ duration:'long', type:'div' });
                }
            },
            error:function(jqXHR){
                console.log("请求失败")
            }
        });
      }
    }
})


mui.init();
(function($, doc) {
    $.init();
    $.ready(function() {
        //3级联示例
        var cityPicker3 = new $.PopPicker({
            layer: 3
        });
        cityPicker3.setData(cityData3);
        var showCityPickerButton = doc.getElementById('address');
        var cityResult3 = doc.getElementById('address');
        showCityPickerButton.addEventListener('tap', function(event) {
            cityPicker3.show(function(items) {
                cityResult3.value =(items[0] || {}).text + " " + (items[1] || {}).text + " " + (items[2] || {}).text;
                v.region = (items[0] || {}).text + " " + (items[1] || {}).text + " " + (items[2] || {}).text;
                //返回 false 可以阻止选择框的关闭
                //return false;
            });
        }, false);
    });
})(mui, document);