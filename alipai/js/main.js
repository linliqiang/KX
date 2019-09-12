


//正则
var regName = new RegExp(/^[A-Z]{4}$/);//四个大写字母
var reg0 = new RegExp(/^\d{1,}$/);//不限位数的纯数字
var reg1 = new RegExp(/^[1-9]\d{0,2}$/);//1~3位数字
var reg2=/^\d*\.{0,1}\d{0,1}$/;//纯数字，可以是小数
var regPhone = new RegExp(/^1[34578]\d{9}$/);//手机
var regMail = new RegExp(/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/);//邮箱
var regIdBumber = new RegExp(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/);//身份证号码


//检测某个节点范围内input是否有空值，并作出正则检测。需要参数：jquery节点
function inputNull(jqnode){
	var msgInp = jqnode.find("input")
	for(var i=0;i<msgInp.length;i++){
		//单选框
		if( msgInp.eq(i).attr("type") == "radio" ){
			if($("input[name="+msgInp.eq(i).attr("name")+"]:checked").length == 0){
				showTip("请选择"+msgInp.eq(i).attr("alt"), "error");
				msgInp.eq(i).focus();
				return false;
			}else{
				if( $("input[name="+msgInp.eq(i).attr("name")+"]:checked").eq(0).attr("ito") ){
					i = i + $("input[name="+msgInp.eq(i).attr("name")+"]:checked").eq(0).attr("ito") * 1
				}
			}
		//多选框
		}else if( msgInp.eq(i).attr("type") == "checkbox" ){
			// console.log("多选框")
			if($("input[name="+msgInp.eq(i).attr("name")+"]:checked").length == 0){
				showTip("请选择"+msgInp.eq(i).attr("alt"), "error");
				msgInp.eq(i).focus();
				return false;
			}else{
				if( $("input[name="+msgInp.eq(i).attr("name")+"]:checked").eq(0).attr("ito") ){
					i = i + $("input[name="+msgInp.eq(i).attr("name")+"]:checked").eq(0).attr("ito") * 1
				}
			}
		//输入框
		}else{
			// console.log("输入框")
			//选填，至少填一项
			var kexNum = 0;
			if( msgInp.eq(i).attr("kex") ){
				// console.log("有kex")
				var kexArr = $("input[kex='"+msgInp.eq(i).attr("kex")+"']")
				for(var j=0;j<kexArr.length;j++){
					// console.log("kex循环")
					if(kexArr.eq(j).val() != ""){
						// console.log("有一个不是空")
						kexNum = kexNum + kexArr.eq(j).attr("kex")*1
						break;
					}
				}
				if(kexNum == 0){
					// mui.toast("血糖至少选填一项",{ duration:'long', type:'div' }) 
					console.log("没有填写完整")
					return false
				}
				i = i + kexNum

			//可不填
			}else if( msgInp.eq(i).attr("buti") ){
				i = i + 1
			}else{
				if( msgInp.eq(i).val() == "" ){
					showTip("请填写"+msgInp.eq(i).attr("alt"), "error");
					msgInp.eq(i).focus();
					return false;
				}else{
					// console.log("输入框填写完整，检测正则")
					if( msgInp.eq(i).attr("reg") ){
						if( msgInp.eq(i).attr("reg") == "fillName" ){

							if(!regName.test(msgInp.eq(i).val())){
								showTip("请填写正确姓名缩写格式", "error");
								msgInp.eq(i).focus();
								return false;
							}

						}else if( msgInp.eq(i).attr("reg") == "reg0" ){
							if(!reg0.test(msgInp.eq(i).val())){
								showTip("请填写正确"+msgInp.eq(i).attr("alt")+"格式", "error");
								msgInp.eq(i).focus();
								return false;
							}
						}else if( msgInp.eq(i).attr("reg") == "reg1" ){
							if(!reg1.test(msgInp.eq(i).val())){
								showTip("请填写正确"+msgInp.eq(i).attr("alt")+"格式", "error");
								msgInp.eq(i).focus();
								return false;
							}
						}else if( msgInp.eq(i).attr("reg") == "reg2" ){
							if(!reg2.test(msgInp.eq(i).val())){
								showTip("请填写正确"+msgInp.eq(i).attr("alt")+"格式", "error");
								msgInp.eq(i).focus();
								return false;
							}
						}else if( msgInp.eq(i).attr("reg") == "regPhone" ){
							if(!regPhone.test(msgInp.eq(i).val())){
								showTip("请填写正确手机号码格式", "error");
								msgInp.eq(i).focus();
								return false;
							}
						}
						else if( msgInp.eq(i).attr("reg") == "regMail" ){
							if(!regMail.test(msgInp.eq(i).val())){
								showTip("请填写正确邮箱格式", "error");
								msgInp.eq(i).focus();
								return false;
							}
						}
						else if( msgInp.eq(i).attr("reg") == "regIdBumber" ){
							if(!regIdBumber.test(msgInp.eq(i).val())){
								showTip("请填写正确身份证号码格式", "error");
								msgInp.eq(i).focus();
								return false;
							}
						}else{

						}

					}
				}
			}
			
		}
	}
	// console.log("通过验证")
	return true
}


// 检测一个容器内有n组表格，必须至少填一组，每组表格的每一项要么都不填，要么填完，两个参数，第一个最外层容器的class，第二个每组表格的class
function inputNull3(cn1,cn2){
	var cnb = $(cn1);
	var cnbItem = $(cn1+" "+cn2);
	for( var j=0;j<cnbItem.length;j++){
		if(j==0){
			if(inputNull(cnbItem.eq(j))){
				console.log("第一组通过")
			}else{
				console.log("第一组不通过")
				return false;	
			}
		}else{
			var cnbItemj = cnbItem.eq(j);
			var ciji = cnbItem.eq(j).find("input");
			for(var n=0;n<ciji.length;n++){
				//单选框
				if( ciji.eq(n).attr("type") == "radio" ){
					if($("input[name="+ciji.eq(n).attr("name")+"]:checked").length >= 1){
						console.log(n);
						console.log(1)
						if(inputNull(cnbItemj)){
						}else{
							return false;
						}
					}	
				//多选框
				}else if( ciji.eq(n).attr("type") == "checkbox" ){

					if($("input[name="+ciji.eq(n).attr("name")+"]:checked").length >= 1){
						if(inputNull(cnbItemj)){
						}else{
							return false;
						}
					}
				//输入框
				}else{
					if(ciji.eq(n).val() != ""){
						if(inputNull(cnbItemj)){
						}else{
							return false;
						}
					}
				}
			}
		}
	}
	return true;
}

//检测可重复添加的节点里面的input是否有空，参数：重复节点的class名
function inputNull2(className){
	var msgBox = $(className)
	var msgInp;
	for(var i=0;i<msgBox.length;i++){
		msgInp = msgBox.eq(i).find("input");
		if(i == msgBox.length-1 && i != 0){
			// console.log("多个并且最后一个")
			var lastNum = 0;//此数据用来保存input为空的个数
			for(var j=0;j<msgInp.length;j++){
				if( msgInp.eq(j).attr("type") == "radio" ){
					if($("input[name="+msgInp.eq(j).attr("name")+"]:checked").length == 0){
					}else{
						lastNum = lastNum + 1
					}
				}else if( msgInp.eq(j).attr("type") == "checkbox" ){
					if($("input[name="+msgInp.eq(j).attr("name")+"]:checked").length == 0){
					}else{
						lastNum = lastNum + 1
					}
				}else{
					if( msgInp.eq(j).val() == "" ){
					}else{
						lastNum = lastNum + 1
					}
				}
			}
			if( lastNum == msgInp.length || lastNum == 0){
				return true;
			}else{
				mui.toast("请将增加的方案填写完整，或者不填") 
				return false;
			}
		}else{
			// console.log("只有一个或者多个不是最后一个")
			for(var j=0;j<msgInp.length;j++){
				if( msgInp.eq(j).attr("type") == "radio" ){
					if($("input[name="+msgInp.eq(j).attr("name")+"]:checked").length == 0){
						mui.toast("请选择"+msgInp.eq(j).attr("alt"),{ duration:'long', type:'div' }) 
						return false;
					}else{
					}
				//多选框
				}else if( msgInp.eq(j).attr("type") == "checkbox" ){
					if($("input[name="+msgInp.eq(j).attr("name")+"]:checked").length == 0){
						mui.toast("请选择"+msgInp.eq(j).attr("alt"),{ duration:'long', type:'div' }) 
						return false;
					}else{
					}
				//输入框
				}else{
					if( msgInp.eq(j).val() == "" ){
						mui.toast("请填写"+msgInp.eq(j).attr("alt"),{ duration:'long', type:'div' }) 
						return false;
					}else{
					}
				}
			}
			if(msgInp.length == 1){
				return true;
			}
		}
	}
	return true
}


// input[type="radio"]关联其他input[type="text"]或者input[type="radio"]
$(function(){
	document.body.onclick = function (ev) {
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        if (target.getAttribute("type") == "radio") {//打开关联input的radio，加上oti
            var targets = target;//保存当前点击节点
            //检测当前点击的这一组单选框是否有一个关联其他input
            var targetsArr = $("input[name="+target.getAttribute("name")+"]")//保存当前点击的单选框所属的单选框组
			var targetsSign = 0;//用来保存关联其他input的radio
			var oti = 0;//用来保存oti字符串
			var otiiArr = 0;//用来保存被关联的其他input
			for(var i=0;i<targetsArr.length;i++){
				if(targetsArr.eq(i).attr("oti")){
					//检测到有一个单选框关联其他input，保存下来
					targetsSign = targetsArr.eq(i)//保存关联其他input的radio
					console.log(targetsArr.eq(i).attr("oti"))
					oti = targetsArr.eq(i).attr("oti")//保存关联oti字符串
				}
			}
			//判断是否有一个input关联其他input
			if(targetsSign != 0){
				otiiArr = $("input[otii="+oti+"]");
				//当前选择不是关联其他input的input，则清空并关闭关联的其他input
				if(!targets.getAttribute("oti")){
					for(var i=0;i<otiiArr.length;i++){
						if(otiiArr.eq(i).attr("type") == "text"){
							otiiArr.eq(i).val("")
							otiiArr.eq(i).attr("disabled","disabled");
						}else if(otiiArr.eq(i).attr("type") == "radio"){
							otiiArr.eq(i).get(0).checked=false;
							otiiArr.eq(i).attr("disabled","disabled");
						}else{
						}
					}
				//当前选择是关联其他input的input，则放开关联的其他input
				}else{
					for(var i=0;i<otiiArr.length;i++){
						if(otiiArr.eq(i).attr("type") == "text"){
							otiiArr.eq(i).removeAttr("disabled");
						}else if(otiiArr.eq(i).attr("type") == "radio"){
							otiiArr.eq(i).removeAttr("disabled");
						}else{
						}
					}
				}
			}
        }
        if (target.getAttribute("type") == "radio") {
            var targets = target;//保存当前点击节点
            //检测当前点击的这一组单选框是否有一个关联其他input
            var targetsArr = $("input[name="+target.getAttribute("name")+"]")//保存当前点击的单选框所属的单选框组
			var targetsSign = 0;//用来保存关联其他input的radio
			var otit = 0;//用来保存otit字符串
			var otiitArr = 0;//用来保存被关联的其他input
			for(var i=0;i<targetsArr.length;i++){
				if(targetsArr.eq(i).attr("otit")){
					//检测到有一个单选框关联其他input，保存下来
					targetsSign = targetsArr.eq(i)//保存关联其他input的radio
					otit = targetsArr.eq(i).attr("otit")//保存关联oti字符串
				}
			}
			//是否有一个input关联其他input
			if(targetsSign != 0){
				// console.log("有一个oti2关联其他input")
				otiitArr = $("input[otiit="+otit+"]");
				//当前选择不是关联其他input的input，则清空并关闭关联的其他input
				if(!targets.getAttribute("otit")){
					for(var i=0;i<otiitArr.length;i++){
						if(otiitArr.eq(i).attr("type") == "text"){
							otiitArr.eq(i).val("")
							otiitArr.eq(i).attr("disabled","disabled");
						}else if(otiitArr.eq(i).attr("type") == "radio"){
							otiitArr.eq(i).get(0).checked=false;
							otiitArr.eq(i).attr("disabled","disabled");
						}else{
						}
					}
				//当前选择是关联其他input的input，则放开关联的其他input
				}else{
					for(var i=0;i<otiitArr.length;i++){
						if(otiitArr.eq(i).attr("type") == "text"){
							otiitArr.eq(i).removeAttr("disabled");
						}else if(otiitArr.eq(i).attr("type") == "radio"){
							otiitArr.eq(i).removeAttr("disabled");
						}else{
						}
					}
				}
			}
        }
    }


    // input[type='text']内容发生改变时候，检测内容是否符合要求，符合则不处理，不符合则作出处理
	$("input[type='number']").bind('input propertychange', function(){
		// cha1：体重
		// cha2：身高
		// cha3：腰围
		// cha4：臀围
		if($(this).val()){
			//体重 
			if($(this).attr("cha") == "cha1"){
				var cha1s = $(this).val();
				if(cha1s*1>500){
					$(this).val(500)
				}else if(cha1s.indexOf(".") != -1){
					var cha1ss = cha1s.slice(0,cha1s.indexOf(".")+2)
					$(this).val(cha1ss)
				}else{
				}
			//身高
			}else if($(this).attr("cha") == "cha2"){
				var cha1s = $(this).val();
				if(cha1s*1>300){
					$(this).val(300)
				}else if(cha1s.indexOf(".") != -1){
					var cha1ss = cha1s.slice(0,cha1s.indexOf(".")+2)
					$(this).val(cha1ss)
				}else{	
				}
			// 腰围
			}else if($(this).attr("cha") == "cha3"){
				var cha1s = $(this).val();
				if(cha1s*1>300){
					$(this).val(300)
				}else if(cha1s.indexOf(".") != -1){
					var cha1ss = cha1s.slice(0,cha1s.indexOf(".")+2)
					$(this).val(cha1ss)
				}else{
				}
			// 臀围
			}else if($(this).attr("cha") == "cha4"){
				var cha1s = $(this).val();
				if(cha1s*1>300){
					$(this).val(300)
				}else if(cha1s.indexOf(".") != -1){
					var cha1ss = cha1s.slice(0,cha1s.indexOf(".")+2)
					$(this).val(cha1ss)
				}else{	
				}
			}else{
			}
		}else{
			console.log("input发生change事件，但输入框内容为空");
		}
	})
})






