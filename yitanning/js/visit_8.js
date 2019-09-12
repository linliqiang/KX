

if(localStorage.getItem("visit_topli8") == "1"){

	$("#visit_8 input[name='visit8Radio1']").eq(0).get(0).checked=true;

	var visit8InputArr = $("#visit_8 input")

	for(var i=2;i<visit8InputArr.length;i++){
			if(visit8InputArr.eq(i).attr("type") == "text"){
				visit8InputArr.eq(i).val("")
				visit8InputArr.eq(i).attr("disabled","disabled");
			}else{
				visit8InputArr.eq(i).get(0).checked=false;
				visit8InputArr.eq(i).attr("disabled","disabled");
			}
		}

}else{
	$("#visit_8 input[name='visit8Radio1']").eq(1).get(0).checked=true;
}

$("#visit_8 input[name='visit8Radio1']").eq(0).attr("disabled","disabled");
$("#visit_8 input[name='visit8Radio1']").eq(1).attr("disabled","disabled");


function visit8Thing2(sign){

	if(sign == 1){

		$(".visit8t1").val("") 
		$(".visit8t1").attr("disabled","disabled");
	}else{

		$(".visit8t1").removeAttr("disabled");
	}	
}
function visit8Thing3(sign){
	if(sign == 1){
		$(".visit8t2").val("") 
		$(".visit8t2").attr("disabled","disabled");
	}else{
		$(".visit8t2").removeAttr("disabled");
	}	
}
function visit8Thing4(sign){
	if(sign == 1){
		$(".visit8t3").val("") 
		$(".visit8t3").attr("disabled","disabled");
	}else{
		$(".visit8t3").removeAttr("disabled");
	}	
}
function visit8Thing5(sign){
	if(sign == 1){
		$(".visit8t4").val("") 
		$(".visit8t4").attr("disabled","disabled");
	}else{
		$(".visit8t4").removeAttr("disabled");
	}	
}
