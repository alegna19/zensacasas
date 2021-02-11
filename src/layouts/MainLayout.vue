<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated :class="{
      'opacity-bg2' : this.$route.path !== '/' || scrollPosition > 200,
      'opacity-bg' : this.$route.path === '/'
    }">
      <q-toolbar>
        <q-btn class="show-mobile-only"
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />
        <!-- :show-if-above="false" to prevent drawer to open when resizing -->
        <q-toolbar-title>
          <img src="~assets/images/logo1.png" class="logo1 vertical-middle">
        </q-toolbar-title>

        <q-tabs v-model="tab" shrink class="hide-mobile-only" inline-label>
          <q-route-tab name="home" label="Inicio" clickable to="/" exact/>
          <q-route-tab name="aboutus" label="Quienes Somos" clickable to="/#aboutus" exact/>
          <q-btn-dropdown stretch flat icon="las la-campground" label="Venta Inmuebles"
            v-model="menuProducts" @mouseover.native="menuProducts = true">
            <q-list>
              <q-item clickable to="casas" v-close-popup>
                <q-item-section avatar >
                  <q-avatar icon="las la-home" color="positive" text-color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Casas </q-item-label>
                  <!-- <q-item-label caption style="color:grey">Lighting Manufacturers</q-item-label> -->
                </q-item-section>
              </q-item>

              <q-item clickable to="apartamentos" v-close-popup>
                <q-item-section avatar>
                  <q-avatar icon="las la-building" color="positive" text-color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Apartamentos</q-item-label>
                  <!-- <q-item-label caption style="color:grey">3rd Party Electricity & Gas Supply</q-item-label> -->
                </q-item-section>
              </q-item>

              <q-item clickable to="fincas" v-close-popup>
                <q-item-section avatar>
                  <q-avatar icon="las la-warehouse" color="positive" text-color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Fincas</q-item-label>
                  <!-- <q-item-label caption style="color:grey">Commercial Chargers, Industry Applications</q-item-label> -->
                </q-item-section>
              </q-item>

              <q-item clickable to="terrenos" v-close-popup>
                <q-item-section avatar>
                  <q-avatar icon="las la-mountain" color="positive" text-color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Terrenos</q-item-label>
                  <!-- <q-item-label caption style="color:grey">Commercial Chargers, Industry Applications</q-item-label> -->
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-route-tab name="contact" icon="lab la-telegram" label="Contactenos" clickable to="contactenos" exact/>
        </q-tabs>
        <div class="show-mobile-only">
          <q-btn flat round dense icon="fas fa-home" to="/" class="q-mr-md" />
          <q-btn flat round dense icon="fas fa-paper-plane" to="/contactenos" class="q-mr-md" />
        </div>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      content-style="background-color: #2e2d2b"
    >
      <q-list>
        <br>
        <q-item-label header class="side-menu-title"><u>Menu</u></q-item-label>
        <q-item clickable to="/#aboutus">
          <q-item-section avatar>
            <q-icon name="las la-user-tie" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Quienes somos</q-item-label>
          </q-item-section>
        </q-item>
        <q-item-label header class="side-menu-title"><u>En Venta</u></q-item-label>
        <q-item clickable to="/casas">
          <q-item-section avatar>
            <q-icon name="las la-home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Casas</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/apartamentos">
          <q-item-section avatar>
            <q-icon name="las la-building" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Apartamentos</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/fincas">
          <q-item-section avatar>
            <q-icon name="las la-warehouse" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Fincas</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/terrenos">
          <q-item-section avatar>
            <q-icon name="las la-mountain" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Terrenos / Lotes</q-item-label>
          </q-item-section>
        </q-item>
        <q-item-label header class="side-menu-title"><u>Comunicate con nosotros</u></q-item-label>
        <q-item>
          <q-item-section avatar>
            <q-icon name="las la-phone" />
          </q-item-section>
          <q-item-section>
            <q-item-label>
              +57 3162747014
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <footer class="footer-bg">
      <div class="row q-pa-sm justify-center">
        <img src="" class="img-contractor">
      </div>
      <q-parallax src="">
        <div class="row foot-content">
          <div class="col-12 col-sm-4 hide-mobile-only">
            <div style="width:280px; margin:0 auto">
              <h4 class="text-white small-margin">Contactenos</h4>
              <p class="text-white">
                <table>
                  <tr>
                    <td class="q-pr-md"><i class="las la-map-marked la-2x"></i></td>
                    <td><p class="text-white" style="margin:0"> Vendemos en Quindio, Caldas, Risaralda y Valle</p>
                    </td>
                  </tr><br>
                  <tr>
                    <td class="q-pr-md"><i class="las la-phone la-2x"></i></td>
                    <td>
                      <p class="text-white" style="margin:0">
                        +57 3162747014 <br>
                        +44 7984436635
                      </p>
                    </td>
                  </tr><br>
                  <tr>
                    <td class="q-pr-md"><i class="lab la-telegram la-2x"></i></td>
                    <td><p style="margin:0" class="text-white">zensacasas&#64;gmail.com</p></td>
                  </tr>
                </table>
              </p>
            </div>
          </div>
          <div class="col-12 col-sm-4 q-pt-md hide-mobile-only align-center">
            <h4 class="text-white small-margin">En Venta</h4>
            <router-link to="/casas"><p class="text-white" style="margin:0">Casas</p></router-link>
            <router-link to="/apartamentos"><p class="text-white" style="margin:0">Apartamentos</p></router-link>
            <router-link to="/fincas"><p class="text-white" style="margin:0">Fincas</p></router-link>
            <router-link to="/terrenos"><p class="text-white" style="margin:0">Terrenos</p></router-link>
          </div>
            <div style="width:320px; margin:0 auto">
            <div class="col-12 col-sm-4">
              <h4 class="text-white small-margin">&copy; Zensacasas</h4>
              <p class="text-white">{{year.getFullYear()}} Todos los derechos reservados <br>
              </p>
              <router-link to="/privacy"><p class="text-white"><u>Politica de Privacidad</u></p></router-link>
              <h6 class="text-white small-margin">Siguenos en</h6>
              <a href="https://twitter.com/cantinazosRG1" target="_blank" class="q-pr-md"><i class="fab fa-twitter fa-3x text-white"></i></a>
              <a href="https://www.instagram.com/ceneliar2014" target="_blank"><i class="fab fa-instagram fa-3x text-white"></i></a>
              <br><br>
              <!-- <img src="~assets/images/green.png" style="height:80px; width:auto"> -->
            </div>
          </div>
        </div>
      </q-parallax>
    </footer>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      leftDrawerOpen: false,
      tab: '',
      menuProducts: false,
      scrollPosition: null,
      menuOver: false,
      year: new Date()
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
  body, div
    color $primary
  .logo1
    height 86px
    position fixed
    top 4px
    left 40px
    z-index 2
  .foot-content
    width 90%
  .router-link:hover
    color $secondary
  .q-tab__label
    font-family 'Baloo 2' !important
  .footer-bg
    background radial-gradient(ellipse at top, #c4d600, #000000)
    width 100%
  .side-menu-title
    color #c9c9c9
  @media (max-width: 600px)
    .logo1
      height 40px
      margin-left 20px
</style>
