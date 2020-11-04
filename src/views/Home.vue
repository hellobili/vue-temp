<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div> store in app 'appName' : {{appName}}</div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed: {
    ...mapState('app', ['appName'])
  }
}
</script>
