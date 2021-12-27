<template>
  <div id="app">
    <Header/>
    <Herolist/>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Herolist from "./components/Herolist.vue"
export default {
  name: 'App',
  components: {
    Herolist,
    Header
  }
}
</script>

<style>

</style>
