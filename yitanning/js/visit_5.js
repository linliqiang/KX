

// 1：没有服用
// 2：服用
// 3：服用但没有调整剂量
// 4：服用并调整剂量
if(localStorage.getItem("visit_topli5") == "1"){

	$("#visit_5 input[name='visit5Radio1']").eq(0).get(0).checked=true;

	var visit5InputArr = $("#visit_5 input")

	for(var i=2;i<visit5InputArr.length;i++){
			if(visit5InputArr.eq(i).attr("type") == "text"){
				visit5InputArr.eq(i).val("")
				visit5InputArr.eq(i).attr("disabled","disabled");
			}else{
				visit5InputArr.eq(i).get(0).checked=false;
				visit5InputArr.eq(i).attr("disabled","disabled");

			}
		}

}else if(localStorage.getItem("visit_topli5") == "2"){
	$("#visit_5 input[name='visit5Radio1']").eq(1).get(0).checked=true;
}else if(localStorage.getItem("visit_topli5") == "3"){

	$("#visit_5 input[name='visit5Radio1']").eq(1).get(0).checked=true;

	$(".visit_5 input[name='visit5Radio2").eq(0).get(0).checked=true
	$(".visit_5 input[name='visit5Radio2").eq(0).attr("disabled","disabled");
	$(".visit_5 input[name='visit5Radio2").eq(1).attr("disabled","disabled");
	$("#visit5t1").attr("disabled","disabled");

	// $(".visit_5 input[name='visit5Radio3").eq(0).get(0).checked=true
	// $(".visit_5 input[name='visit5Radio3").eq(0).attr("disabled","disabled");
	// $(".visit_5 input[name='visit5Radio3").eq(1).attr("disabled","disabled");
	// $("#visit5t2").attr("disabled","disabled");

	// $(".visit_5 input[name='visit5Radio4").eq(0).get(0).checked=true
	// $(".visit_5 input[name='visit5Radio4").eq(0).attr("disabled","disabled");
	// $(".visit_5 input[name='visit5Radio4").eq(1).attr("disabled","disabled");
	// $("#visit5t3").attr("disabled","disabled");

	// $(".visit_5 input[name='visit5Radio5").eq(0).get(0).checked=true
	// $(".visit_5 input[name='visit5Radio5").eq(0).attr("disabled","disabled");
	// $(".visit_5 input[name='visit5Radio5").eq(1).attr("disabled","disabled");
	// $("#visit5t4").attr("disabled","disabled");

}else{

	$("#visit_5 input[name='visit5Radio1']").eq(1).get(0).checked=true;

	$(".visit_5 input[name='visit5Radio2").eq(1).get(0).checked=true
	$(".visit_5 input[name='visit5Radio2").eq(0).attr("disabled","disabled");
	$(".visit_5 input[name='visit5Radio2").eq(1).attr("disabled","disabled");

	// $(".visit_5 input[name='visit5Radio3").eq(1).get(0).checked=true
	// $(".visit_5 input[name='visit5Radio3").eq(0).attr("disabled","disabled");
	// $(".visit_5 input[name='visit5Radio3").eq(1).attr("disabled","disabled");

	// $(".visit_5 input[name='visit5Radio4").eq(1).get(0).checked=true
	// $(".visit_5 input[name='visit5Radio4").eq(0).attr("disabled","disabled");
	// $(".visit_5 input[name='visit5Radio4").eq(1).attr("disabled","disabled");

	// $(".visit_5 input[name='visit5Radio5").eq(1).get(0).checked=true
	// $(".visit_5 input[name='visit5Radio5").eq(0).attr("disabled","disabled");
	// $(".visit_5 input[name='visit5Radio5").eq(1).attr("disabled","disabled");
	
}

$("#visit_5 input[name='visit5Radio1']").eq(0).attr("disabled","disabled");
$("#visit_5 input[name='visit5Radio1']").eq(1).attr("disabled","disabled");

function visit5Thing2(sign){
	if(sign == 1){
		$("#visit5t1").val("") 
		$("#visit5t1").attr("disabled","disabled");
	}else{
		$("#visit5t1").removeAttr("disabled");
	}	
}
function visit5Thing3(sign){
	if(sign == 1){
		$("#visit5t2").val("") 
		$("#visit5t2").attr("disabled","disabled");
	}else{
		$("#visit5t2").removeAttr("disabled");
	}	
}
function visit5Thing4(sign){
	if(sign == 1){
		$("#visit5t3").val("") 
		$("#visit5t3").attr("disabled","disabled");
	}else{
		$("#visit5t3").removeAttr("disabled");
	}	
}
function visit5Thing5(sign){
	if(sign == 1){
		$("#visit5t4").val("") 
		$("#visit5t4").attr("disabled","disabled");
	}else{
		$("#visit5t4").removeAttr("disabled");
	}	
}
