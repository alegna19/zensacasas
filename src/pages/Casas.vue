<template>
  <q-page>

    <div class="q-mt-xl">

      <div v-for="(item, index) in gatos" :key="index">
        <div class="row">
          <div class="col-4">
            <p>
              nombre: {{ item.nombre }}
              apellido: {{ item.apellido }}
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

export default {
  data() {
    return {
      gatos: [
        {
          "nombre": "nieve",
          "apellido": "gomez",
          "imagenes": [
            { "imagen": "imagen1.jpg" },
            { "imagen": "imagen2.jpg" },
            { "imagen": "imagen3.jpg" },
            { "imagen": "imagen4.jpg" }
          ]
        },
        { "nombre": "popcorn", "apellido": "lopez" },
        { "nombre": "loki", "apellido": "perez" },
      ]
    }
  },
}

</script>
