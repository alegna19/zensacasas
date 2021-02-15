<template>
  <q-page>
    <div class="countainer q-pt-xl"></div>
    <div class="q-ma-xl inmuebles">
      <div class="row q-pl-xl q-pr-xl">
        <div class="col-12 col-sm-3 card text-justify q-pl-lg q-pr-lg">
          <h4>Contactanos</h4>
          <hr class="hr-custom q-ma-md">
          <p class="telefonos">
             +57 3108420754 <br>
             +57 3137179764<br>
             +44 795715676
          </p>
        </div>
        <div class="col-12 col-sm-9 q-pa-lg">
          <div class="row">
            <div class="col-2 " style="border:1px red solid">
              <img src="~assets/icons/contact.png" class="contact" alt="contactenos">
            </div>
            <div class="col-10 q-pl-xl q-pr-xl" style="border:1px red solid">
              <q-form id="contact-form" class="q-gutter-md contact-form" @submit.prevent=""><!--@submit="onSubmit"-->
                <q-input dense v-model="name" name="name" standout="bg-primary text-white" label="Nombre *" required/>
                <q-input dense v-model="email" name="email" standout="bg-primary text-white" label="Email *" type="email" required/>
                <q-input dense v-model="phone" name="phone" standout="bg-primary text-white" label="Telefono" />
                <q-input type="textarea" rows="3" v-model="message" name="message" standout="bg-primary text-white" label="Mensaje *" hint="* requerido" required/>
                <div class="text-center">
                  <div style="width:300px; margin:0 auto">
                    <vue-recaptcha sitekey="6LczIicUAAAAAPpkfCDB49r5bHpBHJrF_RbsQMi3"></vue-recaptcha>
                    <br>
                    <q-btn label="Enviar" icon="fas fa-paper-plane" type="submit" color="primary" class="pageclip-form__submit"/>
                  </div>
                  <!-- <span class="rta" :class="{'bg-positive': rta === 1,'bg-negative': rta === 2}">
                    {{ note }}
                  </span> -->
                </div>
              </q-form>
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
      name: '',
      phone: '',
      email: '',
      message: ''
    }
  }
}
</script>

<style lang="stylus">
  .contact
    height 140px
    width auto
  @media (max-width: 500px)
    .telefonos
      font-size 22px
    .contact
      height 100px
      width auto
</style>
