

// 1：没有服用
// 2：服用
// 3：服用但没有调整剂量
// 4：服用并调整剂量
if(localStorage.getItem("visit_topli6") == "1"){

	$("#visit_6 input[name='visit6Radio1']").eq(0).get(0).checked=true;

	var visit6InputArr = $("#visit_6 input")

	for(var i=2;i<visit6InputArr.length;i++){
			if(visit6InputArr.eq(i).attr("type") == "text"){
				visit6InputArr.eq(i).val("")
				visit6InputArr.eq(i).attr("disabled","disabled");
			}else{
				visit6InputArr.eq(i).get(0).checked=false;
				visit6InputArr.eq(i).attr("disabled","disabled");
			}
		}

}else if(localStorage.getItem("visit_topli6") == "2"){
	$("#visit_6 input[name='visit6Radio1']").eq(1).get(0).checked=true;
}else if(localStorage.getItem("visit_topli6") == "3"){

	$("#visit_6 input[name='visit6Radio1']").eq(1).get(0).checked=true;

	$(".visit_6 input[name='visit6Radio2").eq(0).get(0).checked=true
	$(".visit_6 input[name='visit6Radio2").eq(0).attr("disabled","disabled");
	$(".visit_6 input[name='visit6Radio2").eq(1).attr("disabled","disabled");
	$("#visit6t1").attr("disabled","disabled");

	// $(".visit_6 input[name='visit6Radio3").eq(0).get(0).checked=true
	// $(".visit_6 input[name='visit6Radio3").eq(0).attr("disabled","disabled");
	// $(".visit_6 input[name='visit6Radio3").eq(1).attr("disabled","disabled");
	// $("#visit6t2").attr("disabled","disabled");

	// $(".visit_6 input[name='visit6Radio4").eq(0).get(0).checked=true
	// $(".visit_6 input[name='visit6Radio4").eq(0).attr("disabled","disabled");
	// $(".visit_6 input[name='visit6Radio4").eq(1).attr("disabled","disabled");
	// $("#visit6t3").attr("disabled","disabled");

	// $(".visit_6 input[name='visit6Radio5").eq(0).get(0).checked=true
	// $(".visit_6 input[name='visit6Radio5").eq(0).attr("disabled","disabled");
	// $(".visit_6 input[name='visit6Radio5").eq(1).attr("disabled","disabled");
	// $("#visit6t4").attr("disabled","disabled");

}
else{

	$("#visit_6 input[name='visit6Radio1']").eq(1).get(0).checked=true;

	$(".visit_6 input[name='visit6Radio2").eq(1).get(0).checked=true
	$(".visit_6 input[name='visit6Radio2").eq(0).attr("disabled","disabled");
	$(".visit_6 input[name='visit6Radio2").eq(1).attr("disabled","disabled");

	// $(".visit_6 input[name='visit6Radio3").eq(1).get(0).checked=true
	// $(".visit_6 input[name='visit6Radio3").eq(0).attr("disabled","disabled");
	// $(".visit_6 input[name='visit6Radio3").eq(1).attr("disabled","disabled");

	// $(".visit_6 input[name='visit6Radio4").eq(1).get(0).checked=true
	// $(".visit_6 input[name='visit6Radio4").eq(0).attr("disabled","disabled");
	// $(".visit_6 input[name='visit6Radio4").eq(1).attr("disabled","disabled");

	// $(".visit_6 input[name='visit6Radio5").eq(1).get(0).checked=true
	// $(".visit_6 input[name='visit6Radio5").eq(0).attr("disabled","disabled");
	// $(".visit_6 input[name='visit6Radio5").eq(1).attr("disabled","disabled");
	
}

$("#visit_6 input[name='visit6Radio1']").eq(0).attr("disabled","disabled");
$("#visit_6 input[name='visit6Radio1']").eq(1).attr("disabled","disabled");


function visit6Thing2(sign){
	if(sign == 1){
		$("#visit6t1").val("") 
		$("#visit6t1").attr("disabled","disabled");
	}else{
		$("#visit6t1").removeAttr("disabled");
	}	
}
function visit6Thing3(sign){
	if(sign == 1){
		$("#visit6t2").val("") 
		$("#visit6t2").attr("disabled","disabled");
	}else{
		$("#visit6t2").removeAttr("disabled");
	}	
}
function visit6Thing4(sign){
	if(sign == 1){
		$("#visit6t3").val("") 
		$("#visit6t3").attr("disabled","disabled");
	}else{
		$("#visit6t3").removeAttr("disabled");
	}	
}
function visit6Thing5(sign){
	if(sign == 1){
		$("#visit6t4").val("") 
		$("#visit6t4").attr("disabled","disabled");
	}else{
		$("#visit6t4").removeAttr("disabled");
	}	
}
