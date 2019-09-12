/* 获取当前的时间,并转年月日时分秒，用于评论功能 */
function getTime() {
    let date = new Date();
    let seperator1 = "-";
    let seperator2 = ":";
    let month = date.getMonth() + 1;
    let strDate = date.getDate();
    let minutes = date.getMinutes();
    let Seconds = date.getSeconds();

    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    if (minutes >= 0 && minutes <= 9) {
        minutes = "0" + minutes;
    }
    if (Seconds >= 0 && Seconds <= 9) {
        Seconds = "0" + Seconds;
    }

    let currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + " " + date.getHours() + seperator2 + minutes;
    return currentdate;
}

// 警告弹框
var setTimeout1;
function alertWarn(msg){
  // 先清空时间函数，和已有的弹框
  if(setTimeout1){
    clearTimeout(setTimeout1);
  }
  $("body .alertWarn1").remove();
  $("body").append("<div class='alertWarn1'><img src='img/icon/jinggao.png'><span>"+msg+"</span></div>");
        setTimeout1 = setTimeout(function(){
            $("body .alertWarn1").remove();
            clearTimeout(setTimeout1);
        },3000)
}
// 成功弹框
var setTimeout2;
function alertSuc(msg){
  // 先清空时间函数，和已有的弹框
  if(setTimeout2){
    clearTimeout(setTimeout2);
  }
  $("body .alertSuc1").remove();
  $("body").append("<div class='alertSuc1'><img src='img/icon/suc.png'><span>"+msg+"</span></div>");
        setTimeout2 = setTimeout(function(){
          $("body .alertSun1").remove();
          clearTimeout(setTimeout2);
      },3000)
}
//没有认证，给出提示
function alertRZ(){
    $("body").append("<div class='bg'></div>")
    $("body").append("<div class='alertRZ'><p>认证后可操作，是否前往认证？</p><div><button class='alertRZHide'>取消</button><button class='alertRZOK'>确定</button></div></div>");
    $(".alertRZHide").click(function(){
      $(".bg").remove();
      $(".alertRZ").remove();
    })
    $(".alertRZOK").click(function(){
      window.location.href = "renzheng.html"
    })
}
//已经认证，给出提示
function alertRZ2(){
    $("body").append("<div class='bg'></div>")
    $("body").append("<div class='alertRZ'><p>你已提交认证，正在审核中</p><div><button class='alertRZOK'>确定</button></div></div>");
    $(".alertRZOK").click(function(){
      $(".bg").remove();
      $(".alertRZ").remove();
    })
}
//认证提交成功弹框
function alert3(msg){
    $("body .alertWarn1").remove();
    $("body").append("<div class='bg'></div>")
    $("body").append("<div class='alert3'><div><i class='iconfont icon-gou'></i></div><div>提交成功我们将在两个工作日内完成审核！</div></div>");

    setTimeout(function(){
          window.sessionStorage.setItem("renzheng","ok")
          window.history.go(-1);
          $(".bg").remove();
          $(".alert3").remove();
    },3000)

}
//发布成功弹框
function alert4(){
    $("body .alertWarn1").remove();
    $("body").append("<div class='bg'></div>")
    $("body").append("<div class='alert4'><i class='iconfont icon-gou'></i><span>发布成功！</span></div>");

    setTimeout(function(){
          window.history.go(-1);
          $(".bg").remove();
          $(".alert2").remove();
    },3000)
}

// 加载弹框
function alertload(){
  $("body").append("<div class='bg1'></div>")
  $("body").append("<div class='alertload'><i class='iconfont icon-jiazaizhong'></i></div>");
}
// 关闭加载弹框
function alertloadhide(){
  $(".bg1").remove();
  $(".alertload").remove();
}

$(document).ready(function(){
  // 顶部导航固定
  $(document).scroll(function(){
        var $scroll = $(document).scrollTop();
        if( $scroll > 100 ){
            $("#navBox").addClass('navBoxFlexd')
        }else{
            $("#navBox").removeClass('navBoxFlexd')
        }
    })

      // 禁止视频右键下载
      $(function(){
          $('video').bind('contextmenu',function() { return false; });
      })

      // 右侧精选列表只有一行的时候
      $(function(){
        $(".side-item").each(function(){
          if( $(this).height() <= 30  ){
              $(this).css("paddingTop","12px")
          }
        })
      })
      

// 非谷歌浏览器，文字字数超出范围显示省略号
$(function(){
    if(navigator.userAgent.toLowerCase().indexOf("chrome") == -1){
        $('.textlimit1').each(function(i, obj){
          var data;
          if($(this).text().length>=36){
            data=$(this).text().substr(0,36)+'...';
            $(this).text(data)
          }
      });
   }
})
  
})


function things(){
            $(".comment-main .my-rep:last").css("borderBottom","0px")
            $(".side-item:last").css("borderBottom","0px")
            $(".side-list2:last").css("borderBottom","0px")
            $(".repeatItem:last").css("borderBottom","0px")
            $(".repeatItem").parent().children(".repeatItem:last-child").css("borderBottom","0px")
            $(".repeatItem").parent().children(".repeatItem:last").css("borderBottom","0px")
}



function alertss(event){
      var e = event || window.event;
       var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
       var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
       var x = e.pageX || e.clientX + scrollX;
       var y = e.pageY || e.clientY + scrollY;
       //alert('x: ' + x + '\ny: ' + y);
       // return { 'x': x, 'y': y };
       console.log(x)
       console.log(y)
      $(".alertss").remove();
      $("body").append("<div class='alertss' style='margin-top:"+(y+20)+"px;margin-left:"+(x-150)+"px;'></div>")
      
}






// 更换绑定手机弹框
function alertphoneUp(){
  $("body").append("<div class='bg'></div>")
  $("body").append("<div class='phoneUp'><div class='setPhone'><p>请输入你要绑定的手机号码</p><input type='text' id='setPhoneText1' class='setPhoneText1' placeholder='请输入你的手机号码'><br/><input type='text' id='setPhoneText2' class='setPhoneText2' placeholder='请输入验证码'><button class='getC' onclick='getC()'>验证码</button><br/><button onclick='getCok()'>确认</button><button onclick='getCno()'>取消</button></div></div>");
}
function getC(){
  
  if( !(/^1(3|4|5|6|7|8)\d{9}$/.test($("#setPhoneText1").val())) ){
        console.log("手机号码错误")
        alertWarn("请输入正确手机号码");
        return false; 
    }else{
      console.log("手机号码正确")
      $(".getC").addClass('pex');
       $(".getC").text(60)
       var sett1 = setInterval(function(){
          var getcn = $(".getC").text()*1-1;
          if(getcn <= -1){
            clearInterval(sett1);
            $(".getC").text('验证码');
            $(".getC").removeClass('pex');
            return false;
          }
          $(".getC").text(getcn);

       },1000)
    }
}
function getCno(){
  $(".bg").remove();
  $(".phoneUp").remove();
}
function getCok(){
    if( !(/^1(3|4|5|6|7|8)\d{9}$/.test($("#setPhoneText1").val())) ){
        alertWarn("请输入正确手机号码");
        return false; 
    }else if( $("#setPhoneText2").val().length != 4 ){
        alertWarn("请输入正确的验证码");
        return false; 
    }else{
        console.log("绑定成功")
        alertSuc("绑定成功")
        $(".bg").remove();
        $(".phoneUp").remove();
    }
}






// 兑换邀请码失败
var setTimeout3;
function alertWarnC(msg){
  // 先清空时间函数，和已有的弹框
  if(setTimeout3){
    clearTimeout(setTimeout3);
  }
  $("body .alertWarnC").remove();
  $("body").append("<div class='alertWarnC'><img src='img/icon/jinggao.png'><span>"+msg+"</span></div>");
        setTimeout3 = setTimeout(function(){
            $("body .alertWarn1").remove();
            clearTimeout(setTimeout3);
        },2000)
}
// 兑换邀请码成功
var setTimeout4;
function alertSucC(msg){
  // 先清空时间函数，和已有的弹框
  if(setTimeout4){
    clearTimeout(setTimeout4);
  }
  $("body .alertSucC").remove();
  $("body").append("<div class='alertSucC'><img src='img/icon/suc.png'><span>"+msg+"</span></div>");
        setTimeout4 = setTimeout(function(){
          $("body .alertSun1").remove();
          clearTimeout(setTimeout4);
      },2000)
}