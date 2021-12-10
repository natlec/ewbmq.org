<template>
  <main>
    <div id="content" class="content">
      <header class="c-header">
        <h1 class="c-header-title">
          <span class="c-header-subtitle">Nominations:</span>
          Join the Executive Team!
        </h1>
      </header>

      <section class="c-section c-section--thinTopMargin c-section--thinBottomMargin c-section--thin">
        <p>
          <strong>Looking to join a leadership position within a dynamic, fast-paced & passionate team of people?</strong> We think the EWBMQ Executive Team is just the place to be, whether it's the top job (Co-President x 2), maintaining our bleeding-edge infrastructure (Secretary), or formulating our financial strategies (Treasurer).
        </p>
        <p>
          Fill out the form below to be nominated for the desired position(s), our formal AGM will be on the <strong>11th of December @ 11:00AM</strong> (this is a fantastic opportunity to pitch yourself for the nominated positions) and elections are open to all members at <strong>11th of December @ 11:30AM</strong> on the same day (make sure to cast your own vote!). Please note that only verified members are eligible to vote and apply for nominations (a verified member is a member who has successfully submitted our <a href="/#members">membership form</a> at least 1 month before the set AGM date).
        </p>
        <div class="c-info">
          <strong>Need help?</strong> Feel free to ping the friendly EWBMQ team by <a href="mailto:macquarie@ewb.org.au" target="_blank" rel="noreferrer noopener" title="Compose a new email to EWBMQ in your default email application">sending us an email</a>.
        </div>
      </section>

      <section class="c-section c-section--thinTopMargin c-section--thin">
        <client-only>
          <Form form-id="4d1e5629-f6fe-4183-b9a6-7990e135ec0e"/>
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
    title: 'Nominations: Join the Executive Team! — EWBMQ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Looking to join a leadership position within a dynamic, fast-paced & passionate team of people?' },
      { property: 'twitter:title', name: 'twitter:title', content: 'Nominations: Join the Executive Team! — EWBMQ' },
      { property: 'twitter:description', name: 'twitter:description', content: 'Looking to join a leadership position within a dynamic, fast-paced & passionate team of people?' },
      { property: 'og:type', content: 'event' },
      { property: 'og:title', name: 'og:title', content: 'Nominations: Join the Executive Team! — EWBMQ' },
      { property: 'og:description', name: 'og:description', content: 'Looking to join a leadership position within a dynamic, fast-paced & passionate team of people?' },
      { property: 'og:url', name: 'og:url', content: 'https://ewbmq.org/forms/join-exec-team/' }
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
