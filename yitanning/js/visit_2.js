

//计分,保存被选中的单选框
function visit2Calculation(){
	
    var jiaolv = 0//焦虑总分
    var yiyu = 0//抑郁总分

    var inp2=$("#visit_2 input[type=radio]:checked")
    for(var i=0;i<inp2.length;i++){
        
        if(inp2.eq(i).attr("al") == "A"){
            jiaolv = jiaolv + inp2.eq(i).val() * 1
        }else{
            yiyu = yiyu + inp2.eq(i).val() * 1
        }

    }

    $(".visit2jiaolvAll").val(jiaolv)
    $(".visit2yiyuAll").val(yiyu)

  

}

$("#visit_2 input[type=radio]").click(function(){visit2Calculation()})



