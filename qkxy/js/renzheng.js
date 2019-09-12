var v = new Vue({
    el: "#app",
    data: {
        
    },
    created:function() {
        
        

    },
    mounted:function() {
       
    
    },

    methods: {
       
        //#医生已经认证，修改信息
        ysrzImg:function(){
            $("#ysrzInp").click();
            $("#ysrzInp").live("change", function() {
                    var reader = new FileReader();
                    var file = $("#ysrzInp")[0].files[0];
                    var imgUrlBase64;
                    if (file) {
                        imgUrlBase64 = reader.readAsDataURL(file);
                        reader.onload = function (e) {//读取成功后的回调
                            $("#ysimg").attr('src',reader.result); 
                        }
                    }
            });
        },
        ysChange:function(){
            var suinp = $(".ysrz input")
            for(var i=0;i<suinp.length;i++){
                if( suinp.eq(i).attr("type") ==  "text"){
                    if( suinp.eq(i).val() ==  ""){
                        alertWarn("请输入"+suinp.eq(i).attr("alt"))
                        return false;
                    }
                }
              
            }
            alert3("提交成功，我们将在2个工作日内完成审核！");
        },
        //医生已经认证，修改信息#
        tofeed:function(){
            if(this.userMsg){
                window.location.href = "user.html?type=or"
            }else{
                window.location.href = "login.html"
            }
        },
        

    }

})



