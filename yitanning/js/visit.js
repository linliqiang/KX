

// 第二板块分三大块，每块又分7小块
$("#visitbody").load("visit_1.html")

function visitRightNav(sign){

	var visitRightNavArr = $(".visit-top li")
	for(var i=0;i<visitRightNavArr.length;i++){
		if(i<sign){
			visitRightNavArr.eq(i).addClass("visitTopQian");
			visitRightNavArr.eq(i).removeClass("visitTopZhong");
		}else if(i==sign){
			visitRightNavArr.eq(i).addClass("visitTopZhong");
			visitRightNavArr.eq(i).removeClass("visitTopQian");
		}else{
			visitRightNavArr.eq(i).removeClass("visitTopZhong");
			visitRightNavArr.eq(i).removeClass("visitTopQian");
		}
	}
}

visitRightNav(0)

// #visit-1事件
function visit1Save(){
	var visit1InputArr = $(".visit-1 input")

	for(var i=0;i<visit1InputArr.length;i++){
		if(visit1InputArr.eq(i).attr("type") == "text" && visit1InputArr.eq(i).val() == ""){
			showTip("请输入或选择"+visit1InputArr.eq(i).get(0).alt, "error");
    		visit1InputArr.eq(i).get(0).focus()
    		return false;
		}
		if(visit1InputArr.eq(i).attr("type") == "text" && visit1InputArr.eq(i).get(0).alt == "血压"){
			var viXueya = new RegExp(/^[0-9]{2,3}$/);
			if(viXueya.test(visit1InputArr.eq(i).get(0).value)){
			}else{
				showTip("请输入正确的血压数字", "error");
	    		visit1InputArr.eq(i).get(0).focus()
	    		return false
			}
		}

		if(visit1InputArr.eq(i).attr("type") == "text" && visit1InputArr.eq(i).get(0).alt == "患者姓名缩写"){
			var fillName = new RegExp(/^[A-Z]{4}$/);
            if(fillName.test(visit1InputArr.eq(i).get(0).value)){
            }else{
                showTip("请输入正确的姓名缩写", "error");
                visit1InputArr.eq(i).get(0).focus()
                return false;
            }
		}
		if(visit1InputArr.eq(i).attr("type") == "radio"){

			if($("input[name="+visit1InputArr.eq(i).attr("name")+"]:checked").length == 0 ){
	    		showTip("请输入或选择"+visit1InputArr.eq(i).get(0).alt, "error");
	    		visit1InputArr.eq(i).get(0).focus()
	    		return false;
    		}
    		if($("input[name="+visit1InputArr.eq(i).attr("name")+"]:checked").length == 1){
    			if($("input[name="+visit1InputArr.eq(i).attr("name")+"]:checked").attr("ro") ){
    				i = i + $("input[name="+visit1InputArr.eq(i).attr("name")+"]:checked").attr("ro") * 1
    			}
    		}
		}
	}
	showTip("保存成功", "success");
	$("#visitbody").load("visit_2.html")
	$("html,body").animate({scrollTop:0},10);
	visitRightNav(1)
}
// visit-1事件#


// #visit-2事件
function visit2Save(){

	var visit2Input = $("#visit_2 input")

    for(var i=0;i<visit2Input.length;i++){
		if(visit2Input.eq(i).attr("type") == "text" && visit2Input.eq(i).val() == ""){
			showTip("请输入或选择"+visit2Input.eq(i).get(0).alt, "error");
    		visit2Input.eq(i).get(0).focus()
    		return false;
		}
		if(visit2Input.eq(i).attr("type") == "text" && visit2Input.eq(i).get(0).alt == "患者姓名缩写"){
			var fillName = new RegExp(/^[A-Z]{4}$/);
            if(fillName.test(visit2Input.eq(i).get(0).value)){
            }else{
                showTip("请输入正确的姓名缩写", "error");
                visit2Input.eq(i).get(0).focus()
                return false;
            }
		}
		if(visit2Input.eq(i).attr("type") == "radio"){

			if($("input[name="+visit2Input.eq(i).attr("name")+"]:checked").length == 0 ){
	    		showTip("请输入或选择"+visit2Input.eq(i).get(0).alt, "error");
	    		visit2Input.eq(i).get(0).focus()
	    		return false;
    		}
		}
	}
    showTip("保存成功", "success");
	$("#visitbody").load("visit_3.html")
	$("html,body").animate({scrollTop:0},10);
	visitRightNav(2)
}

// visit-2事件#


function visit3Save(){

	var visit3Input = $("#visit_3 input");

    for(var i=0;i<visit3Input.length;i++){
		if(visit3Input.eq(i).attr("type") == "text" && visit3Input.eq(i).val() == ""){
			showTip("请输入或选择"+visit3Input.eq(i).get(0).alt, "error");
    		visit3Input.eq(i).get(0).focus()
    		return false;
		}
		if(visit3Input.eq(i).attr("type") == "text" && visit3Input.eq(i).get(0).alt == "患者姓名缩写"){

			var fillName = new RegExp(/^[A-Z]{4}$/);
            
            if(fillName.test(visit3Input.eq(i).get(0).value)){
            }else{
                showTip("请输入正确的姓名缩写", "error");
                visit3Input.eq(i).get(0).focus()
                return false;
            }
		}
		if(visit3Input.eq(i).attr("type") == "radio"){

			if($("input[name="+visit3Input.eq(i).attr("name")+"]:checked").length == 0 ){
	    		showTip("请输入或选择"+visit3Input.eq(i).get(0).alt, "error");
	    		visit3Input.eq(i).get(0).focus()
	    		return false;
    		}

		}
	}
	showTip("保存成功", "success");
	$("#visitbody").load("visit_4.html")
	$("html,body").animate({scrollTop:0},10);
	visitRightNav(3)
}





function visit4Save(){

	var visit4Input = $("#visit_4 input");

    for(var i=0;i<visit4Input.length;i++){
		if(visit4Input.eq(i).attr("type") == "text" && visit4Input.eq(i).val() == ""){
			showTip("请输入或选择"+visit4Input.eq(i).get(0).alt, "error");
    		visit4Input.eq(i).get(0).focus()
    		return false;
		}
		if(visit4Input.eq(i).attr("type") == "text" && visit4Input.eq(i).get(0).alt == "患者姓名缩写"){
			var fillName = new RegExp(/^[A-Z]{4}$/);
            
            if(fillName.test(visit4Input.eq(i).get(0).value)){
            }else{
                showTip("请输入正确的姓名缩写", "error");
                visit4Input.eq(i).get(0).focus()
                return false;
            }
		}
		if(visit4Input.eq(i).attr("type") == "radio"){

			if($("input[name="+visit4Input.eq(i).attr("name")+"]:checked").length == 0 ){
	    		showTip("请输入或选择"+visit4Input.eq(i).get(0).alt, "error");
	    		visit4Input.eq(i).get(0).focus()
	    		return false;
    		}

		}
	}

	showTip("保存成功", "success");
	$("#visitbody").load("visit_5.html")
	$("html,body").animate({scrollTop:0},10);
	visitRightNav(4)
}


function visit5Save(){


	if(localStorage.getItem("visit_topli5") == "1"){

		showTip("保存成功", "success");
		$("#visitbody").load("visit_6.html")
		$("html,body").animate({scrollTop:0},10);
		visitRightNav(5)

	}else if(localStorage.getItem("visit_topli5") == "2"){

	}else if(localStorage.getItem("visit_topli5") == "3"){

		var visit5Tr = $(".visit_5 .visit5Tr")
		var visit5TrInput = 0;

		var vtNumber = 0;

		for(var i=0;i<visit5Tr.length;i++){

			visit5TrInput = $(visit5Tr.eq(i).find("input"))
			vtNumber = 0;

			for(var j=0;j<visit5TrInput.length-3;j++){

				if(i==0){
					if(visit5TrInput.eq(j).attr("type") == "text" && visit5TrInput.eq(j).val() == ""){
						showTip("请输入或选择"+visit5TrInput.eq(j).get(0).alt, "error");
			    		visit5TrInput.eq(j).get(0).focus()
			    		return false;
					}
				}else{
					if(visit5TrInput.eq(j).attr("type") == "text" && visit5TrInput.eq(j).val() != ""){
						vtNumber = vtNumber + 1
					}
				}

			}
				if(vtNumber == 0 || vtNumber == 3){	
				}else{
					showTip("请将信息填写完整", "error");
					return false;
					
				}
		}

	}else{


		var visit5Tr = $(".visit_5 .visit5Tr")
		var visit5TrInput = 0;

		var vtNumber = 0;

		for(var i=0;i<visit5Tr.length;i++){

			visit5TrInput = $(visit5Tr.eq(i).find("input[type='text']"))
			vtNumber = 0;

			for(var j=0;j<visit5TrInput.length;j++){

				if(i==0){
					if(visit5TrInput.eq(j).attr("type") == "text" && visit5TrInput.eq(j).val() == ""){
						showTip("请输入或选择"+visit5TrInput.eq(j).get(0).alt, "error");
			    		visit5TrInput.eq(j).get(0).focus()
			    		return false;
					}
				}else{
					if(visit5TrInput.eq(j).attr("type") == "text" && visit5TrInput.eq(j).val() != ""){
						vtNumber = vtNumber + 1
					}
				}

			}
				if(vtNumber == 0 || vtNumber == 4){	
				}else{
					showTip("请将信息填写完整", "error");
					return false;
					
				}
		}

		// showTip("保存成功", "success");
		// $("#visitbody").load("visit_6.html")
		// $("html,body").animate({scrollTop:0},10);
		// visitRightNav(5)

	}

	showTip("保存成功", "success");
	$("#visitbody").load("visit_6.html")
	$("html,body").animate({scrollTop:0},10);
	visitRightNav(5)


}




function visit6Save(){

	if(localStorage.getItem("visit_topli6") == "1"){

		showTip("保存成功", "success");
		$("#visitbody").load("visit_7.html")
		$("html,body").animate({scrollTop:0},10);
		visitRightNav(6)

	}else if(localStorage.getItem("visit_topli6") == "2"){

	}else if(localStorage.getItem("visit_topli6") == "3"){

		var visit6Tr = $(".visit_6 .visit6Tr")
		var visit6TrInput = 0;

		var vtNumber = 0;

		for(var i=0;i<visit6Tr.length;i++){

			visit6TrInput = $(visit6Tr.eq(i).find("input"))
			vtNumber = 0;

			for(var j=0;j<visit6TrInput.length-3;j++){

				if(i==0){
					if(visit6TrInput.eq(j).attr("type") == "text" && visit6TrInput.eq(j).val() == ""){
						showTip("请输入或选择"+visit6TrInput.eq(j).get(0).alt, "error");
			    		visit6TrInput.eq(j).get(0).focus()
			    		return false;
					}
				}else{
					if(visit6TrInput.eq(j).attr("type") == "text" && visit6TrInput.eq(j).val() != ""){
						vtNumber = vtNumber + 1
					}
				}

			}
				if(vtNumber == 0 || vtNumber == 3){	
				}else{
					showTip("请将信息填写完整", "error");
					return false;
					
				}
		}

	}else{

		var visit6Tr = $(".visit_6 .visit6Tr")
		var visit6TrInput = 0;

		var vtNumber = 0;

		for(var i=0;i<visit6Tr.length;i++){

			visit6TrInput = $(visit6Tr.eq(i).find("input[type='text']"))
			console.log(visit6TrInput)
			vtNumber = 0;

			for(var j=0;j<visit6TrInput.length;j++){

				if(i==0){
					if(visit6TrInput.eq(j).attr("type") == "text" && visit6TrInput.eq(j).val() == ""){
						showTip("请输入或选择"+visit6TrInput.eq(j).get(0).alt, "error");
			    		visit6TrInput.eq(j).get(0).focus()
			    		return false;
					}
				}else{
					if(visit6TrInput.eq(j).attr("type") == "text" && visit6TrInput.eq(j).val() != ""){
						vtNumber = vtNumber + 1
					}
				}

			}
				if(vtNumber == 0 || vtNumber == 4){	
				}else{
					showTip("请将信息填写完整", "error");
					return false;
					
				}
		}

		// showTip("保存成功", "success");
		// $("#visitbody").load("visit_7.html")
		// $("html,body").animate({scrollTop:0},10);
		// visitRightNav(6)
	}

	showTip("保存成功", "success");
	$("#visitbody").load("visit_7.html")
	$("html,body").animate({scrollTop:0},10);
	visitRightNav(6)
}
function visit7Save(){

	if(localStorage.getItem("visit_topli7") == 1){

		showTip("保存成功", "success");
		$("#visitbody").load("visit_8.html")
		$("html,body").animate({scrollTop:0},10);
		visitRightNav(7)

	}else{


		var visit7Tr = $(".visit_7 .visit7Tr")
		var visit7TrInput = 0;
		var vtNumber = 0;

		for(var i=0;i<visit7Tr.length;i++){

			visit7TrInput = $(visit7Tr.eq(i).find("input"))
			vtNumber = 0;

			for(var j=0;j<visit7TrInput.length;j++){

				// 验证第一行，必须验证
				if(i==0){

					if(visit7TrInput.eq(j).attr("type") == "text" && visit7TrInput.eq(j).val() == ""){
						showTip("请输入或选择"+visit7TrInput.eq(j).get(0).alt, "error");
			    		visit7TrInput.eq(j).get(0).focus()
			    		return false;
					}
					if(visit7TrInput.eq(j).attr("type") == "radio"){

						if($("input[name="+visit7TrInput.eq(j).attr("name")+"]:checked").length == 0 ){
				    		showTip("请输入或选择"+visit7TrInput.eq(j).get(0).alt, "error");
				    		visit7TrInput.eq(j).get(0).focus()
				    		return false;
			    		}
			    		if($("input[name="+visit7TrInput.eq(j).attr("name")+"]:checked").length == 1){

			    			if($("input[name="+visit7TrInput.eq(j).attr("name")+"]:checked").attr("ro") ){

			    				j = j + $("input[name="+visit7TrInput.eq(j).attr("name")+"]:checked").attr("ro") * 1

			    			}
			    		}
					}

				// 第二行开始
				}else{
					// 有个文本框不为空，则验证整行
					if(visit7TrInput.eq(j).attr("type") == "text" && visit7TrInput.eq(j).val() != ""){

						var visit7TrInputSS = $(visit7Tr.eq(i).find("input"))

						for(var k=0;k<visit7TrInputSS.length;k++){

							if(visit7TrInputSS.eq(k).attr("type") == "text" && visit7TrInputSS.eq(k).val() == ""){
								showTip("请输入或选择"+visit7TrInputSS.eq(k).get(0).alt, "error");
					    		visit7TrInputSS.eq(k).get(0).focus()
					    		return false;
							}
							if(visit7TrInputSS.eq(k).attr("type") == "radio"){

								if($("input[name="+visit7TrInputSS.eq(k).attr("name")+"]:checked").length == 0 ){
						    		showTip("请输入或选择"+visit7TrInputSS.eq(k).get(0).alt, "error");
						    		visit7TrInputSS.eq(k).get(0).focus()
						    		return false;
					    		}
					    		if($("input[name="+visit7TrInputSS.eq(k).attr("name")+"]:checked").length == 1){

					    			if($("input[name="+visit7TrInputSS.eq(k).attr("name")+"]:checked").attr("ro") ){

					    				k = k + $("input[name="+visit7TrInputSS.eq(k).attr("name")+"]:checked").attr("ro") * 1

					    			}
					    		}
							}

						}

					}
					// 有个单选框不为空，则验证整行
					if($("input[name="+visit7TrInput.eq(j).attr("name")+"]:checked").length == 1){

						var visit7TrInputSS = $(visit7Tr.eq(i).find("input"))

						for(var k=0;k<visit7TrInputSS.length;k++){

							if(visit7TrInputSS.eq(k).attr("type") == "text" && visit7TrInputSS.eq(k).val() == ""){
								showTip("请输入或选择"+visit7TrInputSS.eq(k).get(0).alt, "error");
					    		visit7TrInputSS.eq(k).get(0).focus()
					    		return false;
							}
							if(visit7TrInputSS.eq(k).attr("type") == "radio"){

								if($("input[name="+visit7TrInputSS.eq(k).attr("name")+"]:checked").length == 0 ){

						    		showTip("请输入或选择"+visit7TrInputSS.eq(k).get(0).alt, "error");
						    		visit7TrInputSS.eq(k).get(0).focus()
						    		return false;
					    		}
					    		if($("input[name="+visit7TrInputSS.eq(k).attr("name")+"]:checked").length == 1){

					    			if($("input[name="+visit7TrInputSS.eq(k).attr("name")+"]:checked").attr("ro") ){

					    				k = k + $("input[name="+visit7TrInputSS.eq(k).attr("name")+"]:checked").attr("ro") * 1

					    			}
					    		}
							}

						}

					}
				}

			}

		}


	}


	showTip("保存成功", "success");
	$("#visitbody").load("visit_8.html")
	$("html,body").animate({scrollTop:0},10);
	visitRightNav(7)



	

}
function visit8Save(){


	if(localStorage.getItem("visit_topli8") == 1){

		// showTip("保存成功", "success");
		// $("#visitbody").load("visit_8.html")
		// $("html,body").animate({scrollTop:0},10);
		// visitRightNav(7)

		// showTip("保存成功", "success");
		// $("html,body").animate({scrollTop:0},10);

	}else{


		var visit8Tr = $(".visit_8 .visit8Tr")
		var visit8TrInput = 0;

		var vtNumber = 0;

		for(var i=0;i<visit8Tr.length;i++){

			visit8TrInput = $(visit8Tr.eq(i).find("input"))

			vtNumber = 0;

			for(var j=0;j<visit8TrInput.length;j++){

				// 验证第一行，必须验证
				if(i==0){

					if(visit8TrInput.eq(j).attr("type") == "text" && visit8TrInput.eq(j).val() == ""){
						showTip("请输入或选择"+visit8TrInput.eq(j).get(0).alt, "error");
			    		visit8TrInput.eq(j).get(0).focus()
			    		return false;
					}
					if(visit8TrInput.eq(j).attr("type") == "radio"){

						if($("input[name="+visit8TrInput.eq(j).attr("name")+"]:checked").length == 0 ){

				    		showTip("请输入或选择"+visit8TrInput.eq(j).get(0).alt, "error");
				    		visit8TrInput.eq(j).get(0).focus()
				    		return false;
			    		}
			    		if($("input[name="+visit8TrInput.eq(j).attr("name")+"]:checked").length == 1){

			    			if($("input[name="+visit8TrInput.eq(j).attr("name")+"]:checked").attr("ro") ){

			    				j = j + $("input[name="+visit8TrInput.eq(j).attr("name")+"]:checked").attr("ro") * 1

			    			}
			    		}
					}

				// 第二行开始
				}else{
					// 有个文本框不为空，则验证整行
					if(visit8TrInput.eq(j).attr("type") == "text" && visit8TrInput.eq(j).val() != ""){

						var visit8TrInputSS = $(visit8Tr.eq(i).find("input"))

						for(var k=0;k<visit8TrInputSS.length;k++){

							
							if(visit8TrInputSS.eq(k).attr("type") == "text" && visit8TrInputSS.eq(k).val() == ""){
								showTip("请输入或选择"+visit8TrInputSS.eq(k).get(0).alt, "error");
					    		visit8TrInputSS.eq(k).get(0).focus()
					    		return false;
							}
							if(visit8TrInputSS.eq(k).attr("type") == "radio"){

								if($("input[name="+visit8TrInputSS.eq(k).attr("name")+"]:checked").length == 0 ){
						    		showTip("请输入或选择"+visit8TrInputSS.eq(k).get(0).alt, "error");
						    		visit8TrInputSS.eq(k).get(0).focus()
						    		return false;
					    		}
					    		if($("input[name="+visit8TrInputSS.eq(k).attr("name")+"]:checked").length == 1){

					    			if($("input[name="+visit8TrInputSS.eq(k).attr("name")+"]:checked").attr("ro") ){

					    				k = k + $("input[name="+visit8TrInputSS.eq(k).attr("name")+"]:checked").attr("ro") * 1

					    			}
					    		}
							}

						}

					}
					// 有个单选框不为空，则验证整行
					if($("input[name="+visit8TrInput.eq(j).attr("name")+"]:checked").length == 1){

						var visit8TrInputSS = $(visit8Tr.eq(i).find("input"))

						for(var k=0;k<visit8TrInputSS.length;k++){

							if(visit8TrInputSS.eq(k).attr("type") == "text" && visit8TrInputSS.eq(k).val() == ""){
								showTip("请输入或选择"+visit8TrInputSS.eq(k).get(0).alt, "error");
					    		visit8TrInputSS.eq(k).get(0).focus()
					    		return false;
							}
							if(visit8TrInputSS.eq(k).attr("type") == "radio"){

								if($("input[name="+visit8TrInputSS.eq(k).attr("name")+"]:checked").length == 0 ){

						    		showTip("请输入或选择"+visit8TrInputSS.eq(k).get(0).alt, "error");
						    		visit8TrInputSS.eq(k).get(0).focus()
						    		return false;
					    		}
					    		if($("input[name="+visit8TrInputSS.eq(k).attr("name")+"]:checked").length == 1){

					    			if($("input[name="+visit8TrInputSS.eq(k).attr("name")+"]:checked").attr("ro") ){

					    				k = k + $("input[name="+visit8TrInputSS.eq(k).attr("name")+"]:checked").attr("ro") * 1

					    			}
					    		}
							}

						}

					}
				}

			}

		}


	}

	showTip("保存成功", "success");
	$("html,body").animate({scrollTop:0},10);
	localStorage.setItem("plete2LeftNav",localStorage.getItem("plete2LeftNav")*1+1)

	if(localStorage.getItem("plete2LeftNav")*1 < 4){
		$("#visitbody").load("visit_1.html")
		visitRightNav(0)
	}else if(localStorage.getItem("plete2LeftNav")*1 == 4){
		$("#visitbody").load("complete.html")
	}else{
		localStorage.setItem("plete2LeftNav","1")
		$("#visitbody").load("visit_1.html")
		visitRightNav(0)
	}

	plate2Nav(localStorage.getItem("plete2LeftNav") * 1)
	// visitRightNav(8)
}
