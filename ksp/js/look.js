

//为单选框添加样式和方法1，其他单选框样式同理
function initRadioStyle1(className){

    //男女单选框添加样式
    var radioArr = $(className);

    for (var i = 0; i < radioArr.length; i++) {
        radioArr.eq(i).after("<img class='radio-style-img' src='images/v2.jpg' alt=''>");
    };

}



var v = new Vue({
    el: "#app",
    data: {
        dataTitle:window.localStorage.getItem('choise')*1,
    	data:{

            // 基础数据
            padMsg:{//患者基本信息
                time:"2019-02-02",
                name:"流川枫",
                sex:"男",
                age:"20",
                phone:"15858565956",
                number:"23twrgh343hg",
                imgData:[
                        {
                            imgUrl:"images/eximg1.jpg"
                        },
                        {
                            imgUrl:"images/eximg1.jpg"
                        },
                        {
                            imgUrl:"images/eximg1.jpg"
                        },
                        {
                            imgUrl:"images/eximg1.jpg"
                        }
                ]
            },
            medPro:{
                msg:"用药方案用药方案用药方案用药方案用药方案用药方案用药方案用药方案用药方案用药方案用药方案",
                imgData:[
                        {
                            imgUrl:"images/eximg1.jpg"
                        }
                ]
            },
            insInd:{
                fpg:"15",
                hbalc:"15",
                fins:"15",
                imgData:[
                        {
                            imgUrl:"images/eximg1.jpg"
                        }
                ]
            },
            insInd4:{
                fpg:"15",
                lh:"15",
                fins:"15",
                ast:"15",
                alt:"15",
                imgData:[
                        {
                            imgUrl:"images/eximg1.jpg"
                        }
                ]
            },
            insInd5:{
                fpg:"15",
                lh:"15",
                fins:"15",
                imgData:[
                        {
                            imgUrl:"images/eximg1.jpg"
                        }
                ]
            },
            insInd9:{
                fpg:"15",
                hbalc:"15",
                imgData:[
                        {
                            imgUrl:"images/eximg1.jpg"
                        }
                ]
            },
            preMsg:{
                msg:"用药方案用药方案用药方案用药方案用药方案用药方案用药方案用药方案用药方案用药方案用药方案",
                imgData:[
                        {
                            imgUrl:"images/eximg1.jpg"
                        }
                ]
            },

            //随访数据
            medPro2:{
                msg:"用药方案用药方案用药方案用药方案用药方案用药方案用药方案用药方案用药方案用药方案用药方案",
                imgData:[
                        {
                            imgUrl:"images/eximg1.jpg"
                        }
                ]
            },
            insInd2:{
                fpg:"15",
                hbalc:"15",
                fins:"15",
                imgData:[
                        {
                            imgUrl:"images/eximg1.jpg"
                        }
                ]
            },
            insInd24:{
                fpg:"15",
                lh:"15",
                fins:"15",
                ast:"15",
                alt:"15",
                imgData:[
                        {
                            imgUrl:"images/eximg1.jpg"
                        }
                ]
            },
            insInd25:{
                fpg:"15",
                lh:"15",
                fins:"15",
                imgData:[
                        {
                            imgUrl:"images/eximg1.jpg"
                        }
                ]
            },
            insInd29:{
                fpg:"15",
                hbalc:"15",
                imgData:[
                        {
                            imgUrl:"images/eximg1.jpg"
                        }
                ]
            },
            preMsg2:{
                msg:"用药方案用药方案用药方案用药方案用药方案用药方案用药方案用药方案用药方案用药方案用药方案",
                imgData:[
                        {
                            imgUrl:"images/eximg1.jpg"
                        }
                ]
            },

        },
    },
    created:function() {
    	
    },
    mounted:function() {
        initRadioStyle1(".radio-style");
        if( this.data.padMsg.sex == "男" ){
            $(".radio-style").eq(0).next().attr('src','images/v1.jpg');
        }else{
            $(".radio-style").eq(1).next().attr('src','images/v1.jpg');
        }
        
    },
    methods: {

        imgBigShow:function(imgUrl){
            console.log(imgUrl);
            alertBigImg(imgUrl);
        }


    }
})



