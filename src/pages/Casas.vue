<template>
  <q-page>
    <div class="countainer"></div>
    <div class="inmuebles">
      <h3 class="titulo">Casas en Venta</h3>
      <div class="row">
        <div class="col-12 col-md-4">
          <div class="custom-card">
            <h5>Casa en Palmira</h5>
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
            <br>
             +57 3108420754 <br>
             +57 3137179764<br>
             +44 795715676
            </p>
          </div>
        </div>
        <div class="col-12 col-md-8 carousel">
          <Carousel>
            <q-carousel-slide :name="1" img-src="/statics/images/casas/palmira/1/image1.jpeg" />
            <q-carousel-slide :name="2" img-src="/statics/images/casas/palmira/1/image2.jpeg" />
            <q-carousel-slide :name="3" img-src="/statics/images/casas/palmira/1/image3.jpeg" />
            <q-carousel-slide :name="4" img-src="/statics/images/casas/palmira/1/image4.jpeg" />
            <q-carousel-slide :name="5" img-src="/statics/images/casas/palmira/1/image5.jpeg" />
            <q-carousel-slide :name="6" img-src="/statics/images/casas/palmira/1/image6.jpeg" />
            <q-carousel-slide :name="7" img-src="/statics/images/casas/palmira/1/image7.jpeg" />
            <q-carousel-slide :name="8" img-src="/statics/images/casas/palmira/1/image8.jpeg" />
            <q-carousel-slide :name="9" img-src="/statics/images/casas/palmira/1/image9.jpeg" />
            <q-carousel-slide :name="10" img-src="/statics/images/casas/palmira/1/image10.jpeg" />
          </Carousel>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-4">
          <div class="custom-card">
            <h5>Casa en Palmira</h5>
            <p>Ubicada en Cr3 # 1-56 Barrio el centro con 4,30 metros de frente y fondo 12,80 y cuenta con lo siguiente:</p>
            <table class="q-mt-md">
              <tr>
                <td><i class="fas fa-check"></i> </td>
                <td><p>1 Garage Privado</p> </td>
              </tr>
              <tr>
                <td><i class="fas fa-check"></i> </td>
                <td><p>2 Cocinas</p> </td>
              </tr>
              <tr>
                <td><i class="fas fa-check"></i> </td>
                <td><p>1 Comedor</p> </td>
              </tr>
               <tr>
                <td><i class="fas fa-check"></i> </td>
                <td><p>Sala en la parte superior</p> </td>
              </tr>
              <tr>
                <td><i class="fas fa-check"></i> </td>
                <td><p>3 habitaciones</p> </td>
              </tr>
              <tr>
                <td><i class="fas fa-check"></i> </td>
                <td><p>2 Baños</p> </td>
              </tr>
              <tr>
                <td><i class="fas fa-check"></i> </td>
                <td><p>1 Patio</p> </td>
              </tr>
            </table>
            <hr class="hr-custom q-ma-md">
            <p>Contactenos para mas detalles: <br>
             +57 3108420754 <br>
             +57 3137179764<br>
             +44 795715676
            </p>
          </div>
        </div>
        <div class="col-12 col-md-8 carousel">
          <Carousel>
            <q-carousel-slide :name="1" img-src="/statics/images/casas/palmira/2/image1.jpeg" />
            <q-carousel-slide :name="2" img-src="/statics/images/casas/palmira/2/image2.jpeg" />
            <q-carousel-slide :name="3" img-src="/statics/images/casas/palmira/2/image3.jpeg" />
            <q-carousel-slide :name="4" img-src="/statics/images/casas/palmira/2/image4.jpeg" />
            <q-carousel-slide :name="5" img-src="/statics/images/casas/palmira/2/image5.jpeg" />
            <q-carousel-slide :name="6" img-src="/statics/images/casas/palmira/2/image6.jpeg" />
            <q-carousel-slide :name="7" img-src="/statics/images/casas/palmira/2/image7.jpeg" />
            <q-carousel-slide :name="8" img-src="/statics/images/casas/palmira/2/image8.jpeg" />
            <q-carousel-slide :name="9" img-src="/statics/images/casas/palmira/2/image9.jpeg" />
            <q-carousel-slide :name="10" img-src="/statics/images/casas/palmira/2/image10.jpeg" />
            <q-carousel-slide :name="11" img-src="/statics/images/casas/palmira/2/image11.jpeg" />
            <q-carousel-slide :name="12" img-src="/statics/images/casas/palmira/2/image12.jpeg" />
          </Carousel>
        </div>
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
      margin-top 50px
      margin-left 40px
      margin-right 40px
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

    @media (max-width: 600px)
      .titulo
        text-align: center
        margin-top 50px
        margin-bottom 50px
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