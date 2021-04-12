<template>
  <main>
    <div id="content" class="content">
      <header class="c-header">
        <h1 class="c-header-title">
          <span class="c-header-subtitle">Event Alert:</span>
          Design Corner 2021
        </h1>
      </header>

      <section class="c-section c-section--first c-section--thin">
        <!-- TODO: Add dates section -->
        <p>
          Fill out this form if you would like to participate in the Design Corner for 2021. Keep an eye out for more details on our Facebook page.
        </p>
        <div class="c-info">
          <strong>Note:</strong> Attendance is mandatory for all 3 days. <a href="mailto:macquarie@ewb.org.au" target="_blank" rel="noreferrer noopener" title="Let us know via email">Let us know</a> if you are unable to attend any of the 3 days.
        </div>
      </section>

      <section class="c-section c-section--thin">
        <client-only>
          <Form form-id="75f9df84-cd82-4699-a74b-6c28b13f545a" />
        </client-only>
      </section>

      <section class="c-footerLink">
        <a href="/">
          <img src="~/assets/ewbmq-logo-back.svg" alt="EWBMQ homepage" height="50">
        </a>
      </section>
    </div>
    <Footer />
  </main>
</template>

<script>
export default {
  components: {
    Form: () => process.client ? import(/* webpackPrefetch: true */ '~/lazy-components/Form.vue') : null
  },
  head: {
    title: 'Event Alert: Design Corner 2021 — EWBMQ',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Registration form for the EWB Design Corner 2021 hosted by Macquarie University, UNSW, UTS, USYD and WSU.'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  }
}
</script>

<style scoped>
.c-header {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 175px;
  background: var(--color-background);
  box-shadow: 0 0 0 2px rgba(0, 0, 0, .05),
              0 4px 32px rgba(0, 0, 0, .05);
}
.c-header-title {
  font-size: 32px;
  line-height: 48px;
  text-align: center;
}
.c-header-subtitle {
  display: block;
  font-size: 20px;
  line-height: 24px;
  color: var(--color-green);
}

.c-footerLink {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 150px;
  background: var(--color-light-gray);
  border-top: 2px solid rgba(24, 24, 24, 0.025);
}

@media (max-width: 1024px) {
  /* TODO: Add mobile styling */
}
</style>
