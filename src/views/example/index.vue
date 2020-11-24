<template>
  <div>
    <example />
    <div>app name:{{appName}}</div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState('app', ['appName'])
  },
  mounted () {
    this.getUserInfo()
  },
  methods: {
    ...mapActions('app', ['getUserInfo'])
  }
}
</script>

<style>

</style>
