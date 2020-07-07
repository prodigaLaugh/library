<template>
  <div id="app">
    <div @click="show=true" style="cursor: pointer;">没事 点一下</div>
  
	
	<alert :flag.sync="show">
		<template #header>
			<h2>this is header</h2>
		</template>
		<template #footer>
			<h2>this is footer</h2>
		</template>
	</alert>
  </div>
</template>

<script>
import Alert from './components/index'
import Vue from 'vue'
Vue.use(Alert)

export default {
  name: 'App',
  components: {
    Alert
  },
  data(){
	return{
		show:false
	}
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
