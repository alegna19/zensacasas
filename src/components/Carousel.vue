<template>
  <q-page class="page">
    <div class="margin">
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
  .margin
    padding-left 20px
    padding-right 20px
  @media (max-width: 600px)
    .custom
      border-radius 0
      box-shadow 0 0 10px rgba(0, 0, 0, 0)
    .margin
      padding-left 0
      padding-right 0
    .page
      min-height 580px !important
</style>
