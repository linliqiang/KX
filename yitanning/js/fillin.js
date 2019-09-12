function cleText(node,index,index2){
	if(index2){
		if(index2 == 1){
			$("input[type=text][cle="+node.getAttribute("cle")+"]").val("").attr("disabled",true)
			var fillinDisnoneArr = $("input[type=radio][cle="+node.getAttribute("cle")+"]")
			for(var i=2;i<fillinDisnoneArr.length;i++){
				fillinDisnoneArr[i].checked = false; 
			}
			$(".fillin-disnone").hide();
		}else{
			$("input[type=text][cle="+node.getAttribute("cle")+"]").attr("disabled",false)
			$(".fillin-disnone").show();
		}
	}else{
		if(index == 0){
			$("input[type=text][cle="+node.getAttribute("cle")+"]").val("").attr("disabled",true)
		}else{
			$("input[type=text][cle="+node.getAttribute("cle")+"]").attr("disabled",false)
		}
	}
}

function cleText2(node,index){
		if(index == 0){
			$("input[type=text][cletwo="+node.getAttribute("cletwo")+"]").val("").attr("disabled",true)
		}else{
			$("input[type=text][cletwo="+node.getAttribute("cletwo")+"]").attr("disabled",false)
		}
}


var sxhREG = new RegExp(/^[0-9]{5}$/);//筛选号正则
var zxbhREG = new RegExp(/^[0-9]{2}$/);//中心编号正则
var nameREG = new RegExp(/^[A-Z]{4}$/);//姓名缩写正则（四位，大写）

function fillThing1(node){
	if(node.alt == "筛选号"){

		if(sxhREG.test(node.value)){
			showTip("筛选号通过验证", "success");
	    }else{
	        showTip("请输入五位数筛选号", "error");
	        node.focus()
	        return false;
	    }

	}else if(node.alt == "中心编号"){

		if(zxbhREG.test(node.value)){
			showTip("中心编号通过验证", "success");
	    }else{
	        showTip("请输入两位数中心编号", "error");
	        node.focus()
	        return false;
	    }

	}else if(node.alt == "患者姓名缩写"){

		if(nameREG.test(node.value)){
			showTip("患者姓名缩写通过验证", "success");
	    }else{
	        showTip("请输入四位大写字母的姓名缩写", "error");
	        node.focus()
	        return false;
	    }

	}else{

	}
}
