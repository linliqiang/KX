

$(document).ready(function(){



})

var v = new Vue({
    el: "#app",
    data: {
       cnSign:1,
    },
    created:function() {
      var loca = window.location.href.split("?")
        if(loca[1]){
          var loc = loca[1].split("=")[1]
          console.log(loc)
          this.cnSign = loc*1
        }
    },
    mounted:function() {
    },
    methods: {
      cnT:function(sign){
      	this.cnSign = sign
      },
    }
})