function oi(node){
    var val = $(node).val()
    if( !(/^\d{1,3}$/.test(val)) ){
        mui.toast('请输入正确年龄',{ duration:'long', type:'div' });
        return false; 
    }
}

function oi2(node){
    var val = $(node).val()
    if( !(/^1(3|4|5|6|7|8)\d{9}$/.test(val))  &&  val.length >= 11){
        mui.toast('请输入正确手机号码',{ duration:'long', type:'div' });
        return false; 
    }
}




function changepic() {
	var reads= new FileReader();
	var f=document.getElementById('file').files[0];

    // console.log(document.getElementById('file').files[0])
    // alert(document.getElementById('file').files[1])
    
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

//为单选框添加样式和方法1，其他单选框样式同理
function initRadioStyle1(className){

    //男女单选框添加样式
    var radioArr = $(className);

    for (var i = 0; i < radioArr.length; i++) {
        radioArr.eq(i).after("<img class='radio-style-img' src='images/v2.jpg' alt=''>");
    };

    //男女单选框添加事件
    radioArr.click(function () {
        var names = $(this).attr("name");
        var cspan = $("input[name='" + names + "']");
        for (var i = 0; i < cspan.length; i++) {
            cspan.eq(i).next().attr('src','images/v2.jpg');
        }
        $(this).next().attr('src','images/v1.jpg');
        // console.log( $(".radio-style:checked").length);
        // console.log($('.radio-style:checked').val());
        v.sex = $('.radio-style:checked').val()
    })

}



var v = new Vue({
    el: "#app",
    data: {
    	time:"",
    	name:"",
    	sex:"",
    	age:"",
    	phone:"",
    	number:"",
    	imgData:[]
    },
    created:function() {
    	
    },
    mounted:function() {
        initRadioStyle1(".radio-style");
    },
    methods: {
    	time1:function(){
            var that = this;
			var dtpicker = new mui.DtPicker({ 
			    "type": "date",//设置日历初始视图模式 
			    "beginDate": new Date(2000, 00, 01),//设置开始日期 
			    "endDate": new Date(getTime()[0], getTime()[1], getTime()[2]),//设置结束日期
			})
			dtpicker.show(function(e) { 
			    console.log(e.value); 
			    document.getElementById('time1').value=e.value
                that.time = e.value
			})
    	},
    	changepic:function(event){
    		var reads= new FileReader();
			var f=document.getElementById('file').files[0];
			reads.readAsDataURL(f);
			reads.onload=function (e) {
			document.getElementById('show').src=this.result;
			};
    	},
    	upThing:function(){
    		$("#file").click();
    	},

        subBut:function(){

            var that = this;

            if( that.imgData.length <= 0 ){
                mui.toast('请上传病例图片',{ duration:'long', type:'div' });
                return false; 
            }

            if( that.age !="" ){
                if( !(/^\d{1,3}$/.test(that.age))){
                    mui.toast('请填写正确的年龄',{ duration:'long', type:'div' });
                    return false; 
                }
            }

            if( that.phone !="" ){
                if(!(/^1(3|4|5|6|7|8)\d{9}$/.test(that.phone)) ){
                    mui.toast('请填写正确电话号码',{ duration:'long', type:'div' });
                    return false; 
                }
            }

            


         

            // console.log(that.time)
            // console.log(that.name)
            // console.log(that.sex)
            // console.log(that.age)
            // console.log(that.phone)
            // console.log(that.number)
         

            if( window.sessionStorage.getItem('choiseLink')*1 == 0 ){
                window.sessionStorage.setItem('choiseLink',window.sessionStorage.getItem('choiseLink')*1+1)
            }
            window.location.href = "medPro.html"
        },
        imgBigShow:function(imgUrl){
            console.log(imgUrl);
            alertBigImg(imgUrl);
        }


    }
})



