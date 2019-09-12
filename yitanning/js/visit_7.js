


if(localStorage.getItem("visit_topli7") == "1"){

	$("#visit_7 input[name='visit7Radio1']").eq(0).get(0).checked=true;

	var visit7InputArr = $("#visit_7 input")

	for(var i=2;i<visit7InputArr.length;i++){
			if(visit7InputArr.eq(i).attr("type") == "text"){
				visit7InputArr.eq(i).val("")
				visit7InputArr.eq(i).attr("disabled","disabled");
			}else{
				visit7InputArr.eq(i).get(0).checked=false;
				visit7InputArr.eq(i).attr("disabled","disabled");
			}
		}

}else{

	$("#visit_7 input[name='visit7Radio1']").eq(1).get(0).checked=true;

}

$("#visit_7 input[name='visit7Radio1']").eq(0).attr("disabled","disabled");
$("#visit_7 input[name='visit7Radio1']").eq(1).attr("disabled","disabled");


function visit7Thing2(sign){

	if(sign == 1){

		$(".visit7t1").val("") 
		$(".visit7t1").attr("disabled","disabled");
	}else{

		$(".visit7t1").removeAttr("disabled");
	}	
}
function visit7Thing3(sign){
	if(sign == 1){
		$(".visit7t2").val("") 
		$(".visit7t2").attr("disabled","disabled");
	}else{
		$(".visit7t2").removeAttr("disabled");
	}	
}
function visit7Thing4(sign){
	if(sign == 1){
		$(".visit7t3").val("") 
		$(".visit7t3").attr("disabled","disabled");
	}else{
		$(".visit7t3").removeAttr("disabled");
	}	
}
function visit7Thing5(sign){
	if(sign == 1){
		$(".visit7t4").val("") 
		$(".visit7t4").attr("disabled","disabled");
	}else{
		$(".visit7t4").removeAttr("disabled");
	}	
}
function visit7Thing6(sign){
	if(sign == 1){
		$(".visit7t5").val("") 
		$(".visit7t5").attr("disabled","disabled");
	}else{
		$(".visit7t5").removeAttr("disabled");
	}	
}
function visit7Thing7(sign){
	if(sign == 1){
		$(".visit7t6").val("") 
		$(".visit7t6").attr("disabled","disabled");
	}else{
		$(".visit7t6").removeAttr("disabled");
	}	
}
function visit7Thing8(sign){
	if(sign == 1){
		$(".visit7t7").val("") 
		$(".visit7t7").attr("disabled","disabled");
	}else{
		$(".visit7t7").removeAttr("disabled");
	}	
}
function visit7Thing9(sign){
	if(sign == 1){
		$(".visit7t8").val("") 
		$(".visit7t8").attr("disabled","disabled");
	}else{
		$(".visit7t8").removeAttr("disabled");
	}	
}
