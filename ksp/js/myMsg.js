function oi2(node){
    var val = $(node).val()
    if( !(/^1(3|4|5|6|7|8)\d{9}$/.test(val))  &&  val.length >= 11){
        mui.toast('请输入正确手机号码',{ duration:'long', type:'div' });
        return false; 
    }
}


var v = new Vue({
    el: "#app",
    data: {
        name:"流川枫",
        hospital:"四川华西医院",
        department:"神经外科",
        duty:"主治医生",
        phone:"15859565655",
    },
    created:function() {
    },
    mounted:function() {
    },
    methods: {

        updateOk:function(){
            if( this.name == ""){
                mui.toast('请填写姓名',{ duration:'long', type:'div' });
                return false; 
            }
            if( this.hospital == ""){
                mui.toast('请填写医院',{ duration:'long', type:'div' });
                return false; 
            }
            if( this.department == ""){
                mui.toast('请填写科室',{ duration:'long', type:'div' });
                return false; 
            }
            if( this.duty == ""){
                mui.toast('请填写职称',{ duration:'long', type:'div' });
                return false; 
            }
            if( this.duty == ""){
                mui.toast('请填写职称',{ duration:'long', type:'div' });
                return false; 
            }
            if(!(/^1(3|4|5|6|7|8)\d{9}$/.test(this.phone)) ){
                mui.toast('请填写正确手机号码',{ duration:'long', type:'div' });
                return false; 
            }else{
                alertMod();
            }
            
        }

    }
})



