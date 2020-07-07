// main.js
// import Vue from "vue";
// import App from "./App.vue";



// Vue.config.productionTip = false;

// new Vue({
//   render: h => h(App)
// }).$mount("#app");







import alert1 from './components/Alert.vue'
 



alert1.install = Vue => Vue.component("alert1", alert1);

export default alert1;