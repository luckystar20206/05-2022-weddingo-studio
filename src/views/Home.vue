<template>
  <div class="home">
    <Cover></Cover>
    <Quote></Quote>
  </div>
</template>

<style lang="scss">


</style>

<script>
 import Cover from '@/components/Cover.vue'
 import Quote from '@/components/Quote.vue'

export default {
  name: 'Home',
  components: {
    Quote,
    Cover
  }
}
</script>
