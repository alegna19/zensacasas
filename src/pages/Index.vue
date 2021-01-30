<template>
  <q-page >
  <div class="carousel-front">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      height="100vh"
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="~assets/images/house1.jpg" >
        <div class="front-text">
          <h4 class="text-primary">VENTA DE CASAS</h4>
          <p class="text-white">En el Eje Cafetero, revise nuestros inmuebles ssss </p>
          <q-btn class="q-mr-md" color="positive" label="Ver Inmuebles"></q-btn>
          <q-btn color="positive" outline label="Contactenos"></q-btn>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" img-src="~assets/images/house4.jpeg"> 
        <div class="front-text">
          <h5 class="text-primary">VENTA DE FINCAS Y TERRENOS</h5>
          <p class="text-white">En el Eje Cafetero, revise nuestros inmuebles ssss </p>
          <q-btn class="q-mr-md" color="positive" label="Ver Inmuebles"></q-btn>
          <q-btn color="positive" icon="las la-phone-volume" outline label="Contactenos"></q-btn>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" img-src="~assets/images/house5.jpg">      
        <div class="front-text">
          <h5 class="text-primary">VENTA DE APARTAMENTOS</h5>
          <p class="text-white">En el Eje Cafetero, revise nuestros inmuebles ssss </p>
          <q-btn class="q-mr-md" color="positive" label="Ver Inmuebles"></q-btn>
          <q-btn color="positive" icon="las la-phone-volume" outline label="Contactenos"></q-btn>
        </div>
      </q-carousel-slide>
      
    </q-carousel>
  </div>

  <!-- 2 -->
  

  </q-page>
</template>

<script>
export default {
  data () {
    return {
      slide: 1,
      autoplay: true
    }
  }
}
</script>


<style lang="stylus" scoped>
  p
    font-size 26px
    color white
  .carousel-front
    margin-top -50px
  .front-text
    width 600px
    background-color rgba(0,0,0, 0.4)
    border-radius 8px
    position absolute
    margin-top 250px
    margin-left 10%
    padding 20px
    text-align justify
</style>
