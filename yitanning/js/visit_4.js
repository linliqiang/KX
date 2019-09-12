

// 计分
function visit4ZZF(){
    var visit4InputRadio = $("#visit_4 input[type=radio]:checked");
    var visit4Zongfen = 0;

    for(var i=0;i<visit4InputRadio.length;i++){
        
            visit4Zongfen = visit4Zongfen + visit4InputRadio.eq(i).val() * 1

    }

    $(".visit4ZF").val(visit4Zongfen)

}
    
$("#visit_4 input[type=radio]").click(function(){visit4ZZF()})
    


