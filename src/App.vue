<template>
  <div id="app">
    <router-view/>
    <home></home>
  </div>
</template>

<script>
import Home from './views/Home'

export default {
  name: 'App',
  components:{
    Home,
  }
}
</script>

<style>
@import './assets/css/base.css';
@import './assets/css/normalize.css';

</style>
