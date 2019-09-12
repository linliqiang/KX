var v = new Vue({
    el: "#app",
    data: {
        sign:1,
        data:{
            meet:{
                Id:"",
                Title:"",
                OSSName:"",
                StartDate:"",
                EndDate:"",
                Content:"",
                Places:"",
                CreateDate:"",
                SourIndex:"",
                State:"",
                PathUrl:"",
                PSSPath:"",
                TeacherName:"",
                TeacherRemake:"",
            }
        },
    },
    created:function() {
        var that = this;
        var id = window.location.href.split("?")[1].split("=")[1];
        that.noticeid = id;
        $.ajax({
            type:"get",
            url:ajaxurl()+"/meet/detail.aspx?meetId="+id,
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
      butThing:function(index){
        this.sign = index
      },
      longTimeToData:function(value) {
            if (value == "" || value == null) {
                return "--";
            }
            var date = new Date(parseInt(value));//时间戳为10位需*1000，时间戳为13位的话不需乘1000
            var Y = date.getFullYear();
            var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
            var D = date.getDate();
            var h = date.getHours();
            var m = date.getMinutes();
            var s = date.getSeconds();
            var day = D >= 10 ? D : ("0" + D);
            var hour = h >= 10 ? h : ("0" + h);
            var mintu = m >= 10 ? m : ("0" + m);
            var sec = s >= 10 ? s : ("0" + s);
            return Y + "-" + M + "-" + day;
        },
    }
})





