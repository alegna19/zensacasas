<template>
  <q-page>
    <div class="container"></div>
    <div class="q-ma-xl inmuebles">
      <div class="row">
        <div class="col-8 col-sm-3 card text-justify q-pl-lg q-pr-lg">
          <h4 style="margin:0">Contactanos</h4>
          <hr class="hr-custom q-ma-md">
          <p class="telefonos">
             +57 3108420754<br>
             +57 3137179764<br>
             +44 795715676
          </p>
        </div>
        <div class="col-4 col-sm-2">
          <img src="~assets/icons/contact.png" class="contact" alt="contactenos">
        </div>
        <div class="col-12 col-sm-7">
          <q-form id="contact-form" class="q-gutter-md contact-form" @submit.prevent="sendEmail"><!--@submit="onSubmit"-->
            <q-input dense v-model="name" name="name" standout="bg-primary text-white" label="Nombre *" required/>
            <q-input dense v-model="email" name="email" standout="bg-primary text-white" label="Email *" type="email" required/>
            <q-input dense v-model="phone" name="phone" standout="bg-primary text-white" label="Telefono" />
            <q-input type="textarea" rows="3" v-model="message" name="message" standout="bg-primary text-white" label="Mensaje *" hint="* requerido" required/>
            <div class="text-center">
              <div style="width:300px; margin:0 auto">
                <!-- <vue-recaptcha sitekey="402795e01d0c94d5a63b4535f313c9ac"></vue-recaptcha> -->
                <!-- TODO: implementar aqui hcaptcha -->
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
  </q-page>
</template>

<script>
import emailjs from 'emailjs-com';
import { Notify } from 'quasar'
export default {
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      message: '',
      note: '',
      rta: 0
    }
  },
  methods: {
    sendEmail(e) {
    emailjs.sendForm('zensacasas','zensacasasform', e.target, 'user_qBHXl3H2wBTxUAqvPx4fn') //'service_id','template_id'
      .then(result => this.rtaMessage(result))
      .catch(error => this.rtaMessage(error))
    },
    rtaMessage(rta) {
      // this.note = 'Your message has been sent! we will be in touch soon'
      if(rta.status === 200) {
        this.note = this.$q.notify({
          message: 'Gracias por su mensaje 😀, estaremos en contacto!',
          color: 'primary',
          classes: 'notifyc'
        })
        // this.rta = 1
        this.name = ''
        this.email = ''
        this.phone = ''
        this.message = ''
      } else if(rta.status === 400){
        this.note = this.$q.notify({
          message: 'Por favor resuelva el Captcha para continuar!',
          color: 'negative',
          classes: 'notifyc'
        })
        // this.rta = 2
      } else {
        this.note = this.$q.notify({
          message: 'Error en el servidor 😵, por favor intente mas tarde',
          color: 'negative',
          classes: 'notifyc'
        })
        // this.rta = 2
      }
    }
  },
  components: {

  }
}
</script>

<style lang="stylus">
  .contact
    height 140px
    width auto
  .container
    margin-top 120px
  .notifyc
    font-size 24px
    margin-bottom 20px
  .bg-positive
    background-color green
    padding 14px
    border-radius 8px
  .bg-negative
    background-color red
    padding 14px
    border-radius 8px
  @media (max-width: 600px)
    .telefonos
      font-size 18px
      margin-bottom 40px
    .contact
      height 100px
      width auto
    .container
      margin-top 0px
    h4
      font-size 26px
</style>
