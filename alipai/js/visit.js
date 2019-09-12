
$(function(){
    // 第一步
    $(".tg").val("").attr("disabled","disabled");
    $(".cb-11").click(function(){
        if($(this).attr("checked")=='checked'){
            $(".tg").val("").removeAttr("disabled");
            var cbf12 = $("input[fi='fi']")
            for(var i=0;i<cbf12.length;i++){
                if(cbf12.eq(i).val()==""){
                    cbf12.eq(i).val("").attr("disabled","disabled");
                }
            }
        }else{
            $(".tg").val("").attr("disabled","disabled");
            var cbf12 = $("input[fi='fi']")
            for(var i=0;i<cbf12.length;i++){
                if(cbf12.eq(i).val()==""){
                    cbf12.eq(i).val("").removeAttr("disabled");
                }
            }
        }
    })

    $(".rc11").click(function(){
        var crarr1 = $(".c1-f3-body input");
        for(var i=0;i<crarr1.length;i++){
            if(crarr1.eq(i).attr("type")=="radio"){
                crarr1.eq(i).attr("disabled","disabled").get(0).checked=false;
            }else if(crarr1.eq(i).attr("type")=="text"){
                crarr1.eq(i).val("").attr("disabled","disabled");
            }else{
            }
        }
    })
    $(".rc12").click(function(){
        var crarr2 = $(".c1-f3-body input");
        for(var i=0;i<crarr2.length;i++){
            if(crarr2.eq(i).attr("type")=="radio"){
                crarr2.eq(i).removeAttr("disabled");
            }else if(crarr2.eq(i).attr("type")=="text"){
                crarr2.eq(i).removeAttr("disabled");
            }else{
            }
        }
    })
    $(".rc21").click(function(){
        var crarr21 = $(".c1-f5 input");
        for(var i=0;i<crarr21.length;i++){
            if(crarr21.eq(i).attr("type")=="radio"){
                crarr21.eq(i).attr("disabled","disabled").get(0).checked=false;
            }else if(crarr21.eq(i).attr("type")=="text"){
                crarr21.eq(i).val("").attr("disabled","disabled");
            }else{
            }
        }
    })
    $(".rc22").click(function(){
        var crarr22 = $(".c1-f5 input");
        for(var i=0;i<crarr22.length;i++){
            if(crarr22.eq(i).attr("type")=="radio"){
                crarr22.eq(i).removeAttr("disabled");
            }else if(crarr22.eq(i).attr("type")=="text"){
                crarr22.eq(i).removeAttr("disabled");
            }else{
            }
        }
    })
    $(".rc31").click(function(){
        var crarr21 = $(".c1-f6 input");
        for(var i=0;i<crarr21.length;i++){
            if(crarr21.eq(i).attr("type")=="radio"){
                crarr21.eq(i).attr("disabled","disabled").get(0).checked=false;
            }else if(crarr21.eq(i).attr("type")=="text"){
                crarr21.eq(i).val("").attr("disabled","disabled");
            }else{
            }
        }
    })
    $(".rc32").click(function(){
        var crarr22 = $(".c1-f6 input");
        for(var i=0;i<crarr22.length;i++){
            if(crarr22.eq(i).attr("type")=="radio"){
                crarr22.eq(i).removeAttr("disabled");
            }else if(crarr22.eq(i).attr("type")=="text"){
                crarr22.eq(i).removeAttr("disabled");
            }else{
            }
        }
    })
    $(".sub1").click(function(){
        if($(".title-time input").val() == "" ){
            showTip("请选择访视时间", "error");
            return false;
        }else{ 
        }
        // 二楼
        if($(".cb-11").attr("checked")=='checked'){
            if($(".tg").val()==""){
                showTip("请填写未检查原因", "error");
                return false;
            }
        }else{
            var cbf12 = $("input[fi='fi']")
            for(var i=0;i<cbf12.length;i++){
                if(cbf12.eq(i).val()==""){
                    showTip("请填写"+cbf12.eq(i).attr("alt"), "error");
                    return false;
                }
            }
        }
        // 三楼
        if($("input[name='c1-r1']:checked").length == 0){
            showTip("请选择是否有合并用药", "error");
            return false;
        }
        if($("input[name='c1-r1']:checked").val() == "否"){

        }else{
            if(inputNull3(".c1-f3-body",".c1-f3-body-item")){

            }else{
                return false;
            }   
        }
        //四楼
        if($("input[name='c5-r1']:checked").length == 0){
            showTip("请选择是否有合并用药", "error");
            return false;
        }
        if($("input[name='c5-r1']:checked").val() == "无"){

        }else{
            if(inputNull3(".c1-f5",".c1-f5-li2")){

            }else{
                return false;
            }   
        }
        //5楼
        if($("input[name='cc1-1']:checked").length == 0){
            showTip("请选择是否有非药物治疗", "error");
            return false;
        }
        if($("input[name='cc1-1']:checked").val() == "无"){

        }else{
            if(inputNull3(".c1-f6",".c1-f6-item")){

            }else{
                return false;
            }   
        }
        v.sn = 2;//前往第二步
    })

    // 第二步
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
    $(".sub2").click(function(){
        if($(".cb3-check").attr("checked")=='checked'){
            if($(".rea").val()==""){
                showTip("请填写未评原因", "error");
                return false;
            }else{
                v.sn = 3;//前往第三步
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
                    console.log("第三步通过");
                    v.sn = 3;
                }else{
                    return false;
                }
            }  
        }
    })
    // 第三步
    $(".kb1t").val("").attr("disabled","disabled");
    $(".kb1").click(function(){
        if($(".kb1").attr("checked")=='checked'){
            $(".kb1t").removeAttr("disabled");
            $(".c2time").val("").attr("disabled","disabled");
            var c2ir = $(".c2-f3 input");
            for(var i=0;i<c2ir.length;i++){
                c2ir.eq(i).attr("disabled","disabled");
                c2ir.eq(i).get(0).checked=false;
            }
        }else{
           $(".kb1t").val("").attr("disabled","disabled");
            $(".c2time").removeAttr("disabled");
            var c2ir = $(".c2-f3 input");
            for(var i=0;i<c2ir.length;i++){
                c2ir.eq(i).removeAttr("disabled");
            }
        }
    })
    $(".sub3").click(function(){
        if($(".kb1").attr("checked")=='checked'){
            if($(".kb1t").val()==''){
                showTip("请填写未评原因", "error");
                $(".kb1t").focus();
                return false;
            }else{
                v.sn = 4;//前往第四步
            }
        }else{
            if($(".c2time").val()==""){
                showTip("请填写评定日期", "error");
                $(".c2time").focus();
                return false;
            }else{
                if($("input[name='rr1']:checked").length == 0){
                    showTip("请填写评定情况", "error");
                    return false;
                }else{
                    v.sn = 4;//前往第四步
                }
            }
        }
    })
    // 第四步
    $(".kb2t").val("").attr("disabled","disabled");
    $(".kb2").click(function(){
        if($(".kb2").attr("checked")=='checked'){
            $(".kb2t").removeAttr("disabled");
            $(".c2time").val("").attr("disabled","disabled");
            var c2ir = $(".c3-f3 input");
            for(var i=0;i<c2ir.length;i++){
                c2ir.eq(i).attr("disabled","disabled");
                c2ir.eq(i).get(0).checked=false;
            }
        }else{
           $(".kb2t").val("").attr("disabled","disabled");
            $(".c2time").removeAttr("disabled");
            var c2ir = $(".c3-f3 input");
            for(var i=0;i<c2ir.length;i++){
                c2ir.eq(i).removeAttr("disabled");
            }
        }
    })
    $(".sub4").click(function(){
        if($(".kb2").attr("checked")=='checked'){
            if($(".kb2t").val()==''){
                showTip("请填写未评原因", "error");
                $(".kb2t").focus();
                return false;
            }else{
                v.sn = 5;//前往第五步
            } 
        }else{
            if($(".c4time").val()==""){
                showTip("请填写评定日期", "error");
                $(".c4time").focus();
                return false;
            }else{
                if($("input[name='rr2']:checked").length == 0){
                    showTip("请填写评定情况", "error");
                    return false;
                }else{
                    console.log("第4步通过");
                    v.sn = 5;
                }
            }
        }
    })
    // 第五步
    $(".cb5-checkt").val("").attr("disabled","disabled");
    $(".cb5-check").click(function(){
        if($(".cb5-check").attr("checked")=='checked'){
            $(".cb5-checkt").removeAttr("disabled");
            $(".cb5-checkti").val("").attr("disabled","disabled");
            var c2ir = $(".cb5-f3 input");
            for(var i=0;i<c2ir.length;i++){
                c2ir.eq(i).attr("disabled","disabled");
                c2ir.eq(i).get(0).checked=false;
            }
        }else{
           $(".cb5-checkt").val("").attr("disabled","disabled");
            $(".cb5-checkti").removeAttr("disabled");
            var c2ir = $(".cb5-f3 input");
            for(var i=0;i<c2ir.length;i++){
                c2ir.eq(i).removeAttr("disabled");
            }
        }
    })

    $(".cb5-f3-right input[type='checkbox']").click(function(){
        if($(this).attr("checked")=='checked'){
            $(this).parent("span").siblings("span").find("input[type='radio']").attr("disabled","disabled").get(0).checked=false;
        }else{ 
            $(this).parent("span").siblings("span").find("input[type='radio']").removeAttr("disabled");
        }
    })

    $(".sub5").click(function(){
        if($(".cb5-check").attr("checked")=='checked'){
            if($(".cb5-checkt").val()==''){
                showTip("请填写未评原因", "error");
                $(".cb5-checkt").focus();
                return false;
            }else{
                v.sn = 6;//前往第六步
            } 
        }else{
            if($(".cb5-checkti").val()==""){
                showTip("请填写评定日期", "error");
                $(".cb5-checkti").focus();
                return false;
            }else{
                var cfrl = $(".cb5-f3-right li");
                for(var i=0;i<cfrl.length;i++){
                    if( cfrl.eq(i).find("input[type='checkbox']").attr("checked")=='checked' ){
                        continue;
                    }else{
                        if(cfrl.eq(i).find("input[type='radio']:checked").length==0){
                            showTip("请选择"+cfrl.eq(i).find("input[type='radio']").attr("alt"), "error");
                            cfrl.eq(i).find("input[type='radio']").focus();
                            return false;
                        }
                    }
                }
                v.sn = 6;//前往第六步
            }
        }
    })
    // 第六步
    $(".sub6").click(function(){
        var c6 = $(".content6");
        if(inputNull(c6)){
            v.sn = 7;//前往第七步
        }else{
            return false;
        }
    })

    // 第七步
    $("#yongyao01").click(function(){
        var c7arr1 = $(".c7-f2 input");
        for(var i=0;i<c7arr1.length;i++){
            if(c7arr1.eq(i).attr("type")=="radio"){
                c7arr1.eq(i).attr("disabled","disabled").get(0).checked=false;
            }else if(c7arr1.eq(i).attr("type")=="text"){
                c7arr1.eq(i).attr("disabled","disabled").val("");
            }else{}
        }
        var c7arr2 = $(".c7-f2 textarea");
        for(var i=0;i<c7arr2.length;i++){
            c7arr2.eq(i).attr("disabled","disabled").val("").get(0).checked=false;
        }
    })
    $("#yongyao02").click(function(){
        var c7arr1 = $(".c7-f2 input");
        for(var i=0;i<c7arr1.length;i++){
            if(c7arr1.eq(i).attr("type")=="radio"){
                c7arr1.eq(i).removeAttr("disabled");
            }else if(c7arr1.eq(i).attr("type")=="text"){
                c7arr1.eq(i).removeAttr("disabled");
            }else{}
        }
        var c7arr2 = $(".c7-f2 textarea");
        for(var i=0;i<c7arr2.length;i++){
            c7arr2.eq(i).removeAttr("disabled");
        }
    })
    $(".sub7").click(function(){
        if($("input[name='yongyao0']:checked").length == 0){
            showTip("请选择是否发生不良事件", "error");
            return false;
        }
        if($("input[name='yongyao0']:checked").val() == 0){
            v.sn = 8;//前往第八步
        }else{
            if(inputNull3(".c7-f2",".c7-f2-li2")){
            v.sn = 8;//前往第八步
            }else{
                return false;
            }
        }
    })

    $(".rad8-1-1").click(function(){
        $(".inp8-1").removeAttr("disabled");
        $(".inp8-2").val("").attr("disabled","disabled");
        var c8arr1 = $(".c8-f3 input");
        for(var i=0;i<c8arr1.length;i++){
            if(c8arr1.eq(i).attr("type")=="radio"){
                c8arr1.eq(i).attr("disabled","disabled").get(0).checked=false;
            }else if(c8arr1.eq(i).attr("type")=="text"){
                c8arr1.eq(i).attr("disabled","disabled").val("");
            }else{}
        }

    })
    $(".rad8-1-2").click(function(){
        $(".inp8-2").removeAttr("disabled");
        $(".inp8-1").val("").attr("disabled","disabled");
        var c8arr1 = $(".c8-f3 input");
        for(var i=0;i<c8arr1.length;i++){
            if(c8arr1.eq(i).attr("type")=="radio"){
                c8arr1.eq(i).removeAttr("disabled");
            }else if(c8arr1.eq(i).attr("type")=="text"){
                c8arr1.eq(i).removeAttr("disabled");
            }else{}
        }
    })
    $(".c8-f3 input[type='radio']").click(function(){
        $(this).parent().find("input[type='text']").removeAttr("disabled");
        $(this).parent().siblings("li").find("input[type='text']").attr("disabled","disabled").val("");
    })
    // 第八步
    $(".sub8").click(function(){
        if($("input[name='8-1']:checked").length==0){
            showTip("请选择入组患者是否完成研究", "error"); 
            $("input[name='8-1']").focus();
            return false;
        }
        if($("input[name='8-1']:checked").val()=="是"){
            if($(".inp8-1").val()==""){
                showTip("请选择入组患者完成研究日期", "error"); 
                $(".inp8-1").focus();
                return false;
            }
        }else{
            if($(".inp8-2").val()==""){
                showTip("请选择入组患者退出研究日期", "error"); 
                $(".inp8-2").focus();
                return false;
            }else{
                if($("input[name='8-2']:checked").length == 0){
                    showTip("请选择入组患者退出研究原因", "error"); 
                    $(".input[name='8-2']").focus();
                    return false;
                }else{
                    var rab = $(".c8-f3 input[type='radio']:checked").siblings("input[type='text']");
                    for(var i=0;i<rab.length;i++){
                        if(rab.eq(i).val()==""){
                            showTip("请输入"+rab.eq(i).attr("alt"), "error"); 
                            rab.eq(i).focus();
                            return false;
                        }
                    }
                }
            }
        }
        console.log("8通过，大结局")
    })
})

var v = new Vue({
    el: "#app",
    data: {
        sn:1,
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