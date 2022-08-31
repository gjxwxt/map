<template>
  <div id="app">
    <HelloWorld/>
    <!-- <HelloWorld :code=code :token=token /> -->

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  // 一进页面要知道你是哪个地方的，发过来一个code，需要根据code找到你这个地区的json文件，同时发送请求带着code和token获取该地区相应地数据
  // data(){
  //   return {
  //     code:null,
  //     token:null
  //   }
  // },
  // created(){
  //   let areaCode = window.location.href;
  //   let mapToken = window.location.href;
  //   const areaCode_s = areaCode.indexOf("areaCode=");
  //   const areaCode_e = areaCode.indexOf("&t");
  //   const t_s = mapToken.indexOf("t=");
  //   this.code = areaCode.substring(areaCode_s + 9, areaCode_e);
  //   this.token = mapToken.substring(t_s + 2, this.mapToken.length);
  // },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
