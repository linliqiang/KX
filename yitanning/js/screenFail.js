


$("#screenFailRadio1").get(0).checked=true;
function screenFailThing1(){
	if($("#sFCheckbox").is(':checked')){
		$("#sFTextarea").removeAttr("disabled");

	}else{
		$("#sFTextarea").val("")
		$("#sFTextarea").attr("disabled","disabled");
	}
}

function screenFailSave(){
	if($("#sFCheckbox").is(':checked') && $("#sFTextarea").val() == ""){
		showTip("请填写其他失败原因", "error");
		$("#sFTextarea").get(0).focus()
		return false;
	}else{
		plate1Nav(1)
	}
}
