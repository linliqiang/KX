


// 第一大板块左侧导航事件
function plate1Nav(sign){

	// 本地存储用户填写了第几步
	localStorage.setItem("userChooise",sign)

	var navStr = '';
	for(var i=1;i<6;i++){
		navStr = "#plate1Nav"+i;
		if(sign == i){
			$(navStr).css("background-color","pink");
			$(navStr).css("border","0px");
			$(navStr).css({ 'background': "linear-gradient(to bottom, rgb(31,89,228), rgb(40,146,242))" });
			$(navStr).css("color","#ffffff");
		}else if(sign > i){
			$(navStr).css("background","#ffffff");
			$(navStr).css("border","1px solid rgb(42,156,244)");
			$(navStr).css("color","rgb(19,147,245)");
		}else if(sign < i){
			$(navStr).css("background","rgb(238,238,238)");
			$(navStr).css("border","0px");
			$(navStr).css("color","rgb(153,153,153)");
		}
	}
	if(sign == 1){
		$("#plate1body").load("fillin.html")

	}else if(sign == 2){
		$("#plate1body").load("anxiousH.html")
	}else if(sign == 3){
		$("#plate1body").load("beSelected.html")
	}
	else if(sign == 4){
		$("#plate1body").load("exclude.html")
	}
	else{
		var excludeISstr = localStorage.getItem("excludeIS")
		var beSelectedISstr = localStorage.getItem("beSelectedIS")
		if(excludeISstr == "OK" && beSelectedISstr == "OK"){
			$("#plate1body").load("screenSuccess.html")
		}else{
			$("#plate1body").load("screenFail.html")
		}
		
	}
}

 
 
 
//加载板块-如果本地有保存则加载，如果没有则默认加载第一板块
if(localStorage.getItem("userChooise")){
	plate1Nav(localStorage.getItem("userChooise") * 1);
	var bg1top = localStorage.getItem("userChooise") * 1
	$("#bg1").css("top",bg1top * 58 + "px");
}else{
	plate1Nav(1)
}



function fillinSave(){

	var inp=$("input")

    var inpValue=[]
    var sign = true
    for(var i=0;i<inp.length;i++){

    	
    	// 单选框判断
    	if(inp.eq(i).attr("type") == "radio"){

    		// 一组单选框一个都没有选择
    		if( $("input[name="+inp.eq(i).attr("name")+"]:checked").length == 0 ){
	    		showTip("请选择"+inp.eq(i).get(0).alt, "error");
	    		inp.eq(i).get(0).focus()
	    		sign = false
	    		break;
    		}
    		// 一组单选框被选中一个
    		if( $("input[name="+inp.eq(i).attr("name")+"]:checked").length == 1 ){
    			console.log("一组单选框被选中一个")
    			// 被选中第一个，那么跳几次循环，这里需要用原声，jquery不能实现
    			if( document.getElementsByName(inp.eq(i).attr("name"))[0].checked == true ){
    				if( document.getElementsByName(inp.eq(i).attr("name"))[0].getAttribute("ro") == 3 ){
    					i = i+3;
    					continue;
    				}
    				if( document.getElementsByName(inp.eq(i).attr("name"))[0].getAttribute("ro") == 2 ){
    					console.log(document.getElementsByName(inp.eq(i).attr("name"))[0].getAttribute("ro"))
    					i = i+2;
    					continue;
    				}
    				if( document.getElementsByName(inp.eq(i).attr("name"))[0].getAttribute("ro") == 1 ){
    					i = i+1;
    					continue;
    				}
    				if( document.getElementsByName(inp.eq(i).attr("name"))[0].getAttribute("ro") == 6 ){
    					i = i+6;
    					continue;
    				}
    			}
    			//被选中第二个
    			if( document.getElementsByName(inp.eq(i).attr("name"))[1].checked == true ){
    				if( document.getElementsByName(inp.eq(i).attr("name"))[1].getAttribute("ro") == 2 ){
    					i = i+3;
    					continue;
    				}
    			}
    		}	
    	}
    	// 文本框判断
    	if(inp.eq(i).attr("type") == "text"&&inp.eq(i).get(0).value == ""){
    		showTip("请输入"+inp.eq(i).get(0).alt, "error");
    		inp.eq(i).get(0).focus()
    		sign = false
    		break;
    	}
    	// 判断年龄，符合则保存年龄
    	if(inp.eq(i).attr("type") == "text"&&inp.eq(i).get(0).alt == "年龄"&&inp.eq(i).get(0).value != ""){
    		var fillAgeReg = new RegExp(/^(?:[1-9][0-9]?|1[01][0-9]|120)$/);
			
			if(fillAgeReg.test(inp.eq(i).get(0).value)){
				localStorage.setItem("userFillAge",inp.eq(i).get(0).value)
			}else{
				localStorage.setItem("userFillAge",0)
				showTip("请输入正确年龄", "error");
	    		inp.eq(i).get(0).focus()
	    		sign = false
	    		break;
			}

    	}
    	// 判断姓名缩写是否符合正则
    	if(inp.eq(i).attr("type") == "text"&&inp.eq(i).get(0).alt == "患者姓名缩写"&&inp.eq(i).get(0).value != ""){

    		var fillName = new RegExp(/^[A-Z]{4}$/);
			
			if(fillName.test(inp.eq(i).get(0).value)){

			}else{
				// localStorage.setItem("userFillAge",0)
				showTip("请输入正确的姓名缩写", "error");
	    		inp.eq(i).get(0).focus()
	    		sign = false
	    		break;
			}
    	}
    }

	if(sign){
		showTip("保存成功", "success");
		$("#bg1").css("top","116px");
		plate1Nav(2);
	}
}

// 第二板块
// 第二大板块左侧导航事件
function plate2Nav(sign){

	var navStr = '';
	for(var i=1;i<5;i++){
		navStr = "#plate2Nav"+i;
		if(sign >= i){
			$(navStr).show();
		}else{
			$(navStr).hide();
		}

	}

	if(sign == 1){
		$("#plate2body").load("visit.html")
	}else if(sign == 2){
		$("#plate2body").load("visit.html")
	}else if(sign == 3){
		$("#plate2body").load("visit.html")
	}else{
		$("#plate2body").load("complete.html")
	}

}

// 加载第一板块或者第二板块
function plete1Show(){
	$("#plete1").show();
	$("#plete2").hide()
}
function plete2Show(){

	localStorage.setItem("plete2LeftNav","1")

	$("#plete2").show();
	$("#plete1").hide()
	plate2Nav(localStorage.getItem("plete2LeftNav") * 1)
} 

plete1Show();
// plete2Show();