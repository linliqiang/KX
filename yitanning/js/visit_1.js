


function visit1Thing1(sign){
	var visit1ThingpArr = $(".visit1Thingp")
	if(sign == 1){
		
		$(".visit-1 input[name='visit-1Radio2']").eq(0).get(0).checked=false;
		$(".visit-1 input[name='visit-1Radio2']").eq(1).get(0).checked=false;

		for(var i=0;i<visit1ThingpArr.length;i++){
			visit1ThingpArr.eq(i).hide()
		}

		localStorage.setItem("visit_topli5","1")

	}else if(sign == 2){

		for(var i=0;i<visit1ThingpArr.length;i++){
			visit1ThingpArr.eq(i).show()
		}
		localStorage.setItem("visit_topli5","2")

	}else if(sign == 3){
		localStorage.setItem("visit_topli5","3")
	}
	else{

		localStorage.setItem("visit_topli5","4")

	}
}



function visit1Thing2(sign){
	var visit2ThingpArr = $(".visit2Thingp")
	if(sign == 1){
		
		$(".visit-1 input[name='visit-1Radio4']").eq(0).get(0).checked=false;
		$(".visit-1 input[name='visit-1Radio4']").eq(1).get(0).checked=false;

		for(var i=0;i<visit2ThingpArr.length;i++){
			visit2ThingpArr.eq(i).hide()
		}

		localStorage.setItem("visit_topli6","1")

	}else if(sign == 2){
		for(var i=0;i<visit2ThingpArr.length;i++){
			visit2ThingpArr.eq(i).show()
		}
		localStorage.setItem("visit_topli6","2")
	}else if(sign == 3){
		localStorage.setItem("visit_topli6","3")
	}else{

		localStorage.setItem("visit_topli6","4")

	}
}



function visit1Thing3(sign){
	if(sign == 1){

		localStorage.setItem("visit_topli7","1")
	}else{

		localStorage.setItem("visit_topli7","2")
	}
}

function visit1Thing4(sign){
	if(sign == 1){

		localStorage.setItem("visit_topli8","1")
	}else{

		localStorage.setItem("visit_topli8","2")
	}
}

var sxhREG = new RegExp(/^[0-9]{5}$/);//筛选号正则
var zxbhREG = new RegExp(/^[0-9]{2}$/);//中心编号正则
var nameREG = new RegExp(/^[A-Z]{4}$/);//姓名缩写正则（四位，大写）
var xyREG = new RegExp(/^[0-9]{2,3}$/);//血压正则（四位，大写)

function regThing(node){
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

	}else if(node.alt == "血压"){

		if(xyREG.test(node.value)){
			showTip("您输入的是正确血压格式", "success");
	    }else{
	        showTip("请输入2-3位的血压数字", "error");
	        node.focus()
	        return false;
	    }

	}else{

	}
}