<template>
  <div class="c-form"></div>
</template>

<script>
import '~/assets/jqueryShim.js'
import Vue from 'vue'
Vue.prototype.HubSpot = window.hbspt

export default {
  name: 'Form',
  data () {
    return {
      customStyle: {}
    }
  },
  mounted () {
    this.HubSpot.forms.create({
      portalId: '9223100',
      formId: 'e8ab8e7f-6fbc-47aa-a6ee-e37867427d95',
      target: '.c-form',
      onFormReady: function injectCustomStyle (form) {
        // Inject custom styling for HubSpot Form (forgive me)
        const customStyle = document.createElement('style')
        customStyle.textContent = `
          @import url('https://fonts.googleapis.com/css2?family=PT+Serif&family=Red+Hat+Display:wght@400;700&display=swap');

          .hbspt-form form {
            margin: 0 4px 0 !important;
          }
          .hbspt-form .hs-form-field {
            margin: 0 0 32px !important;
          }
          .hbspt-form .actions {
            margin: 0 !important;
          }
          .hbspt-form label {
            margin: 0 0 8px !important;
            color: #181818 !important;
            font: 700 1em 'Red Hat Display' !important;
          }
          .hbspt-form .hs-form-radio span {
            color: #404040 !important;
            font: 400 1.2em 'PT Serif' !important;
          }
          .hbspt-form .hs_error_rollup label {
            font: 400 1.2em 'PT Serif' !important;
            color: red !important;
          }
          .hbspt-form .hs-input[type=text],
          .hbspt-form .hs-input[type=email],
          .hbspt-form select.hs-input {
            padding: 8px !important;
            color: #404040 !important;
            font: 400 1.2em 'PT Serif' !important;
            background: #fff !important;
            border: 3px solid transparent !important;
            border-radius: 8px !important;
            height: 48px !important;
            box-shadow: 0 0 0 2px rgba(24, 24, 24, 0.1),
                        0 4px 8px rgba(24, 24, 24, 0.05),
                        0 2px 4px rgba(24, 24, 24, 0.05);
          }
          .hbspt-form .hs-button {
            background: #181818 !important;
            font: 700 1.2em 'Red Hat Display' !important;
            border: 3px solid transparent !important;
            border-radius: 8px !important;
            box-shadow: 0 4px 8px rgba(24, 24, 24, 0.05),
                        0 2px 4px rgba(24, 24, 24, 0.05);
            transition: box-shadow .2s ease !important;
          }
          .hbspt-form .hs-input[type=text]:focus,
          .hbspt-form .hs-input[type=email]:focus,
          .hbspt-form select.hs-input:focus,
          .hbspt-form .hs-button:focus {
            outline: none !important;
            border-color: #181818 !important;
            box-shadow: 0 0 0 3px #FFCC00;
          }
          .hbspt-form .hs-button:focus {
            background: #00903D !important;
          }
          .hbspt-form .hubspot-link__container,
          .hbspt-form .hs-form-field .hs-error-msgs {
            display: none !important;
          }
        `
        form.context.append(customStyle)
      }
    })
  }
}
</script>

<style>
.c-form {
  margin: 32px 0;
  outline: none;
}
</style>
