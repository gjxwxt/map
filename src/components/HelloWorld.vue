<template>
  <div style="position:relative;width: 500px;height: 500px;">
    <div class="hello" style="width:500px;height:500px;background-color: black;position: absolute;z-index: 1;">
    </div>
    <div id="back" style="position:absolute;z-index:2;color:red;bottom: 25px;right: 25px;" v-show="show">返回</div>
  </div>
</template>

<script>
  import mapOption from '@/components/options/mapOption'
  import {getMapJson,getMapData} from '@/api/getmap.js'
  import ChineseHelper from '@/utils/ConvertPinyin.js'
  import relation from '@/utils/codeToArea'
  let option = mapOption;
  //用于上行，保留父级的code和data（series.data）
  let areaCode='10000';//'100000'
  let dataPool=[];
  let areaLevel='china';
  let areaName='china';//进来默认是china，点击之后会修改，在dataPool中记录原来的值，点击返回时传入原来的areaName值进行渲染
export default {
  name: 'HelloWorld',
  props: {
    code:String,//拿着从主页传过来的code去找地图的json，但是还要知道是省级还是市级，之后
    token:String
  },
  data() {
    return {
      chart:null,
      show:false,
    }
  },
  created(){
    // areaCode=this.code;
  },
  mounted(){
    this.changeCode(areaCode);
    this.init();
    this.render(areaCode,areaLevel,areaName,false);
    this.bindEvent();
  },
  methods:{
     /**
     * @description: 用于解决一开始只传入行政编码code，来查找相关的地区
     * @param {String} areaCode 
     */
    changeCode(areaCode){
      if(areaCode=='10000'){
        //  areaLevel='china';
        //  areaName='china';
      }else{
        let codeStr=areaCode.slice(2);
       let area = relation(areaCode);
       areaName = ChineseHelper.ConvertPinyin(area);
        if(codeStr=='0000'){
           areaLevel='province';
        }else{
          areaLevel='city'
        }
      }
    },

    init(){
      const chart=document.querySelector('.hello');
      this.chart=this.$echarts.init(chart);
    },
    bindEvent(){
      let that=this;
      const back = document.querySelector('#back');
      this.chart.on('click',that.areaClick );
      back.addEventListener('click',that.back)
    },

    async changeOption(){
      this.chart.showLoading();
      if( areaCode == '10000') {
         this.show=false;
         option.series[0].map=areaName;
         await  getMapData(areaCode).then(res=>{  
          option.series[0].data=res.data.data;
        })
      }
      else{
        this.show=dataPool.length!==0?true:false;
        areaName = ChineseHelper.ConvertPinyin(areaName);
        option.series[0].map=areaName;
        await  getMapData(areaCode).then(res=>{
          option.series[0].data=res.data.data;
        })
      }
    },

    async render(areaCode,areaLevel){
      let that = this;
      await this.changeOption();//修改series.data和series.name
      getMapJson(areaCode,areaLevel).then(res=>{
        that.$echarts.registerMap(areaName,res.data);
      }).then(()=>{
        that.chart.setOption(option,true);
        that.chart.hideLoading();
      })
    },



    //点击拿着该地区的name换code之后，拿着code获取data修改option并且拿着code获取地图的json文件去注册
    async areaClick(params){   
        if(areaLevel!='city'){
          let arr={};
           arr.areaCode = areaCode;
           arr.areaName = areaName;
           arr.areaLevel=areaLevel;
           dataPool.push(arr)
        }
        //入栈code和series.data，只记录一二级,
        let name= params.name;//用name去获取code，用code再去找地图json
        areaName=name;
         //获取点击地区的code
        await getMapJson(areaCode,areaLevel).then(res=>{
             let item = res.data.features.find(item=>item.properties.name==name);
             areaCode=item.properties.adcode;
             areaLevel=item.properties.level;
         });
        this.render(areaCode,areaLevel);
    },

    //点击返回按钮，拿dataPool中的code和level获取地图信息和已存的data进行渲染
    back(){
      let data=dataPool.pop();
      areaName=data.areaName;
      areaCode=data.areaCode;
      areaLevel=data.areaLevel;
      this.render(areaCode,areaLevel);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
