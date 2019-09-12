
window.onpageshow = function(event){
        //event.persisted 判断浏览器是否有缓存, 有为true, 没有为false
        if (event.persisted) {  
            window.location.reload();
        }
    }


var v = new Vue({
    el: "#app",
    data: {
        oid:"",
        sign: 1,
        noticeid: "",
        data: {
            meet: {
                Id: "",
                Title: "",
                OSSName: "",
                StartDate: "",
                EndDate: "",
                Content: "",
                Places: "",
                CreateDate: "",
                SourIndex: "",
                State: "",
                PathUrl: "",
                PSSPath: "",
                TeacherName: "",
                TeacherRemake: "",
            }
        },
    },
    created: function () {

        // var needRefresh = sessionStorage.getItem("need-refresh");
        // if(needRefresh){
        //   sessionStorage.removeItem("need-refresh");
        //   location.reload();
        // }


        var that = this;
        var par = window.location.href.split("?")[1];//id
        var ids = par.split("&")[0];
        var id = ids.split("=")[1];//获取到id
        that.noticeid = id;
        var oids = par.split("&")[1];
        var oid = oids.split("=")[1];//获取到openid
        that.oid = oid;
        $.ajax({
            type: "get",
            url: ajaxurl() + "/meet/detail.aspx?meetId=" + id,
            success: function (data) {
                that.data = json1(data);
            },
            error: function (jqXHR) {
                console.log("失败")
            }
        });
        $.ajax({
                type: "get",
                url: ajaxurl() + "/meet/IsBao.aspx?openId="+oid+"&meetId=" + id,
                success: function (data) {
                    var datas = json1(data);
                   if(datas.code == 200){
                   }else{
                        $(".sub button").css("background","#cccccc")
                        $(".sub button").text("已报名")
                   }
                },
                error: function (jqXHR) {
                    console.log("失败")
                }
            });
    },
    mounted: function () {
    },
    methods: {
        butThing: function (index) {
            this.sign = index
        },
        longTimeToData: function (value) {
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
        signUp: function () {
            var that = this;
            $.ajax({
                type: "get",
                url: ajaxurl() + "/meet/IsBao.aspx?openId="+that.oid+"&meetId=" + that.noticeid,
                success: function (data) {
                    var datas = json1(data);
                   if(datas.code == 200){
                        window.location.href = "http://xhyx.ikangxun.com/ydbf/signUp.html?noticeid=" + that.noticeid+"&openId=" + that.oid;
                   }else{
                        mui.toast('您已经报名了',{ duration:'long', type:'div' });
                   }
                },
                error: function (jqXHR) {
                    console.log("失败")
                }
            });  
        }
    }
})





