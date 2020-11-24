<template>
  <div class="app-container">
    <section class="app-container--nav">
      <nav-menu></nav-menu>
    </section>
    <section class="app-container--main">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import NavMenu from './components/NavMenu'
export default {
  components: { NavMenu }
}
</script>

<style lang='scss'>
.app-container{
  width: 100%;
  box-sizing: border-box;
  display: flex;
  &--main{
    padding: 20px;
  }
}
</style>
