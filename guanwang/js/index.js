var rollerSign = 0;

function resetWin(){
        console.log("resetWin")
      // 根据浏览器高度设置首页滚屏高度
      var h = $(window).height()*1 - 88;  
      if(h<=768){
        h = 768
      }
      $("#ban").height(h);
      $("#f2").height(h);
      $("#f3").height(h);
      $("#f4").height(h);
      $("#f5").height(h);
      $("#f6").height(h);
      $("#f7").height(h);

    // 添加鼠标滚轮事件
    // var rollerSign = 0;
    var timer;

    $(document).off('mousewheel DOMMouseScroll');
    $(document).on('mousewheel DOMMouseScroll', onMouseScroll);
    function onMouseScroll(e){

        if(timer){
          clearTimeout(timer)
        }

        timer = setTimeout(function(){
            e.preventDefault();
            var wheel = e.originalEvent.wheelDelta || -e.originalEvent.detail;
            var delta = Math.max(-1, Math.min(1, wheel) );

            if(delta<0){//向下滚动
                console.log('向下滚动');

                if( ($(window).height()*1 - 88) < 768 ){

                    var height_a = 768-(($(window).height()*1 - 88));

                    if(rollerSign == 0){
                        var f2Top = $("#f2").offset().top;
                        if(f2Top == $(window).height()){

                                    if(rollerSign>=7){
                                      rollerSign = 7;
                                    }else{
                                      rollerSign = rollerSign + 1;
                                    }

                                    if(rollerSign == 0){
                                        $('html,body').animate({scrollTop:0},500);
                                    }else if(rollerSign == 1){

                                        console.log("屏幕小于768，banner滚动到f2")
                                        $("#f2 .item").animate({opacity:0},10).animate({opacity:1},2000);
                                        $('html,body').animate({scrollTop:h},500);
                                        
                                    }else if(rollerSign == 2){
                                        $('html,body').animate({scrollTop:h*2},500);
                                    }else if(rollerSign == 3){
                                        $('html,body').animate({scrollTop:h*3},500);
                                    }else if(rollerSign == 4){
                                        $('html,body').animate({scrollTop:h*4},500);
                                    }else if(rollerSign == 5){
                                        $('html,body').animate({scrollTop:h*5},500);
                                    }else if(rollerSign == 6){
                                        $('html,body').animate({scrollTop:h*6},500);
                                    }else{
                                        $('html,body').animate({scrollTop:h*6+364},500);
                                    }
                        }else{
                                    $('html,body').animate({scrollTop: height_a },500);
                        }
                    }else if(rollerSign == 1){
                      var f3Top = $("#f3").offset().top;
                        if(f3Top == $(window).height()){

                                    if(rollerSign>=7){
                                      rollerSign = 7;
                                    }else{
                                      rollerSign = rollerSign + 1;
                                    }

                                    if(rollerSign == 0){
                                        $('html,body').animate({scrollTop:0},500);
                                    }else if(rollerSign == 1){
                                        $('html,body').animate({scrollTop:h},500);
                                    }else if(rollerSign == 2){

                                        console.log("屏幕宽度小于768，f2滚到f3")
                                        $('html,body').animate({scrollTop:h*2},500);
                                        $("#f3_li1").animate({opacity:0,marginTop:"200px"},10).animate({opacity:1,marginTop:"0px"},300);
                                        $("#f3_li2").animate({opacity:0,marginTop:"200px"},10).animate({opacity:1,marginTop:"0px"},800);
                                        $("#f3_li3").animate({opacity:0,marginTop:"200px"},10).animate({opacity:1,marginTop:"0px"},1300);
                                        $("#f3_li4").animate({opacity:0,marginTop:"200px"},10).animate({opacity:1,marginTop:"0px"},1800);
                                        $("#f3_li5").animate({opacity:0,marginTop:"200px"},10).animate({opacity:1,marginTop:"0px"},2300);

                                    }else if(rollerSign == 3){
                                        $('html,body').animate({scrollTop:h*3},500);
                                    }else if(rollerSign == 4){
                                        $('html,body').animate({scrollTop:h*4},500);
                                    }else if(rollerSign == 5){
                                        $('html,body').animate({scrollTop:h*5},500);
                                    }else if(rollerSign == 6){
                                        $('html,body').animate({scrollTop:h*6},500);
                                    }else{
                                        $('html,body').animate({scrollTop:h*6+364},500);
                                    }
                        }else{
                                    $('html,body').animate({scrollTop: height_a + h},500);
                        }
                    }else if(rollerSign == 2){
                      var f4Top = $("#f4").offset().top;
                        if(f4Top == $(window).height()){

                                    if(rollerSign>=7){
                                      rollerSign = 7;
                                    }else{
                                      rollerSign = rollerSign + 1;
                                    }

                                    if(rollerSign == 0){
                                        $('html,body').animate({scrollTop:0},500);
                                    }else if(rollerSign == 1){
                                        $('html,body').animate({scrollTop:h},500);
                                    }else if(rollerSign == 2){
                                        $('html,body').animate({scrollTop:h*2},500);
                                    }else if(rollerSign == 3){
                                        v.f4Sign = 0;
                                        console.log("屏幕宽度小于768，f3滚到f4")
                                        $('html,body').animate({scrollTop:h*3},500);
                                        $('#f4_ban_li1 div').animate({opacity:1},2000);
                                        
                                    }else if(rollerSign == 4){
                                        $('html,body').animate({scrollTop:h*4},500);
                                    }else if(rollerSign == 5){
                                        $('html,body').animate({scrollTop:h*5},500);
                                    }else if(rollerSign == 6){
                                        $('html,body').animate({scrollTop:h*6},500);
                                    }else{
                                        $('html,body').animate({scrollTop:h*6+364},500);
                                    }
                        }else{
                                    $('html,body').animate({scrollTop: height_a + h*2},500);
                        }
                    }else if(rollerSign == 3){
                      var f5Top = $("#f5").offset().top;
                        if(f5Top == $(window).height()){

                                    if(rollerSign>=7){
                                      rollerSign = 7;
                                    }else{
                                      rollerSign = rollerSign + 1;
                                    }

                                    if(rollerSign == 0){
                                        $('html,body').animate({scrollTop:0},500);
                                    }else if(rollerSign == 1){
                                        $('html,body').animate({scrollTop:h},500);
                                    }else if(rollerSign == 2){
                                        $('html,body').animate({scrollTop:h*2},500);
                                    }else if(rollerSign == 3){
                                        $('html,body').animate({scrollTop:h*3},500);
                                    }else if(rollerSign == 4){
                                        $('html,body').animate({scrollTop:h*4},500);
                                    }else if(rollerSign == 5){
                                        $('html,body').animate({scrollTop:h*5},500);
                                    }else if(rollerSign == 6){
                                        $('html,body').animate({scrollTop:h*6},500);
                                    }else{
                                        $('html,body').animate({scrollTop:h*6+364},500);
                                    }
                        }else{
                                    $('html,body').animate({scrollTop: height_a + h*3},500);
                        }
                    }else if(rollerSign == 4){
                      var f6Top = $("#f6").offset().top;
                        if(f6Top == $(window).height()){

                                    if(rollerSign>=7){
                                      rollerSign = 7;
                                    }else{
                                      rollerSign = rollerSign + 1;
                                    }

                                    if(rollerSign == 0){
                                        $('html,body').animate({scrollTop:0},500);
                                    }else if(rollerSign == 1){
                                        $('html,body').animate({scrollTop:h},500);
                                    }else if(rollerSign == 2){
                                        $('html,body').animate({scrollTop:h*2},500);
                                    }else if(rollerSign == 3){
                                        $('html,body').animate({scrollTop:h*3},500);
                                    }else if(rollerSign == 4){
                                        $('html,body').animate({scrollTop:h*4},500);
                                    }else if(rollerSign == 5){
                                        $('html,body').animate({scrollTop:h*5},500);
                                    }else if(rollerSign == 6){
                                        $('html,body').animate({scrollTop:h*6},500);
                                    }else{
                                        $('html,body').animate({scrollTop:h*6+364},500);
                                    }
                        }else{
                                    $('html,body').animate({scrollTop: height_a + h*4},500);
                        }
                    }else if(rollerSign == 5){
                       var f7Top = $("#f7").offset().top;
                        if(f7Top == $(window).height()){

                                    if(rollerSign>=7){
                                      rollerSign = 7;
                                    }else{
                                      rollerSign = rollerSign + 1;
                                    }

                                    if(rollerSign == 0){
                                        $('html,body').animate({scrollTop:0},500);
                                    }else if(rollerSign == 1){
                                        $('html,body').animate({scrollTop:h},500);
                                    }else if(rollerSign == 2){
                                        $('html,body').animate({scrollTop:h*2},500);
                                    }else if(rollerSign == 3){
                                        $('html,body').animate({scrollTop:h*3},500);
                                    }else if(rollerSign == 4){
                                        $('html,body').animate({scrollTop:h*4},500);
                                    }else if(rollerSign == 5){
                                        $('html,body').animate({scrollTop:h*5},500);
                                    }else if(rollerSign == 6){
                                        $('html,body').animate({scrollTop:h*6},500);
                                    }else{
                                        $('html,body').animate({scrollTop:h*6+364},500);
                                    }
                        }else{
                                    $('html,body').animate({scrollTop: height_a + h*5},500);
                        }
                    }else if(rollerSign == 6){
                      var footerTop = $("#footer").offset().top;
                        if(footerTop == $(window).height()){

                                    if(rollerSign>=7){
                                      rollerSign = 7;
                                    }else{
                                      rollerSign = rollerSign + 1;
                                    }

                                    if(rollerSign == 0){
                                        $('html,body').animate({scrollTop:0},500);
                                    }else if(rollerSign == 1){
                                        $('html,body').animate({scrollTop:h},500);
                                    }else if(rollerSign == 2){
                                        $('html,body').animate({scrollTop:h*2},500);
                                    }else if(rollerSign == 3){
                                        $('html,body').animate({scrollTop:h*3},500);
                                    }else if(rollerSign == 4){
                                        $('html,body').animate({scrollTop:h*4},500);
                                    }else if(rollerSign == 5){
                                        $('html,body').animate({scrollTop:h*5},500);
                                    }else if(rollerSign == 6){
                                        $('html,body').animate({scrollTop:h*6},500);
                                    }else{
                                        $('html,body').animate({scrollTop:h*6+364},500);
                                    }
                        }else{
                                    $('html,body').animate({scrollTop: height_a + h*6},500);
                        }
                    }else{
                        $('html,body').animate({scrollTop: height_a + h*6+364},500);
                        
                    }
                }else{
                    if(rollerSign>=7){
                      rollerSign = 7;
                    }else{
                      rollerSign = rollerSign + 1;
                    }
                    if(rollerSign == 0){
                        $('html,body').animate({scrollTop:0},500);
                    }else if(rollerSign == 1){
                        console.log("屏幕高度大于768，从banner滚动到f2")
                        $("#f2 .item").animate({opacity:0},10).animate({opacity:1},2000);
                        $('html,body').animate({scrollTop:h},500);
                    }else if(rollerSign == 2){
                        console.log("屏幕高度大于768，从f2滚动到f3")
                        $('html,body').animate({scrollTop:h*2},500);
                        $("#f3_li1").animate({opacity:0,marginTop:"200px"},10).animate({opacity:1,marginTop:"0px"},300);
                        $("#f3_li2").animate({opacity:0,marginTop:"200px"},10).animate({opacity:1,marginTop:"0px"},800);
                        $("#f3_li3").animate({opacity:0,marginTop:"200px"},10).animate({opacity:1,marginTop:"0px"},1300);
                        $("#f3_li4").animate({opacity:0,marginTop:"200px"},10).animate({opacity:1,marginTop:"0px"},1800);
                        $("#f3_li5").animate({opacity:0,marginTop:"200px"},10).animate({opacity:1,marginTop:"0px"},2300);
                    }else if(rollerSign == 3){
                        v.f4Sign = 0;
                        $('html,body').animate({scrollTop:h*3},500);
                        console.log("屏幕高度大于768，从f3滚动到f4");
                        $('#f4_ban_li1 div').animate({opacity:1},2000);

                    }else if(rollerSign == 4){
                        $('html,body').animate({scrollTop:h*4},500);
                        console.log("屏幕高度大于768，从f4滚动到f5")
                    }else if(rollerSign == 5){
                        $('html,body').animate({scrollTop:h*5},500);
                        console.log("屏幕高度大于768，从f5滚动到f6")
                    }else if(rollerSign == 6){
                        $('html,body').animate({scrollTop:h*6},500);
                        console.log("屏幕高度大于768，从f6滚动到f7")
                    }else{
                        $('html,body').animate({scrollTop:h*6+364},500);
                    }
                }
            }else{//向上滚动
                console.log('向上滚动');

                console.log(rollerSign)

                if( ($(window).height()*1 - 88) < 768 ){

                    var height_a = 768-(($(window).height()*1 - 88));

                    if(rollerSign == 0){
                        $('html,body').animate({scrollTop: 0 },500);
                    }else if(rollerSign == 1){

                        var f2Top = $("#f2").offset().top;
                        console.log(f2Top)
                        if(f2Top == 88){

                                    if(rollerSign<=0){
                                      rollerSign = 0;
                                    }else{
                                      rollerSign = rollerSign - 1;
                                    } 

                                    if(rollerSign == 0){
                                        $('html,body').animate({scrollTop:0},500);
                                    }else if(rollerSign == 1){
                                        $('html,body').animate({scrollTop:h},500);
                                    }else if(rollerSign == 2){
                                        $('html,body').animate({scrollTop:h*2},500);
                                    }else if(rollerSign == 3){
                                        $('html,body').animate({scrollTop:h*3},500);
                                    }else if(rollerSign == 4){
                                        $('html,body').animate({scrollTop:h*4},500);
                                    }else if(rollerSign == 5){
                                        $('html,body').animate({scrollTop:h*5},500);
                                    }else if(rollerSign == 6){
                                        $('html,body').animate({scrollTop:h*6},500);
                                    }else{
                                        $('html,body').animate({scrollTop:h*6+364},500);
                                    }
                        }else{
                                    $('html,body').animate({scrollTop:h},500);
                        }
                    }else if(rollerSign == 2){
                        var f3Top = $("#f3").offset().top;
                        console.log(f3Top)
                        if(f3Top == 88){

                                    if(rollerSign<=0){
                                      rollerSign = 0;
                                    }else{
                                      rollerSign = rollerSign - 1;
                                    } 

                                    if(rollerSign == 0){
                                        $('html,body').animate({scrollTop:0},500);
                                    }else if(rollerSign == 1){
                                        $('html,body').animate({scrollTop:h},500);
                                    }else if(rollerSign == 2){
                                        $('html,body').animate({scrollTop:h*2},500);
                                    }else if(rollerSign == 3){
                                        $('html,body').animate({scrollTop:h*3},500);
                                    }else if(rollerSign == 4){
                                        $('html,body').animate({scrollTop:h*4},500);
                                    }else if(rollerSign == 5){
                                        $('html,body').animate({scrollTop:h*5},500);
                                    }else if(rollerSign == 6){
                                        $('html,body').animate({scrollTop:h*6},500);
                                    }else{
                                        $('html,body').animate({scrollTop:h*6+364},500);
                                    }
                        }else{
                                    $('html,body').animate({scrollTop:h*2},500);
                        }
                    }else if(rollerSign == 3){
                        var f4Top = $("#f4").offset().top;
                        console.log(f4Top)
                        if(f4Top == 88){

                                    if(rollerSign<=0){
                                      rollerSign = 0;
                                    }else{
                                      rollerSign = rollerSign - 1;
                                    } 

                                    if(rollerSign == 0){
                                        $('html,body').animate({scrollTop:0},500);
                                    }else if(rollerSign == 1){
                                        $('html,body').animate({scrollTop:h},500);
                                    }else if(rollerSign == 2){
                                        $('html,body').animate({scrollTop:h*2},500);
                                    }else if(rollerSign == 3){
                                        $('html,body').animate({scrollTop:h*3},500);
                                    }else if(rollerSign == 4){
                                        $('html,body').animate({scrollTop:h*4},500);
                                    }else if(rollerSign == 5){
                                        $('html,body').animate({scrollTop:h*5},500);
                                    }else if(rollerSign == 6){
                                        $('html,body').animate({scrollTop:h*6},500);
                                    }else{
                                        $('html,body').animate({scrollTop:h*6+364},500);
                                    }
                        }else{
                                   $('html,body').animate({scrollTop:h*3},500);
                        }
                    }else if(rollerSign == 4){
                        var f5Top = $("#f5").offset().top;
                        console.log(f5Top)
                        if(f5Top == 88){

                                    if(rollerSign<=0){
                                      rollerSign = 0;
                                    }else{
                                      rollerSign = rollerSign - 1;
                                    } 

                                    if(rollerSign == 0){
                                        $('html,body').animate({scrollTop:0},500);
                                    }else if(rollerSign == 1){
                                        $('html,body').animate({scrollTop:h},500);
                                    }else if(rollerSign == 2){
                                        $('html,body').animate({scrollTop:h*2},500);
                                    }else if(rollerSign == 3){
                                        $('html,body').animate({scrollTop:h*3},500);
                                    }else if(rollerSign == 4){
                                        $('html,body').animate({scrollTop:h*4},500);
                                    }else if(rollerSign == 5){
                                        $('html,body').animate({scrollTop:h*5},500);
                                    }else if(rollerSign == 6){
                                        $('html,body').animate({scrollTop:h*6},500);
                                    }else{
                                        $('html,body').animate({scrollTop:h*6+364},500);
                                    }
                        }else{
                                   $('html,body').animate({scrollTop:h*4},500);
                        }
                    }else if(rollerSign == 5){
                        var f6Top = $("#f6").offset().top;
                        console.log(f6Top)
                        if(f6Top == 88){

                                    if(rollerSign<=0){
                                      rollerSign = 0;
                                    }else{
                                      rollerSign = rollerSign - 1;
                                    } 

                                    if(rollerSign == 0){
                                        $('html,body').animate({scrollTop:0},500);
                                    }else if(rollerSign == 1){
                                        $('html,body').animate({scrollTop:h},500);
                                    }else if(rollerSign == 2){
                                        $('html,body').animate({scrollTop:h*2},500);
                                    }else if(rollerSign == 3){
                                        $('html,body').animate({scrollTop:h*3},500);
                                    }else if(rollerSign == 4){
                                        $('html,body').animate({scrollTop:h*4},500);
                                    }else if(rollerSign == 5){
                                        $('html,body').animate({scrollTop:h*5},500);
                                    }else if(rollerSign == 6){
                                        $('html,body').animate({scrollTop:h*6},500);
                                    }else{
                                        $('html,body').animate({scrollTop:h*6+364},500);
                                    }
                        }else{
                                   $('html,body').animate({scrollTop:h*5},500);
                        }
                    }else if(rollerSign == 6){
                         var f7Top = $("#f7").offset().top;
                        console.log(f7Top)
                        if(f7Top == 88){

                                    if(rollerSign<=0){
                                      rollerSign = 0;
                                    }else{
                                      rollerSign = rollerSign - 1;
                                    } 

                                    if(rollerSign == 0){
                                        $('html,body').animate({scrollTop:0},500);
                                    }else if(rollerSign == 1){
                                        $('html,body').animate({scrollTop:h},500);
                                    }else if(rollerSign == 2){
                                        $('html,body').animate({scrollTop:h*2},500);
                                    }else if(rollerSign == 3){
                                        $('html,body').animate({scrollTop:h*3},500);
                                    }else if(rollerSign == 4){
                                        $('html,body').animate({scrollTop:h*4},500);
                                    }else if(rollerSign == 5){
                                        $('html,body').animate({scrollTop:h*5},500);
                                    }else if(rollerSign == 6){
                                        $('html,body').animate({scrollTop:h*6},500);
                                    }else{
                                        $('html,body').animate({scrollTop:h*6+364},500);
                                    }
                        }else{
                                   $('html,body').animate({scrollTop:h*6},500);
                        }
                    }else{
                        var f7Top = $("#f7").offset().top;
                        console.log(f7Top)
                        if(f7Top == 88){

                                    if(rollerSign<=0){
                                      rollerSign = 0;
                                    }else{
                                      rollerSign = rollerSign - 1;
                                    } 

                                    if(rollerSign == 0){
                                        $('html,body').animate({scrollTop:0},500);
                                    }else if(rollerSign == 1){
                                        $('html,body').animate({scrollTop:h},500);
                                    }else if(rollerSign == 2){
                                        $('html,body').animate({scrollTop:h*2},500);
                                    }else if(rollerSign == 3){
                                        $('html,body').animate({scrollTop:h*3},500);
                                    }else if(rollerSign == 4){
                                        $('html,body').animate({scrollTop:h*4},500);
                                    }else if(rollerSign == 5){
                                        $('html,body').animate({scrollTop:h*5},500);
                                    }else if(rollerSign == 6){
                                        $('html,body').animate({scrollTop:h*6},500);
                                    }else{
                                        $('html,body').animate({scrollTop:h*6+364},500);
                                    }

                        }else{
                                   $('html,body').animate({scrollTop:h*6},500);
                        }
                    }

                }else{
                    if(rollerSign<=0){
                      rollerSign = 0;
                    }else{
                      rollerSign = rollerSign - 1;
                    } 

                    if(rollerSign == 0){
                        $('html,body').animate({scrollTop:0},500);
                    }else if(rollerSign == 1){
                        $('html,body').animate({scrollTop:h},500);
                        console.log("屏幕高度大于768，从f3滚动到f2")
                    }else if(rollerSign == 2){
                        $('html,body').animate({scrollTop:h*2},500);
                        console.log("屏幕高度大于768，从f4滚动到f3")
                    }else if(rollerSign == 3){
                        $('html,body').animate({scrollTop:h*3},500);
                        console.log("屏幕高度大于768，从f5滚动到f4")
                    }else if(rollerSign == 4){
                        $('html,body').animate({scrollTop:h*4},500);
                        console.log("屏幕高度大于768，从f6滚动到f5")
                    }else if(rollerSign == 5){
                        $('html,body').animate({scrollTop:h*5},500);
                        console.log("屏幕高度大于768，从f7滚动到f6")
                    }else if(rollerSign == 6){
                        $('html,body').animate({scrollTop:h*6},500);
                    }else{
                        $('html,body').animate({scrollTop:h*6+364},500);
                    }
                }
            }    
        },200)
    }
}

$(document).ready(function(){

  resetWin();

  var mao = window.location.href.split("#");
  var maodian = mao[1]
  console.log(maodian)

  if(maodian == "m4"){
    console.log("锚点")
        v.f4Sign = 4;
        rollerSign = 3;
        resetWin();
        $('#f4_ban_li1 div').animate({opacity:1},2000);
        var fh4 = $("#f4").offset().top;
        $('html,body').animate({scrollTop:fh4-88},500);
         


        




  }



  window.onresize = function(){
    resetWin();
  }


  $("#ica4").click(function(){
    window.location.href = "#m4";
    v.f4Sign = 4;
    rollerSign = 3;
    resetWin();
    $('#f4_ban_li1 div').animate({opacity:1},2000);
    var f4h = $("#f4").offset().top;

    console.log(f4h)

    if(f4h != 88){
        var h2 = $(window).height()*1 - 88;  
        if(h2<=768){
            h2 = 768
        }
        $('html,body').animate({scrollTop:h2*3},500);
        
    }
    

  })



  // banner
  $(function(){ 
    $('.Yl-container').YlSlide({
      wrapper:'.Yl-wrapper',
      slideClass:'.Yl-slide',
      stylePrefix:'.Yl-',
      slideLength:3,
      pages:true,
      pagination:'.Yl-pagination',
      pagingSelect:'.Yl-pagination-bullet-active',
      autoplay:50000,       
      imgTemplate:{
        0:['<div class="Yl-img0"></div>'],
        1:['<div class="Yl-img1"></div>','<div class="Yl-img11"></div>'],
        2:['<div class="Yl-img2"></div>','<div class="Yl-img21"></div>']
      },
      fontTemplate:{
        // 0:['<div class="Yl-font0">康迅传媒</div>','<div class="Yl-font1">传播健康，创造价值</div>','<div class="Yl-font2">康迅传媒</div>'],
        // 1:['<div class="Yl-font0">康迅传媒</div>','<div class="Yl-font1">全国首届基层心血管病综合风险管理大会</div>','<div class="Yl-font2">康迅传媒</div>'],
        // 2:['<div class="Yl-font0">康迅传媒</div>','<div class="Yl-font1">新起点，再出发</div>','<div class="Yl-font2">康迅传媒</div>']
      },
      fontAnimationMode:{
        0:['fadeInUp','fadeInUp','slideInLeft'],
        1:['fadeInUp','fadeInUp','slideInLeft'],
        2:['fadeInUp','fadeInUp','slideInLeft']
      },
      customTemplate:{
        // 0:['<div class="Yl-Button"><a href="javascript:void(0);">查看详情</a></div>'],
        // 1:['<div class="Yl-Button"><a href="javascript:void(0);">查看详情</a></div>'],
        // 2:['<div class="Yl-Button"><a href="javascript:void(0);">查看详情</a></div>']
      },
      callback:function(e){
        //整个dom加载完成后的回调函数、切换动画前的回调            
      },
      before: function(e) {
        //页面切换前的回调函数
      }, 
      after: function(e) {            
        //页面切换完成后的回调函数
        
      }
    }); 
  });
})

var v = new Vue({
    el: "#app",
    data: {
        f4Sign: 0,
        dirBoxUl: 0,
    },
    created:function() {
    },
    mounted:function() {
    },
    methods: {

        nav:function(sign){
            if(true){

            }else if(true){

            }else if(true){
                
            }else if(true){
                
            }
        },


        f4bant:function(sign){
            console.log(sign)
            this.f4Sign = sign
        },

        f4ban:function(sign){
            if(sign==0){
              this.dirBoxUl = this.dirBoxUl - 1
              if(this.dirBoxUl<0){
                this.dirBoxUl = 1
              }
              var ml = -666 * this.dirBoxUl;
              $(".dirBoxUl").animate({marginLeft:ml});
            }else{
              this.dirBoxUl = this.dirBoxUl + 1
              if(this.dirBoxUl>1){
                this.dirBoxUl = 0
              }
              var ml = -666 * this.dirBoxUl;
              $(".dirBoxUl").animate({marginLeft:ml});
            }
        },


        mes:function(sign){
            window.location.href = "media_platform.html?type="+sign
        },

        bus:function(sign){
            window.location.href = "business_cooperation.html?type="+sign
        },

        nes:function(sign){
            window.location.href = "news.html?type="+sign
        },

        abs:function(sign){
            window.location.href = "about_us.html?type="+sign
        },

    }
})