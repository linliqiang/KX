

// 计分
function visit3ZZF(){
    var visit3InputRadio = $("#visit_3 input[type=radio]:checked");
    var visit3Zongfen = 0;

    for(var i=0;i<visit3InputRadio.length;i++){
        
            visit3Zongfen = visit3Zongfen + visit3InputRadio.eq(i).val() * 1

    }

    $(".visit3ZF").val(visit3Zongfen)

}
    
$("#visit_3 input[type=radio]").click(function(){visit3ZZF()})
    


