<template>
  <q-page >
    <div class="carousel-front">
      <q-carousel
        animated
        v-model="slide"
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
            <p class="text-white">En Quindio, Caldas, Risaralda y Valle </p>
            <q-btn class="q-mr-md" to="/casas" color="positive" label="Ver Inmuebles"></q-btn>
            <q-btn color="positive" to="/contactenos" outline label="Contactenos"></q-btn>
            <br><br>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" img-src="~assets/images/house3.jpeg">
          <div class="front-text">
            <h4 class="text-primary">VENTA DE FINCAS Y TERRENOS</h4>
            <p class="text-white">En Quindio, Caldas, Risaralda y Valle </p>
            <q-btn class="q-mr-md" to="/fincas" color="positive" label="Ver Inmuebles"></q-btn>
            <q-btn color="positive" to="/contactenos" outline label="Contactenos"></q-btn>
            <br><br>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" img-src="~assets/images/house4.jpg">
          <div class="front-text">
            <h4 class="text-primary">VENTA DE APARTAMENTOS</h4>
            <p class="text-white">En Quindio, Caldas, Risaralda y Valle </p>
            <q-btn class="q-mr-md" to="/apartamentos" color="positive" label="Ver Inmuebles"></q-btn>
            <q-btn color="positive" to="/contactenos" outline label="Contactenos"></q-btn>
            <br><br>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>

    <!-- waves -->
    <svg class="editorial"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28 "
      preserveAspectRatio="none">
    <defs>
    <path id="gentle-wave"
    d="M-160 44c30 0
        58-18 88-18s
        58 18 88 18
        58-18 88-18
        58 18 88 18
        v44h-352z" />
      </defs>
      <g class="parallax1">
      <use xlink:href="#gentle-wave" x="50" y="3" fill="#a4b304"/>
      </g>
        <g class="parallax2">
      <use xlink:href="#gentle-wave" x="50" y="0" fill="#000000"/>
        </g>
          <g class="parallax3">
      <use xlink:href="#gentle-wave" x="50" y="9" fill="#a4b304"/>
      </g>
        <g class="parallax4">
      <use xlink:href="#gentle-wave" x="50" y="6" fill="#ffffff"/>
      </g>
    </svg>

    <!-- icons -->
    <div class="row q-pa-md icon-images align-center">
      <div class="col-4">
        <img src="~assets/icons/hands.png" alt="confianza">
        <p>Confianza y Seguridad <br>
         en nuestros servicios</p>
      </div>
      <div class="col-4">
        <img src="~assets/icons/medal.png" alt="calidad">
        <p>Calidad y Garantia</p>
      </div>
      <div class="col-4">
        <img src="~assets/icons/family.png" alt="familia feliz">
        <p>Familias Felices</p>
      </div>
    </div>

    <!-- general info -->
    <div class="row grey-bg quienes-somos" id="aboutus">
      <div class="col-12 col-sm-6 q-pa-xl">
        <h4>Quienes Somos</h4>
        <p class="q-mt-lg q-pr-md text-justify">
          En Zensacasas ofrecemos informacion y asistencia antes, durante y despues del proceso de la compra y venta de bienes inmuebles
          ubicados principalmente en Quindio, Caldas, Risaralda y Valle (Colombia). <br>
          Casas, Apartamentos, Fincas y Terrenos. En Zensacasas estamos comprometidos con la calidad, seguridad y cumplimiento de
          nuestros servicios, cubriendo las necesidades de nuestros clientes en su busqueda de su siguiente gran negocio.
        </p>
        <h5>Llamanos Ahora</h5>
        <p><i class="las la-phon"></i> +57 3108420754 <br> +57 3137179764 <br> +44 7957156761</p>
      </div>
      <div class="col-12 col-sm-6 text-center image-nosotros">
        <img src="~assets/images/nosotros.jpg" alt="negocio">
      </div>
    </div>

    <!-- casas -->
    <div class="row q-pt-xl q-pb-xl">
      <div class="col-12 align-center">
        <h4>Venta Inmuebles</h4>
      </div>
      <div class="col-12 col-sm-6 inmuebles-padding-iz">
        <q-img src="~assets/images/casa.jpg" class="img-inmuebles">
          <div class="absolute-full text-subtitle2 flex flex-center">
            <q-btn class="q-mr-md" to="casas" color="positive" label="Casas"></q-btn>
          </div>
        </q-img>
      </div>
      <div class="col-12 col-sm-6 inmuebles-padding-der">
        <q-img src="~assets/images/apta.jpg" class="img-inmuebles">
          <div class="absolute-full text-subtitle2 flex flex-center">
            <q-btn class="q-mr-md" to="apartamentos" color="positive" label="Apartamentos"></q-btn>
          </div>
        </q-img>
      </div>
      <div class="col-12 col-sm-6 inmuebles-padding-iz">
        <q-img src="~assets/images/finca.jpg" class="img-inmuebles">
          <div class="absolute-full text-subtitle2 flex flex-center">
            <q-btn class="q-mr-md" to="fincas" color="positive" label="Fincas"></q-btn>
          </div>
        </q-img>
      </div>
      <div class="col-12 col-sm-6 inmuebles-padding-der">
        <q-img src="~assets/images/terreno.jpeg" class="img-inmuebles">
          <div class="absolute-full text-subtitle2 flex flex-center">
            <q-btn class="q-mr-md" to="terrenos" color="positive" label="Terrenos"></q-btn>
          </div>
        </q-img>
      <br><br>
      </div>
    </div>


    <!-- features -->
    <div class="row grey-bg q-pa-xl">
      <div class="col-12 align-center">
        <h4>Caracteristicas de Nuestro Servicio</h4>
        <p>
          <i class="fas fa-check" style="color:#c4d600"></i> Servicio con calidad <br>
          <i class="fas fa-check" style="color:#c4d600"></i> Transparencia e Integridad <br>
          <i class="fas fa-check" style="color:#c4d600"></i> Satisfaccion de nuestros clientes <br>
          <i class="fas fa-check" style="color:#c4d600"></i> Comodidad en tu hogar <br>
          <i class="fas fa-check" style="color:#c4d600"></i> Confianza y Responsabilidad en nuestros servicios <br>
        </p>
      </div>
    </div>

  </q-page>
</template>

<script>
export default {
  data () {
    return {
      slide: 1,
      autoplay: true,
      scrollPosition: null
    }
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
  destroy() {
    window.removeEventListener('scroll', this.updateScroll)
  },
}
</script>

<style lang="stylus" scoped>
  .carousel-front
    margin-top -50px
  .front-text
    width 530px
    background-color rgba(0,0,0, 0.4)
    border-radius 8px
    position absolute
    margin-top 250px
    margin-left 10%
    padding 20px
    text-align justify
  .icon-images img
    height 90px
    margin-top 22px
  .editorial
    display block
    width 100%
    height 60px
    max-height 60px
    margin 0
    margin-top -44px
    z-index 5
    bottom 0
    position relative
    left 0px
    float left
  .parallax1 > use
    animation move-forever1 10s linear infinite
  .parallax1 > use:nth-child(1)
    animation-delay -2s
  .parallax2 > use
    animation move-forever2 8s linear infinite
  .parallax2 > use:nth-child(1)
    animation-delay -2s
  .parallax3 > use
    animation move-forever3 6s linear infinite
  .parallax3 > use:nth-child(1)
    animation-delay -2s
  .parallax4 > use
    animation move-forever4 4s linear infinite
  .parallax4 > use:nth-child(1)
    animation-delay -2s
  @keyframes move-forever1
    0%
      transform translate(85px, 0%)
    100%
      transform translate(-90px, 0%)
  @keyframes move-forever2
    0%
      transform translate(-90px, 0%)
    100%
      transform: translate(85px, 0%)
  @keyframes move-forever3
    0%
      transform translate(85px, 0%)
    100%
      transform translate(-90px, 0%)
  @keyframes move-forever4
    0%
      transform translate(-90px, 0%)
    100%
      transform translate(85px, 0%)
  .img-inmuebles
    height 400px
  .inmuebles-padding-iz
    padding-left 40px
    padding-right 15px
    padding-top 30px
    padding-bottom 6px
  .inmuebles-padding-der
    padding-left 15px
    padding-right 40px
    padding-top 30px
    padding-bottom 6px
  .image-nosotros img
    padding-top 70px
  @media (max-width: 600px)
    .front-text
      width 100%
      padding 20px
      padding-left 50px
      background-color rgba(0,0,0, 0.4)
      margin-left -15px
    h4
      font-size 20px
    p
      font-size 18px
    .inmuebles-padding-iz, .inmuebles-padding-der
      padding-left 0px
      padding-right 0px
    .image-nosotros img
      padding-top 0px
      margin-bottom 50px
      width 100%
  @media (max-width: 500px)
    .icon-images img
      height 60px
    p
      font-size 18px

</style>
