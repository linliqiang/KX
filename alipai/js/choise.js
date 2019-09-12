
$(function(){

    $(".cb2-f3-body #yongyao321").click(function(){
        $("#cf23").removeAttr("disabled");
        $("#cf23").removeAttr("buti");
    })
    $(".cb2-f3-body #yongyao322").click(function(){
        $("#cf23").removeAttr("disabled");
        $("#cf23").removeAttr("buti");
    })
    $(".cb2-f3-body #yongyao323").click(function(){
        $("#cf23").val("").attr("disabled","disabled");
        $("#cf23").attr("buti","buti")
    })

    // 初始化添加属性、样式、事件
    // 第一步
    $("#bingshi01").click(function(){
            var cbf12 = $(".cb1-f3-body input")
            for(var i=0;i<cbf12.length;i++){
                if(cbf12.eq(i).attr("type")=="radio"){
                    cbf12.eq(i).attr("disabled","disabled").get(0).checked=false;
                }else if(cbf12.eq(i).attr("type")=="text"){
                    cbf12.eq(i).val("").attr("disabled","disabled");
                }else{
                }
            }
    })
    $("#bingshi02").click(function(){
            var cbf12 = $(".cb1-f3-body input")
            for(var i=0;i<cbf12.length;i++){
                if(cbf12.eq(i).attr("type")=="radio"){
                    cbf12.eq(i).removeAttr("disabled");
                }else if(cbf12.eq(i).attr("type")=="text"){
                    cbf12.eq(i).removeAttr("disabled");
                }else{
                }
            }
    })

    // 第二步
    $("#yongyao01").click(function(){
            var cbf12 = $(".cb2-f1-body input")
            for(var i=0;i<cbf12.length;i++){
                if(cbf12.eq(i).attr("type")=="radio"){
                    cbf12.eq(i).attr("disabled","disabled").get(0).checked=false;
                }else if(cbf12.eq(i).attr("type")=="text"){
                    cbf12.eq(i).val("").attr("disabled","disabled");
                }else{
                }
            }
    })
    $("#yongyao02").click(function(){
            var cbf12 = $(".cb2-f1-body input")
            for(var i=0;i<cbf12.length;i++){
                if(cbf12.eq(i).attr("type")=="radio"){
                    cbf12.eq(i).removeAttr("disabled");
                }else if(cbf12.eq(i).attr("type")=="text"){
                    cbf12.eq(i).removeAttr("disabled");
                }else{
                }
            }
    })

    // 第一步保存
    $(".sub1").click(function(){
        // 检测赛选时间
        var jqnode1 = $(".titleTime")
        if(inputNull(jqnode1)){

        }else{
            return false;
        }
        // 检测一楼
        var jqnode2 = $(".cb1-f1")
        if(inputNull(jqnode2)){

        }else{
            return false;
        }
        // 检测二楼
        var jqnode3 = $(".cb1-f2")
        if(inputNull(jqnode3)){

        }else{
            return false;
        }
        // 检测三楼
        if($("input[name='bingshi0']:checked").length == 0){
            showTip("请选择既往病史和现病史", "error");
            $("input[name='bingshi0']").eq(0).focus();
            return false;
        }else{
            if($("input[name='bingshi0']:checked").val() == 1){
                if(inputNull3(".cb1-f3-body",".cb1-f3-body-item")){

                }else{
                    return false;
                }
            }else{
                console.log("既往病史和现病史为否，不检测3楼")
            }
        }
        console.log("第一步验证通过")
        v.sn = 2; // 前往第二步
    })

    // 第二步保存
    $(".sub2").click(function(){
        // 检测一楼
        if($("input[name='yongyao0']:checked").length == 0){
            showTip("用药史及现用药情况", "error");
            $("input[name='yongyao0']").eq(0).focus();
            return false;
        }else{
            if($("input[name='yongyao0']:checked").val() == 1){
                if(inputNull3(".cb2-f1-body",".cb2-f1-body-item")){
                    console.log("99999")
                }else{
                    return false;
                }
            }else{
                console.log("用药史及现用药情况否，不检测1楼")
            }
        }
        // 检测二楼
        if($("input[name='yongyao01']:checked").length == 0){
            showTip("是否对药物/食物/其他物质过敏", "error");
            $("input[name='yongyao01']").eq(0).focus();
            return false;
        }else{
            if($("input[name='yongyao01']:checked").val() == 1){
                if(inputNull3(".cb2-f2-body",".cb2-f2-body-item")){

                }else{
                    return false;
                }
            }else{
                console.log("是否对药物/食物/其他物质过敏否，不检测2楼");
            }
        }
        // 检测三楼
        var jqnode21 = $(".cb2-f3-body");
        if(inputNull(jqnode21)){

        }else{
            return false;
        }
        console.log("第二步验证通过");
        v.sn = 3;// 前往第三步
    })

    // 第三步
    $(".rea").val("").attr("disabled","disabled");
    $(".cb3-check").click(function(){
        if($(".cb3-check").attr("checked")=='checked'){
            $(".rea").removeAttr("disabled");
            $(".time1").val("").attr("disabled","disabled");
            var iaArr = $(".content3 input[type='radio']");
            for(var i=0;i<iaArr.length;i++){
                iaArr.eq(i).removeAttr("checked").attr("disabled","disabled");
            }
            v.cb3num11=0;
            v.cb3num12=0;
            v.cb3num13=0;
            v.cb3num14=0;
            v.cb3num15=0;
            v.cb3num16=0;
            v.cb3num17=0;
            v.cb3num21=0;
            v.cb3num22=0;
            v.cb3num23=0;
            v.cb3num24=0;
            v.cb3num25=0;
            v.cb3num26=0;
            v.cb3num27=0;
            v.cb3num31=0;
            v.cb3num32=0;
            v.cb3num33=0;
            v.cb3num34=0;
            v.cb3num35=0;
            v.cb3num36=0;
            v.cb3num37=0;
            v.cb3num38=0;
            v.cb3num39=0;
            v.cb3num310=0;
            v.cb3num311=0;
            v.cb3num312=0;
            v.cb3num313=0;
            v.cb3num314=0;
            v.cb3num315=0;
            v.cb3num316=0;
        }else{
            $(".time1").removeAttr("disabled");
            $(".rea").val("").attr("disabled","disabled");
            $(".content3 input[type='radio']").removeAttr("disabled");
        }
    })
    // 第三步保存
    $(".sub3").click(function(){
        if($(".cb3-check").attr("checked")=='checked'){
            if($(".rea").val()==""){
                showTip("请填写未评原因", "error");
            }else{
                v.sn = 4;// 前往第四步
            }
        }else{
            if($(".time1").val()==""){
                showTip("请填写评定时间", "error");
                return false;
            }else{
                var jqnode1 = $(".cb3-f1-body1")
                var jqnode2 = $(".cb3-f1-body2")
                var jqnode3 = $(".cb3-f1-body3")
                if(inputNull(jqnode1)&&inputNull(jqnode2)&&inputNull(jqnode3)){
                    v.sn = 4;// 前往第四步
                }else{
                    return false;
                }
            }  
        }
    })

    // 第四步
    $(".sub4").click(function(){
        var jqnode1 = $(".cb4-body1");
        var jqnode2 = $(".cb4-body2");
        if(inputNull(jqnode1)&&inputNull(jqnode2)){
            v.sn = 5;// 前往第五步
        }else{
            return false;
        }
    });

})


var v = new Vue({
    el: "#app",
    data: {
        sn:2,
        cb5:1,
        // 第三步数据
        cb3num11:0,
        cb3num12:0,
        cb3num13:0,
        cb3num14:0,
        cb3num15:0,
        cb3num16:0,
        cb3num17:0,
        cb3num21:0,
        cb3num22:0,
        cb3num23:0,
        cb3num24:0,
        cb3num25:0,
        cb3num26:0,
        cb3num27:0,
        cb3num31:0,
        cb3num32:0,
        cb3num33:0,
        cb3num34:0,
        cb3num35:0,
        cb3num36:0,
        cb3num37:0,
        cb3num38:0,
        cb3num39:0,
        cb3num310:0,
        cb3num311:0,
        cb3num312:0,
        cb3num313:0,
        cb3num314:0,
        cb3num315:0,
        cb3num316:0,
    },
    computed: {
        // 计算属性的 getter
        cb3num1: function () {
          return (this.cb3num11*1+this.cb3num12*1+this.cb3num13*1+this.cb3num14*1+this.cb3num15*1+this.cb3num16*1+this.cb3num17*1)
        },
        cb3num2: function () {
          return (this.cb3num21*1+this.cb3num22*1+this.cb3num23*1+this.cb3num24*1+this.cb3num25*1+this.cb3num26*1+this.cb3num27*1)
        },
        cb3num3: function () {
          return (this.cb3num31*1+this.cb3num32*1+this.cb3num33*1+this.cb3num34*1+this.cb3num35*1+this.cb3num36*1+this.cb3num37*1+this.cb3num38*1+this.cb3num39*1+this.cb3num310*1+this.cb3num311*1+this.cb3num312*1+this.cb3num313*1+this.cb3num314*1+this.cb3num315*1+this.cb3num316*1)
        },
        cb3numall: function () {
          return (this.cb3num1*1+this.cb3num2*1+this.cb3num3*1)
        },
    },
    created:function() {
    },
    mounted:function() {
    },
    methods: {
        snt:function(sign){
            this.sn = sign
        },
    }
})