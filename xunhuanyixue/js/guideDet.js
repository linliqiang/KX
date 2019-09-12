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
        fujian:function(url){
            window.location.href = "http://xhyx.ikangxun.com/assets/js/pdfjs/web/viewer.html?url_file=/assets/aspx/OSSIndex.aspx?type=1&path="+url;
        },
    }
})



