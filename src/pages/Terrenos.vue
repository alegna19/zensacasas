<template>
  <q-page>
    <div class="container"></div>
    <div class="q-ma-xl inmuebles">
      <h3 class="titulo">Terrenos en Venta</h3>
      <div class="row">
        <div class="col-12 align-center">
          <div class="custom-card q-pa-xl">
            <i class="las la-exclamation-circle"></i>
            <h5>Aun no tenemos terrenos/lotes en venta</h5>
            <p>Sin embargo estamos actualizando informacion con frecuenta. Visitanos!</p>
          </div>
        </div>
        <!-- <div class="col-12 col-sm-4">
          <div class="custom-card">
            <h5>Apartamento en Palmira</h5>
            <p>Ubicada en medio de dos centros comerciales, tiene una extensión territorial de 104 &#x33A1; y cuenta con lo siguiente:</p>
            <table class="q-mt-md">
              <tr>
                <td><i class="fas fa-check"></i> </td>
                <td><p>1 Garage Privado</p> </td>
              </tr>
              <tr>
                <td><i class="fas fa-check"></i> </td>
                <td><p>1 Cocina Integral</p> </td>
              </tr>
              <tr>
                <td><i class="fas fa-check"></i> </td>
                <td><p>1 Comedor</p> </td>
              </tr>
              <tr>
                <td><i class="fas fa-check"></i> </td>
                <td><p>3 habitaciones</p> </td>
              </tr>
              <tr>
                <td><i class="fas fa-check"></i> </td>
                <td><p>Area 104 &#x33A1;</p> </td>
              </tr>
            </table>
            <hr class="hr-custom q-ma-md">
            <p>Contactenos para mas detalles: <br>
              +57 3162747014 <br>
              +44 7984436635
            </p>
          </div>
        </div>
        <div class="col-12 col-sm-8">
          <Carousel>
            <q-carousel-slide :name="1" img-src="/statics/images/casas/palmira/1/image1.jpeg" />
            <q-carousel-slide :name="2" img-src="/statics/images/casas/palmira/1/image2.jpeg" />
            <q-carousel-slide :name="3" img-src="/statics/images/casas/palmira/1/image3.jpeg" />
          </Carousel>
        </div> -->
      </div>
    </div>
  </q-page>
</template>

<script>
import Carousel from '../components/Carousel.vue'
export default {
  data() {
    return {
    }
  },
  components: {
    Carousel
  }
}
</script>

<style lang="stylus" scoped>
.inmuebles
  margin-top 80px
.custom-card
  border-radius 8px
  background #f5f8fa
  box-shadow 0 0 10px rgba(0, 0, 0, 0.3)
  padding 20px
  margin-left 10px
  margin-right 10px
.titulo
  text-align: center
  margin-bottom 70px
p, .fa-check
  margin 0
  font-size 18px
.fa-check
  margin-right 10px
.la-exclamation-circle
  font-size 120px
@media (max-width: 600px)
  .titulo
    text-align: center
    margin-top 50px
    margin-bottom 50px
    font-size 34px
  .custom-card
    box-shadow 0 0 10px rgba(0, 0, 0, 0)
    border-radius 0
    margin-left 0
    margin-right 0
  .inmuebles
    margin-left 0
    margin-right 0
    margin-top 0
</style>
