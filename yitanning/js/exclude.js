


function excludeSave1(){
	var inp = $("input[type=radio]")
	for(var i=0;i<inp.length-2;i++){
		if($("input[name="+inp.eq(i).attr("name")+"]:checked").length == 0){
			var str1 = inp.eq(i).get(0).alt
			showTip("请选择"+str1, "error");
			inp.eq(i).get(0).focus();
			return false;
		}
	}
	var inp = $("input[type=radio]:checked")
	var sign = 0;
	for(var i=0;i<inp.length;i++){
		if(inp.eq(i).val() * 1){
			sign = sign + inp.eq(i).val() * 1;
		}
	}
	console.log(sign)
	if(sign <= 0){
		showTip("不符合排除标准", "success");
		$("#bg1").css("top","290px");
		localStorage.setItem("excludeIS","OK")
		plate1Nav(5);
	}else{
		showTip("符合排除标准", "error");
		$("#bg1").css("top","290px");
		localStorage.setItem("excludeIS","NO")
		plate1Nav(5);
	}
}

function dTEXT(){
	var inp = $("input[type=radio][name='excludeRadio12']:checked").val()
	if(inp == 1){
		$("#doctorTEXT").attr("disabled",false)
	}else{
		$("#doctorTEXT").val("")
		$("#doctorTEXT").attr("disabled",true)
	}
}