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
            this.title = "随访处方信息"
        }else{
            this.title = "处方信息"
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

            if( window.sessionStorage.getItem('choiseLink')*1 == 3 ){
                window.sessionStorage.setItem('choiseLink',window.sessionStorage.getItem('choiseLink')*1+1)
                // 这里基础4步填完，并且不是从随访访问进来，则设置随访步奏变量
                window.sessionStorage.setItem('choiseLink2',0)
            }



            // 如果从随访进来，则改变随访步奏变量
            var tp = window.location.href.split("?");
            if( tp[1] ){
                if( window.sessionStorage.getItem('choiseLink2')*1 == 2 ){
                    window.sessionStorage.setItem('choiseLink2',window.sessionStorage.getItem('choiseLink2')*1+1)
                }
                window.location.href = "choise.html?type=2"
            }else{
                window.location.href = "choise.html"
            }
           

            
            


        },
        imgBigShow:function(imgUrl){
            console.log(imgUrl);
            alertBigImg(imgUrl);
        }


    }
})