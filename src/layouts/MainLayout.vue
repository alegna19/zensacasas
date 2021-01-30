<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated class="opacity-bg" >
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
          <img src="~assets/images/logo5.png" class="vertical-middle" 
            :class="{'logo-small': scrollPosition > 200, 'logo1': scrollPosition < 201} ">
        </q-toolbar-title>

        <q-tabs v-model="tab" shrink class="hide-mobile-only" inline-label>
          <q-route-tab name="home" label="Inicio" clickable to="/" exact/>
          <q-route-tab name="aboutus" label="Quienes Somos" clickable to="/about" exact/>
          <q-btn-dropdown stretch flat icon="las la-campground" label="Venta Inmuebles" 
            v-model="menuProducts" @mouseover.native="menuProducts = true">
            <q-list>
              <q-item clickable to="" v-close-popup>
                <q-item-section avatar >
                  <q-avatar icon="las la-home" color="positive" text-color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Casas</q-item-label>
                  <!-- <q-item-label caption style="color:grey">Lighting Manufacturers</q-item-label> -->
                </q-item-section>
              </q-item>

              <q-item clickable to="" v-close-popup>
                <q-item-section avatar>
                  <q-avatar icon="las la-building" color="positive" text-color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Apartamentos</q-item-label>
                  <!-- <q-item-label caption style="color:grey">3rd Party Electricity & Gas Supply</q-item-label> -->
                </q-item-section>
              </q-item>

              <q-item clickable to="" v-close-popup>
                <q-item-section avatar>
                  <q-avatar icon="las la-warehouse" color="positive" text-color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Fincas</q-item-label>
                  <!-- <q-item-label caption style="color:grey">Commercial Chargers, Industry Applications</q-item-label> -->
                </q-item-section>
              </q-item>

              <q-item clickable to="" v-close-popup>
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
          <q-route-tab name="contact" icon="fas fa-paper-plane" label="Contactenos" clickable to="" exact/>
        </q-tabs>
        <div class="show-mobile-only">
          <q-btn flat round dense icon="fas fa-home" to="/" class="q-mr-md" />
          <q-btn flat round dense icon="fas fa-paper-plane" to="/contact" class="q-mr-md" />
          <q-btn flat round dense icon="fas fa-map-marker-alt" type="a" href="https://goo.gl/maps/FA3ueXoRS4xUgxqF9" target="_blank" class="q-mr-md" />
        </div>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Quick access</q-item-label>
        <q-item clickable to="/about">
          <q-item-section avatar>
            <q-icon name="fas fa-users" />
          </q-item-section>
          <q-item-section>
            <q-item-label>About us</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/case">
          <q-item-section avatar>
            <q-icon name="fas fa-clipboard-list" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Case Studies</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/contact">
          <q-item-section avatar>
            <q-icon name="fas fa-paper-plane" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Contact us</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="https://goo.gl/maps/FA3ueXoRS4xUgxqF9" target="_blank">
          <q-item-section avatar>
            <q-icon name="fas fa-map-marker-alt" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Our Location</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/privacy">
          <q-item-section avatar>
            <q-icon name="fas fa-user-shield" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Privacy Policy</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <footer>
      <q-parallax src="" :speed="2.6">
        <div class="row foot-content">
          <div class="col-12 col-sm-4 hide-mobile-only">
            <div style="width:280px; margin:0 auto">
              <h4 class="text-white small-margin">EUS Contact</h4>
              <p class="text-white">
                <table>
                  <tr>
                    <td class="q-pr-md"><i class="fas fa-map-pin fa-3x"></i></td>
                    <td>954 Lexington Avenue <br>
                      Suite 1006 <br>
                      New York, NY 10021 <br>
                    </td>
                  </tr><br>
                  <tr>
                    <td class="q-pr-md"><i class="fas fa-phone fa-2x"></i></td>
                    <td>212-624-5943 <br>
                      fax 212-288-4826
                    </td>
                  </tr><br>
                  <tr>
                    <td class="q-pr-md"><i class="fas fa-envelope fa-2x"></i></td>
                    <td>sales@euscorp.com <br>
                      support@euscorp.com
                    </td>
                  </tr>
                </table>
              </p>
            </div>
          </div>
          <div style="width:320px; margin:0 auto">
            <div class="col-12 col-sm-4">
              <h4 class="text-white small-margin">EUS Corp</h4>
              <p class="text-white">© 2019 All Rights Reserved <br>
                Connecting the Dots in Communications!
              </p>
              <router-link to="/privacy"><p class="text-white"><u>Privacy Policy</u></p></router-link>
            </div>
            <img src="" style="height:60px; width:auto">
          </div>
          <div style="width:320px; margin:0 auto">
            <div class="col-12 col-sm-4">
              <h4 class="text-white small-margin">Follow us</h4>
              <a href="https://twitter.com/eusnetworks" target="_blank" class="q-pr-md"><i class="fab fa-twitter-square fa-3x text-white"></i></a>
              <a href="https://www.linkedin.com/company/eus-networks" target="_blank"><i class="fab fa-linkedin fa-3x text-white"></i></a>
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
      menuOver: false
    }
  },
  methods: {
    goto(refName) {
    	var element = this.$els[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    },
    updateScroll() {
      this.scrollPosition = window.scrollY
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  destroy() {
    window.removeEventListener('scroll', this.updateScroll)
  },
  
}
</script>

<style lang="stylus" scoped>
  body, div
    color $primary
  .foot-content
    width 90%
  .router-link:hover
    color $secondary
  .q-tab__label
    font-family 'Baloo 2' !important


</style>
