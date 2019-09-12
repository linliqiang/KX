var v = new Vue({
    el: "#app",
    data: {
        acc:"",
        pas:"",
    },
    created:function() {
    },
    mounted:function() {
    },
    methods: {
        loginBut:function(){
            if( this.acc == ""){
                mui.toast('请填写用户账号',{ duration:'long', type:'div' });
                return false; 
            }
            if( this.pas == ""){
                mui.toast('请填写用户密码',{ duration:'long', type:'div' });
                return false; 
            }
            window.location.href = "index.html"
        }
    }
})


