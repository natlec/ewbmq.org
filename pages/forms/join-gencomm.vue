<template>
  <main>
    <div id="content" class="content">
      <header class="c-header">
        <h1 class="c-header-title">
          <span class="c-header-subtitle">Nominations:</span>
          Join the General Committee!
        </h1>
      </header>

      <section class="c-section c-section--thinTopMargin c-section--thinBottomMargin c-section--thin">
        <p>
          <strong>Looking to join a dynamic, fast-paced & passionate team of people?</strong> We think the EWBMQ General Committee is just the place to be, whether it's as a Marketing Director, Events Director, School Outreach Coordinator, or as a GenComms Representative!
        </p>
        <p>
          Fill out the form below by <strong>March 11th @ 11:59PM</strong> to submit your application for the desired position(s). We welcome people from diverse backgrounds, not just from within engineering!
        </p>
        <div class="c-info">
          <strong>Need help?</strong> Feel free to ping the friendly EWBMQ team by <a href="mailto:macquarie@ewb.org.au" target="_blank" rel="noreferrer noopener" title="Compose a new email to EWBMQ in your default email application">sending us an email</a>.
        </div>
      </section>

      <section class="c-section c-section--thinTopMargin c-section--thin">
        <client-only>
          <Form form-id="47642181-ae33-4f8b-bb3c-c1f2f42f20a4"/>
        </client-only>
      </section>

      <section class="c-footerLink">
        <NuxtLink to="/" class="c-footerLink-button">
          <span class="c-footerLink-label">Go to EWBMQ homepage</span>
        </NuxtLink>
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
    title: 'Applications Open: Join the General Committee! — EWBMQ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Looking to join a dynamic, fast-paced & passionate team of people?' },
      { property: 'twitter:title', name: 'twitter:title', content: 'Applications Open: Join the General Committee! — EWBMQ' },
      { property: 'twitter:description', name: 'twitter:description', content: 'Looking to join a dynamic, fast-paced & passionate team of people?' },
      { property: 'og:type', content: 'event' },
      { property: 'og:title', name: 'og:title', content: 'Applications Open: Join the General Committee! — EWBMQ' },
      { property: 'og:description', name: 'og:description', content: 'Looking to join a dynamic, fast-paced & passionate team of people?' },
      { property: 'og:url', name: 'og:url', content: 'https://ewbmq.org/forms/join-gencomms-team/' }
    ]
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
.c-footerLink-label {
  position: absolute;
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;
}
.c-footerLink-button {
  display: block;
  background: no-repeat center url('~/assets/ewbmq-logo-back.svg');
  width: 200px;
  height: 50px;
}
.c-footerLink-button:focus,
.c-footerLink-button:active {
  box-shadow: none;
  background: no-repeat center url('~/assets/ewbmq-logo-back-focus.svg');
}
</style>
