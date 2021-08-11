<template>
  <main>
    <div id="content" class="content">
      <header class="c-header">
        <h1 class="c-header-title">
          <span class="c-header-subtitle">Event Alert:</span>
          International Games Night 2021
        </h1>
      </header>

      <section class="c-section c-section--thinTopMargin c-section--thinBottomMargin c-section--thin">
        <p>
          Bored during the lockdown? Come join our International Games Night on <strong>Thursday, 19th of August at 7:30pm</strong> to go head-to-head with our folks from <a href="https://instagram.com/ewbmum/" target="_blank" rel="noreferrer noopener" title="EWB Monash Malaysia on Instagram">EWB Monash Malaysia</a>! This is a great opportunity to make new connections across cultures, have fun and win awesome prizes! 🎮🤗
        </p>
        <div class="c-info">
          <strong>Note:</strong> You can either sign-up as a team with your friends or you can sign-up individually and meet new people! Need help? Feel free to ping the friendly EWBMQ team by <a href="mailto:macquarie@ewb.org.au" target="_blank" rel="noreferrer noopener" title="Compose a new email to EWBMQ in your default email application">sending us an email</a>.
        </div>
      </section>

      <section class="c-section c-section--thinTopMargin c-section--thin">
        <client-only>
          <Form form-id="39d98305-eb4a-4b7d-9b06-1e978a198c8b" />
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
    title: 'Event Alert: International Games Night 2021 — EWBMQ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Registration form for the International Games Night 2021 hosted by EWB Macquarie University and EWB Monash Malaysia.' },
      { property: 'twitter:title', name: 'twitter:title', content: 'Event Alert: International Games Night 2021 — EWBMQ' },
      { property: 'twitter:description', name: 'twitter:description', content: 'Registration form for the International Games Night 2021 hosted by EWB Macquarie University and EWB Monash Malaysia.' },
      { property: 'twitter:image', name: 'twitter:image', content: '~/assets/events/games-night/games-night-social.png' },
      { property: 'og:type', content: 'event' },
      { property: 'og:title', name: 'og:title', content: 'Event Alert: International Games Night 2021 — EWBMQ' },
      { property: 'og:description', name: 'og:description', content: 'Registration form for the International Games Night 2021 hosted by EWB Macquarie University and EWB Monash Malaysia.' },
      { property: 'og:image', name: 'og:image', content: '~/assets/events/games-night/games-night-social.png' },
      { property: 'og:url', name: 'og:url', content: 'https://ewbmq.org/events/games-night/' }
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
