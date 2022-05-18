<template>
  <div class="home">
    <Cover></Cover>
  </div>
</template>

<style lang="scss">


</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
 import Cover from '@/components/Cover.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
    Cover
  }
}
</script>
