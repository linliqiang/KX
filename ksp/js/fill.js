window.sessionStorage.setItem('choiseLink', 0);
window.sessionStorage.setItem('choiseLink2', 0);

var datas = [
			{
				title:"卡双平替换或联用胰岛素药物治疗不佳患者的疗效研究",
			},
			{
				title:"卡双平替换或联用磺脲类药物治疗不佳患者的疗效研究",
			},
			{
				title:"卡双平联合卡博平的治疗方案的疗效研究",
			},
			{
				title:"卡双平治疗2型糖尿病合并非酒精性脂肪肝患者的疗效研究",
			},
			{
				title:"卡双平治疗PCOS患者的疗效研究",
			},
			{
				title:"卡双平治疗二甲双胍疗效不佳患者的疗效研究",
			},
			{
				title:"卡双平对新诊断患者三联治疗的疗效研究",
			},
			{
				title:"新诊断患者起始单用卡双平的疗效研究",
			},
			{
				title:"质量与疗效一致性评价后的替换研究",
			},
			{
				title:"其他",
			}
];



var v = new Vue({
    el: "#app",
    data: {
        sign1:100,
        data:[],
    },
    created:function() {
    	this.data = json3(datas);
    },
    mounted:function() {
    },
    methods: {
    	choise:function(index){
    		this.sign1 = index;
    	},
    	choiseOk:function(){

    		var that = this;

    		if( that.sign1 == 100 ){
    			mui.toast('请选择一个病例类型',{ duration:'long', type:'div' });
    		}else{

    			var choiseTitles = that.data[that.sign1].title;

	    		if( this.sign1 == 3 ){
			
					window.localStorage.setItem('choise', "4");
					window.localStorage.setItem('choiseTitle', choiseTitles);
				}else if( this.sign1 == 4 ){
			
					window.localStorage.setItem('choise', "5");
					window.localStorage.setItem('choiseTitle', choiseTitles);
				}else if( this.sign1 == 8 ){
				
					window.localStorage.setItem('choise', "9");
					window.localStorage.setItem('choiseTitle', choiseTitles);
				}else{
				
					window.localStorage.setItem('choise', "1236789");
					window.localStorage.setItem('choiseTitle', choiseTitles);
				}
				
				window.location.href = "choise.html"

    		}

    		
	    }

    }
})