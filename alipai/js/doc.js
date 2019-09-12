
var reg1 = new RegExp(/^1[34578]\d{9}$/);//手机
var reg2 = new RegExp(/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/);//邮箱
var reg3 = new RegExp(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/);//身份证号码


$(function(){

    $(".msgSub button").click(function(){
        var ta = $(".content1 input[type='text']");
        for(var i=0;i<ta.length;i++){
            if(ta.eq(i).val()==""){
                showTip("请填写"+ta.eq(i).attr("alt"), "error");
                ta.eq(i).focus();
                return false;
            }
            if(ta.eq(i).attr("reg")=="reg1"){
                if(!reg1.test(ta.eq(i).val())){
                    showTip("请填写"+ta.eq(i).attr("alt"), "error");
                    ta.eq(i).focus();
                    return false;
                }
            }else if(ta.eq(i).attr("reg")=="reg2"){
                if(!reg2.test(ta.eq(i).val())){
                    showTip("请填写"+ta.eq(i).attr("alt"), "error");
                    ta.eq(i).focus();
                    return false;
                }
            }else if(ta.eq(i).attr("reg")=="reg3"){
                if(!reg3.test(ta.eq(i).val())){
                    showTip("请填写"+ta.eq(i).attr("alt"), "error");
                    ta.eq(i).focus();
                    return false;
                }
            }else{

            }
        }
        var ta2 = $("select");
        for(var i=0;i<ta2.length;i++){
            if(ta2.eq(i).val()==""){
                showTip("请选择"+ta2.eq(i).attr("alt"), "error");
                ta2.eq(i).focus();
                return false;
            }
            
        }
        console.log("基本信息验证通过");
        showTip("提交成功", "success");
    });

    $(".pawSub").click(function(){
        var node1 = $("#oldpaw");
        var node2 = $("#newpaw");
        var node3 = $("#newpaw2");
        if(node1.val()==""){
            showTip("请输入旧密码", "error");
            node1.focus();
            return false;
        }else if(node2.val()==""){
            showTip("请输入新密码", "error");
            node2.focus();
            return false;
        }else if(node3.val()==""){
            showTip("请再次输入新密码", "error");
            node3.focus();
            return false;
        }else if(node2.val()!=node3.val()){
            showTip("两次新密码不一致", "error");
            node3.focus();
            return false;
        }else{
            console.log("修改成功")
            showTip("修改成功", "success");
        }
    })

})

var v = new Vue({
    el: "#app",
    data: {
        cho:1,
    },
    created:function() {
    },
    mounted:function() {
    },
    methods: {
        chot:function(sign){
            this.cho=sign
        }
    }
})