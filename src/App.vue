<template>
  <div id="app">
      <LayoutComponent/>

  </div>
</template>

<script>
import store from './vuex/store';
import LayoutComponent from './components/layout/LayoutComponent';

export default {
  name: 'app',
  components: {
    LayoutComponent
  },
  store
}
</script>

<style lang="scss">
    @import "./styles/app";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
