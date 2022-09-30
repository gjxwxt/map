<template>
  <div id="app">
    <HelloWorld/>
    <!-- <HelloWorld :code=code :token=token /> -->
      <AboutViewVue></AboutViewVue>
    
    <div>{{$t("hello")}}</div>
    <input type="text" :placeholder="$t('hello')">
    <div @click="change">点击切换</div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AboutViewVue from './components/AboutView.vue';
export default {
  name: 'App',
  // 一进页面要知道你是哪个地方的，发过来一个code，需要根据code找到你这个地区的json文件，同时发送请求带着code和token获取该地区相应地数据
  data(){
    return {
      // code:null,
      // token:null
      n:1
    }
  },
  methods:{
    change(){
      let lang = localStorage.getItem('lang') ?? '' ;
      lang = lang == 'en_US' ? '' : 'en_US'
      localStorage.setItem('lang',lang)
      // console.log(this.$i18n.locale)
      // this.$i18n.locale = this.$i18n.locale == 'en' ? 'zh' :'en'
      window.location.reload()
    }
  },
  components: {
    HelloWorld,
    AboutViewVue
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
