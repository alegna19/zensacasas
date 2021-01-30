<template>
  <div class="fixed-center text-center">
    <p>
      <img
        src="~assets/images/sad.png"
        style="width:500vw;max-width:600px;"
      >
    </p>
    <p class="text-faded">Pagina no existe <strong>(404)</strong></p>
    <q-btn
      color="secondary"
      style="width:200px;"
      to="/"
      label="Go back"
    />
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>
