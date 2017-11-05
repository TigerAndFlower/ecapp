<template>
  <div id="app">
    <ec-header></ec-header>
    <ec-content></ec-content>
    <ec-footer></ec-footer>
  </div>
</template>

<script>
import header from './components/header/header'
import content from './components/content/content'
import footer from './components/footer/footer'
export default {
  name: 'app',
  components: {
    'ec-header': header,
    'ec-content': content,
    'ec-footer': footer
  }
}
</script>

<style lang="less">
  #app{
    position: relative;
    overflow: hidden;
    height: 100%;
    width: 100%;
    *{
      box-sizing: border-box;
    }
  }
</style>
