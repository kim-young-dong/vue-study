<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
    <spinner :loading = 'loadingStatus'></spinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
import Spinner from './components/Spinner.vue'
import bus from './utills/bus.js'

export default {
 components: {
   ToolBar,
   Spinner,
 },
 data() {
   return {
     loadingStatus: false,
   };
 },
 methods: {
   startSpinner() {
     this.loadingStatus = true;
   },
   endSpinner() {
     this.loadingStatus = false;
   }
 },
 created() {
   bus.$on('start:spinner', this.startSpinner);
   bus.$on('end:spinner', this.endSpinner);
 },
 beforeDestroy() {
   bus.$off('start:spinner', this.startSpinner);
   bus.$off('end:spinner', this.endSpinner);
 }
  
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border-collapse: collapse;
  border-spacing: 0;
  list-style: none;
  
}
a {
  color: #33495e;
  text-decoration: none;
}
a:hover {
  color: #41b883;
}
a.router-link-exact-active {
  text-decoration: underline;
}
</style>
