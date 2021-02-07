<template>
  <q-page>
    <div class="q-pl-md q-pr-md">
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      autoplay
      infinite
      height="500px"
      class="custom"
    >
      <slot></slot>
    </q-carousel>
  </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      slide: 1
    }
  }
}
</script>

<style lang="stylus" scoped>
  .custom
    border-radius 8px
    box-shadow 0 0 10px rgba(0, 0, 0, 0.3)
</style>
