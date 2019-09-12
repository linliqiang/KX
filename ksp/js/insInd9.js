function oi(node){
    var val = $(node).val()
    var alts = $(node).attr("alt")
    if( !(/^\d+(\.\d+)?$/.test(val)) && val != ""){
        mui.toast('请输入正确'+alts,{ duration:'long', type:'div' });
        return false; 
    }
}



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
    	fpg:"",
    	hbalc:"",
    	imgData:[],
        title:""
    },
    created:function() {
        var tp = window.location.href.split("?");
        if( tp[1] ){
            this.title = "随访检查指标"
        }else{
            this.title = "初诊检查指标"
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

            if( that.fpg != "" ){
                if( !(/^\d+(\.\d+)?$/.test(that.fpg)) ){
                    mui.toast('请填写正确FPG与2hPG',{ duration:'long', type:'div' });
                    return false; 
                }
            }
            if( that.hbalc != "" ){
                if( !(/^\d+(\.\d+)?$/.test(that.hbalc)) ){
                    mui.toast('请填写正确HbAIc',{ duration:'long', type:'div' });
                    return false; 
                }
            }

            // if( !(/^\d+(\.\d+)?$/.test(that.fpg)) ){
            //     mui.toast('请填写正确FPG与2hPG',{ duration:'long', type:'div' });
            //     return false; 
            // }
            // if( !(/^\d+(\.\d+)?$/.test(that.hbalc)) ){
            //     mui.toast('请填写正确HbAlc',{ duration:'long', type:'div' });
            //     return false; 
            // }
            
           

            if( window.sessionStorage.getItem('choiseLink')*1 == 2 ){
                window.sessionStorage.setItem('choiseLink',window.sessionStorage.getItem('choiseLink')*1+1)
            }

            // 如果从随访进来，则改变随访步奏变量
            var tp = window.location.href.split("?");
            if( tp[1] ){
                if( window.sessionStorage.getItem('choiseLink2')*1 == 1 ){
                    window.sessionStorage.setItem('choiseLink2',window.sessionStorage.getItem('choiseLink2')*1+1)
                }
                window.location.href = "preMsg.html?type=2"
            }else{
                window.location.href = "preMsg.html"
            }

            
       

        },
        imgBigShow:function(imgUrl){
            console.log(imgUrl);
            alertBigImg(imgUrl);
        }


    }
})