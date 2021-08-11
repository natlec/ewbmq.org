<template>
  <!-- eslint-disable-next-line vue/html-self-closing -->
  <div
    v-if="isFormLoaded"
    class="c-form"
  ></div>
</template>

<script>
import '~/static/jqueryShim.js'

export default {
  name: 'Form',
  props: {
    formId: {
      name: 'form-id',
      type: String,
      default: 'e8ab8e7f-6fbc-47aa-a6ee-e37867427d95'
    }
  },
  data () {
    return {
      isFormLoaded: false
    }
  },
  mounted () {
    this.initHubSpotForm()
  },
  methods: {
    initHubSpotForm () {
      window.hbspt.forms.create({
        portalId: '9223100',
        formId: this.formId,
        target: '.c-form',
        onFormReady: form => this.initHubSpotFormStyle(form)
      })
      this.isFormLoaded = true
    },
    initHubSpotFormStyle (form) {
      // Inject custom styling for HubSpot Form (forgive me)
      const customStyle = document.createElement('style')
      customStyle.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&family=Red+Hat+Display:wght@400;700&display=swap');

        ::-moz-selection {
          color: #fff;
          background: #00903D;
        }
        ::selection {
          color: #fff;
          background: #00903D;
        }
        .hbspt-form form {
          margin: 0 4px 0 !important;
          width: auto !important;
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
          padding: 16px;
          border-left: 4px solid #CC0000;
          font: 700 1.2em 'PT Serif' !important;
          color: #CC0000 !important;
        }
        .hbspt-form .hs-form-required {
          color: #CC0000 !important;
        }
        .hbspt-form .hs-input[type=text],
        .hbspt-form .hs-input[type=email],
        .hbspt-form .hs-input[type=tel],
        .hbspt-form select.hs-input {
          appearance: none !important;
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
          transition: none !important;
        }
        .hbspt-form .hs-input[type=text]:focus,
        .hbspt-form .hs-input[type=email]:focus,
        .hbspt-form .hs-input[type=tel]:focus,
        .hbspt-form select.hs-input:focus {
          outline: none !important;
          border-color: #181818 !important;
          box-shadow: 0 0 0 4px #FFCC00;
        }
        .hbspt-form .hs-button:focus {
          outline: none !important;
          background: #00903D !important;
          border-color: #fff !important;
          box-shadow: 0 0 0 4px #181818;
        }
        .hbspt-form .hs-input.invalid,
        .hbspt-form .hs-input.error {
          box-shadow: 0 0 0 3px #CC0000;
        }
        .hbspt-form .hs-error-msgs {
          padding: 0 0 2px !important;
        }
        .hbspt-form .hubspot-link__container,
        .hbspt-form .hs-form-field .hs-error-msgs {
          display: none !important;
        }
      `
      form.context.append(customStyle)
    }
  }
}
</script>

<style scoped>
.c-form {
  margin: 100px 0 0;
  outline: none;
}
</style>
