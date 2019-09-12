

$(document).ready(function(){

	$(function () {
	    var isPageHide = false;
	    window.addEventListener('pageshow', function () {
	      	if (isPageHide) {
	        	window.location.reload();
	      	}
	    });
	    window.addEventListener('pagehide', function () {
	      	isPageHide = true;
	    });
	 })

	
	var choiseLinkn = window.sessionStorage.getItem('choiseLink')*1

	var item1Arr = $(".item1");

	for(var i=0;i<=choiseLinkn;i++){

		(function(j){

				item1Arr.eq(j).click(function(){
					if( j == 0 ){
						console.log("患者信息")
						window.location.href = "padMsg.html"
					}else if( j == 1 ){
						console.log("原始用药方案")
						window.location.href = "medPro.html"
					}else if( j == 2 ){
						console.log("初诊检查指标")
						if( window.localStorage.getItem('choise') ==  4 ){
							window.location.href = "insInd4.html"
						}else if( window.localStorage.getItem('choise') ==  5 ){
							window.location.href = "insInd5.html"
						}else if( window.localStorage.getItem('choise') ==  9 ){
							window.location.href = "insInd9.html"
						}else{
							window.location.href = "insInd.html"
						}
						
					}else{
						console.log("处方信息")
						window.location.href = "preMsg.html"
					}
				})

		})(i);
		
	}



	// #cholise页面，四项基本信息，用户没有填写的项目，点击的时候给友好提示
	console.log(choiseLinkn)
	for(var i=choiseLinkn+1;i<item1Arr.length;i++){

		(function(j){

				item1Arr.eq(j).click(function(){

					mui.toast('请您先将前面信息填写完整',{ duration:'long', type:'div' });

				})

		})(i);
		
	}
	// cholise页面用户没有填写的项目，点击的时候给友好提示#










	var choiseLinkn2 = window.sessionStorage.getItem('choiseLink2')*1;

	var item1Arr2 = $(".choise1BoxB .item2");

	for(var i=0;i<=choiseLinkn2;i++){

		(function(j){

				item1Arr2.eq(j).click(function(){
					if( j == 0 ){
						console.log("原始用药方案")	
						window.location.href = "medPro.html?type=2"
					}else if( j == 1 ){
						console.log("初诊检查指标")
						if( window.localStorage.getItem('choise') ==  4 ){
							window.location.href = "insInd4.html?type=2"
						}else if( window.localStorage.getItem('choise') ==  5 ){
							window.location.href = "insInd5.html?type=2"
						}else if( window.localStorage.getItem('choise') ==  9 ){
							window.location.href = "insInd9.html?type=2"
						}else{
							window.location.href = "insInd.html?type=2"
						}
						
					}else{
						console.log("处方信息")
						window.location.href = "preMsg.html?type=2"
					}
				})

		})(i);
		
	}

	// #cholise页面，随访信息，用户没有填写的项目，点击的时候给友好提示
	console.log(choiseLinkn2)
	for(var i=choiseLinkn2+1;i<item1Arr2.length;i++){

		(function(j){

				item1Arr2.eq(j).click(function(){

					mui.toast('请您先将前面信息填写完整',{ duration:'long', type:'div' });

				})

		})(i);
		
	}
	// cholise页面用户没有填写的项目，点击的时候给友好提示#




	// $(".choise1BoxB .item2").click(function(){
	// 	if( $(this).index() == 0 ){
	// 		console.log("原始用药方案")	
	// 		window.location.href = "medPro.html?type=2"
	// 	}else if( $(this).index() == 1 ){
	// 		console.log("初诊检查指标")
	// 		if( window.localStorage.getItem('choise') ==  4 ){
	// 			window.location.href = "insInd4.html?type=2"
	// 		}else if( window.localStorage.getItem('choise') ==  5 ){
	// 			window.location.href = "insInd5.html?type=2"
	// 		}else{
	// 			window.location.href = "insInd.html?type=2"
	// 		}
	// 	}else{
	// 		console.log("处方信息")
	// 		window.location.href = "preMsg.html?type=2"
	// 	}
	// })

})


var v = new Vue({
    el: "#app",
    data: {
    	title:window.localStorage.getItem('choiseTitle'),
    	choiseLink:window.sessionStorage.getItem('choiseLink')*1,
    	choiseLink2:window.sessionStorage.getItem('choiseLink2')*1
    },
    created:function() {
    	this.title = window.localStorage.getItem('choiseTitle');
    	this.choiseLink = window.sessionStorage.getItem('choiseLink')*1;
    	this.choiseLink2 = window.sessionStorage.getItem('choiseLink2')*1
    },
    mounted:function() {
    },
    methods: {

    }
})