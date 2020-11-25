<template>
  <div class="navmenu-wrapper">
    <router-link v-for="(item,index) in navList" :key="index" tag="div" :to="item.url"> {{ item.label }} </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [{
        label: 'example',
        url: '/examples'
      }, {
        label: 'vue2',
        url: '/examples2'
      }]
    }
  }
}
</script>

<style lang='scss'>
.navmenu-wrapper{
  width: 100px;
  border-right: 1px solid #000;
}
</style>
