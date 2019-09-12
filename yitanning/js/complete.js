
var comlpeteTop = 0;

function visitOverThing1(sign){

	var visitOverInputArr = $("#visit_over input")

	if(sign == 1){
		comlpeteTop = 1
		for(var i=4;i<visitOverInputArr.length;i++){
			if(visitOverInputArr.eq(i).attr("type") == "text"){
				visitOverInputArr.eq(i).val("")
				visitOverInputArr.eq(i).attr("disabled","disabled");
			}else{
				visitOverInputArr.eq(i).get(0).checked=false;
				visitOverInputArr.eq(i).attr("disabled","disabled");
			}
		}
		$(".visit-over-timeinput1").eq(0).removeAttr("disabled");
		$(".visit-over-timeinput2").eq(0).val("")
		$(".visit-over-timeinput2").eq(0).attr("disabled","disabled");
	}else{
		comlpeteTop = 2
		for(var i=2;i<visitOverInputArr.length;i++){
			visitOverInputArr.eq(i).removeAttr("disabled");
		}
		$(".visit-over-timeinput1").eq(0).val("")
		$(".visit-over-timeinput1").eq(0).attr("disabled","disabled");
	}
}

function visitOverThing2(sign){

	var vi = $(".vo-input1")
	var strss = ".vo-input1"

	for(var i=0;i<6;i++){
		strss = ".vo-input1"
		if( sign == i ){
			$(strss + i).eq(0).removeAttr("disabled");
			if($(strss + i).eq(1)){
				$(strss + i).eq(1).removeAttr("disabled");
			}
		}else{
			$(strss + i).eq(0).val("");
			$(strss + i).eq(0).attr("disabled","disabled");
			if($(strss + i).eq(1)){
				$(strss + i).eq(1).val("");
			$(strss + i).eq(1).attr("disabled","disabled");
			}
		}
	}
}


function completeSave(){

	var visitOverInputArr = $(".visit_over input")

	if(comlpeteTop == 1){

		for(var i=0;i<visitOverInputArr.length;i++){
			if(visitOverInputArr.eq(i).attr("type") == "text" && visitOverInputArr.eq(i).val() == ""){
				showTip("请选择"+visitOverInputArr.eq(i).get(0).alt, "error");
	    		visitOverInputArr.eq(i).get(0).focus()
	    		return false;
			}else if(visitOverInputArr.eq(i).attr("type") == "text" && visitOverInputArr.eq(i).val() != ""){
				if(visitOverInputArr.eq(i).attr("ro")){
					i = i + $("input[name="+visitOverInputArr.eq(i).attr("name")+"]:checked").attr("ro") * 1
				}
			}
			if(visitOverInputArr.eq(i).attr("type") == "radio"){
				if($("input[name="+visitOverInputArr.eq(i).attr("name")+"]:checked").length == 0 ){
		    		showTip("请选择"+visitOverInputArr.eq(i).get(0).alt, "error");
		    		visitOverInputArr.eq(i).get(0).focus()
		    		return false;
	    		}
	    		if($("input[name="+visitOverInputArr.eq(i).attr("name")+"]:checked").length == 1){
	    			if($("input[name="+visitOverInputArr.eq(i).attr("name")+"]:checked").attr("ro") ){
	    				i = i + $("input[name="+visitOverInputArr.eq(i).attr("name")+"]:checked").attr("ro") * 1
	    			}
	    		}
			}
		}

	}else{

		for(var i=2;i<visitOverInputArr.length;i++){
			if(visitOverInputArr.eq(i).attr("type") == "text" && visitOverInputArr.eq(i).val() == ""){
				showTip("请选择"+visitOverInputArr.eq(i).get(0).alt, "error");
	    		visitOverInputArr.eq(i).get(0).focus()
	    		return false;
			}else if(visitOverInputArr.eq(i).attr("type") == "text" && visitOverInputArr.eq(i).val() != ""){
				if(visitOverInputArr.eq(i).attr("ro")){
					i = i + $("input[name="+visitOverInputArr.eq(i).attr("name")+"]:checked").attr("ro") * 1
				}
			}
			if(visitOverInputArr.eq(i).attr("type") == "radio"){
				if($("input[name="+visitOverInputArr.eq(i).attr("name")+"]:checked").length == 0 ){
		    		showTip("请选择"+visitOverInputArr.eq(i).get(0).alt, "error");
		    		visitOverInputArr.eq(i).get(0).focus()
		    		return false;
	    		}
	    		if($("input[name="+visitOverInputArr.eq(i).attr("name")+"]:checked").length == 1){
	    			if($("input[name="+visitOverInputArr.eq(i).attr("name")+"]:checked").attr("ro") ){
	    				i = i + $("input[name="+visitOverInputArr.eq(i).attr("name")+"]:checked").attr("ro") * 1
	    			}
	    		}
			}
		}

	}

	localStorage.setItem("plete2LeftNav",localStorage.getItem("plete2LeftNav")*1+1)
	if(localStorage.getItem("plete2LeftNav")*1 > 4){
		localStorage.setItem("plete2LeftNav","1")
		localStorage.setItem("userChooise","1")
		plete1Show();
		plate1Nav(1)
	}else{
		plate2Nav(localStorage.getItem("plete2LeftNav") * 1)
	}
}

