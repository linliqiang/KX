function changepic() {
	var reads= new FileReader();
	var f=document.getElementById('file').files[0];
	reads.readAsDataURL(f);
	reads.onload=function (e) {
		var that = this;
		v.imgData.push(
						{
							imgUrl:that.result
						}
			)
	console.log(v.imgData)
	};
}

var v = new Vue({
    el: "#app",
    data: {
    	msg:"",
    	imgData:[],
        title:""
    },
    created:function() {
        var tp = window.location.href.split("?");
        if( tp[1] ){
            this.title = "随访用药方案"
        }else{
            this.title = "原始用药方案"
        }
    },
    mounted:function() {
    },
    methods: {
    	
    	upThing:function(){
    		$("#file").click();
    	},

        subBut:function(){

            var that = this;

            if( that.imgData.length <= 0 ){
                mui.toast('请上传病例图片',{ duration:'long', type:'div' });
                return false; 
            }
            
            if( window.sessionStorage.getItem('choiseLink')*1 == 1 ){
                window.sessionStorage.setItem('choiseLink',window.sessionStorage.getItem('choiseLink')*1+1)
            }

            // 如果从随访进来，则改变随访步奏变量
            var tp = window.location.href.split("?");
            if( tp[1] ){
                // console.log("000")
                if( window.sessionStorage.getItem('choiseLink2')*1 == 0 ){
                    window.sessionStorage.setItem('choiseLink2',window.sessionStorage.getItem('choiseLink2')*1+1)
                }
                
            }
            
            if( window.localStorage.getItem('choise') == "4" ){

                
                if( tp[1] ){
                    window.location.href = "insInd4.html?type=2"
                }else{
                    window.location.href = "insInd4.html"
                }

            }else if( window.localStorage.getItem('choise') == "5" ){
               
                if( tp[1] ){
                    window.location.href = "insInd5.html?type=2"
                }else{
                    window.location.href = "insInd5.html"
                }

            }else if( window.localStorage.getItem('choise') == "9" ){
               
                if( tp[1] ){
                    window.location.href = "insInd9.html?type=2"
                }else{
                    window.location.href = "insInd9.html"
                }

            }else{
                if( tp[1] ){
                    window.location.href = "insInd.html?type=2"
                }else{
                    window.location.href = "insInd.html"
                }
            }

        },
        imgBigShow:function(imgUrl){
            console.log(imgUrl);
            alertBigImg(imgUrl);
        }


    }
})