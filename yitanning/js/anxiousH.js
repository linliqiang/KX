


function anxiousHSave1(){
	var inp=$("#anxious input[type=radio]")
    var inptext3 = $("#anxious input[type=text]")
    var sign = true

    //验证前面三个输入框是否为空
    for(var i=0;i<3;i++){
        console.log("验证前3")
        if(inptext3.eq(i).val() == ""){
            console.log("控控")
            showTip("请输入"+inptext3.eq(i).attr("alt"), "error");
            inptext3.eq(i).get(0).focus()
            return false;
        }
        if(i == 1){

            var fillName = new RegExp(/^[A-Z]{4}$/);
            
            if(fillName.test(inptext3.eq(i).get(0).value)){
            }else{
                showTip("请输入正确的姓名缩写", "error");
                inp.eq(i).get(0).focus()
                return false;
            }

        }
    }
    
    // 判断是否有没有选择的题
    for(var i=0;i<inp.length;i++){
		if( $("input[name="+inp.eq(i).attr("name")+"]:checked").length == 0 ){
    		showTip("请选择第"+inp.eq(i).get(0).alt+"题", "error");
    		inp.eq(i).get(0).focus()
    		sign = false
    		break;
		}
    }
    
	if(sign){
		showTip("保存成功", "success");
        $("#bg1").css("top","174px");
        plate1Nav(3);
	}

}


//计分,保存被选中的单选框
function anxiousHCalculation(){

    var jiaolv = 0//焦虑总分
    var yiyu = 0//抑郁总分

    var inp2=$("#anxious input[type=radio]:checked")
    for(var i=0;i<inp2.length;i++){
        
        if(inp2.eq(i).attr("al") == "A"){
            jiaolv = jiaolv + inp2.eq(i).val() * 1
        }else{
            yiyu = yiyu + inp2.eq(i).val() * 1
        }

    }

    $(".jiaolvAll").val(jiaolv)
    $(".yiyuAll").val(yiyu)

    localStorage.setItem("ajiaolv",jiaolv)
    localStorage.setItem("ayiyu",yiyu)

}

$("#anxious input[type=radio]").click(function(){anxiousHCalculation()})