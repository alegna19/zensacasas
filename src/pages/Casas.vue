<template>
  <q-page>
    <div class="q-mt-xl">

      <div v-for="(item, index) in inmuebles" :key="index">
        <div class="row">
          <div class="col-4">
            <p>
              ciudad: {{ item.ciudad }}
            </p>
          </div>
          <div class="col-8">
            <div v-for="(imagenes, index) in item.imagenes" :key="index">
              <h5>imagen: {{ imagenes.imagen }} </h5>
            </div>
          </div>
        </div>
      </div>

    </div>
  </q-page>
</template>

<script>
import Inmuebles from '../data/inmuebles'
export default {
  data() {
    return {
    }
  },

  components: {
    Inmuebles
  }
}

</script>
