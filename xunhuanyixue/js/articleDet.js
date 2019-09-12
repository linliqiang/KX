var v = new Vue({
    el: "#app",
    data: {
        data:{},
    },
    created:function() {
        var id = window.location.href.split("?")[1].split("=")[1];
        var that = this;
        $.ajax({
            type:"get",
            url:ajaxurl()+"/activle/detail.aspx?activleId="+id,
            success:function(data){
                console.log(data)

                that.data = json1(data);

            },
            error:function(jqXHR){
                console.log("失败")
            }
        });
    },
    mounted:function() {

    },
    methods: {



    }
})





