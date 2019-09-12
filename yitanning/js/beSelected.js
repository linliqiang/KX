


if(localStorage.getItem("userFillAge")){
	if(localStorage.getItem("userFillAge")*1>=18&&localStorage.getItem("userFillAge")*1<=65){
		$("#beSelectedAgeOK").get(0).checked=true;
	}else{
		$("#beSelectedAgeNO").get(0).checked=true;
	}
}

$("#beSelected input[name='beSelectedRadio1']").eq(0).attr("disabled","disabled");
$("#beSelected input[name='beSelectedRadio1']").eq(1).attr("disabled","disabled");

console.log(localStorage.getItem("ajiaolv"))
console.log(localStorage.getItem("ayiyu"))

if(localStorage.getItem("ajiaolv")*1 >= 8 || localStorage.getItem("ayiyu")*1 >= 8){
	$("#beSelected input[name='beSelectedRadio2']").eq(0).get(0).checked=true
	// $("#beSelected input[name='beSelectedRadio2'][value='1']").attr("checked",'checked')
}else{
	$("#beSelected input[name='beSelectedRadio2']").eq(1).get(0).checked=true
	// $("#beSelected input[name='beSelectedRadio2'][value='0']").attr("checked",'checked')
}

$("#beSelected input[name='beSelectedRadio2']").eq(0).attr("disabled","disabled");
$("#beSelected input[name='beSelectedRadio2']").eq(1).attr("disabled","disabled");


function beSelectedSave1(){

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

	if(sign >= 4){
		showTip("符合入选标准", "success");
		$("#bg1").css("top","232px");
		localStorage.setItem("beSelectedIS","OK")
		plate1Nav(4);
	}else{
		showTip("不符合入选标准", "error");
		$("#bg1").css("top","232px");
		localStorage.setItem("beSelectedIS","NO")
		plate1Nav(4);
	}
}