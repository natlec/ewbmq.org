<template>
  <main>
    <div id="content" class="content">
      <header class="c-header">
        <h1 class="c-header-title">
          <span class="c-header-subtitle">Event Alert:</span>
          Design Corner 2021
        </h1>
      </header>

      <section class="c-section c-section--thinTopMargin c-section--thinBottomMargin c-section--thin">
        <p>
          <strong>Registrations for the Design Corner for 2021 are now closed.</strong> Keep an eye out for more details on the <a href="https://www.facebook.com/events/458227145428271/" target="_blank" rel="noreferrer noopener" alt="Visit the EWBMQ Facebook page">Facebook event page</a>.
        </p>
        <div class="c-info">
          <strong>Note:</strong> Attendance is mandatory for all 3 days in order to qualify. <a href="mailto:macquarie@ewb.org.au" target="_blank" rel="noreferrer noopener" title="Let us know via email">Let us know</a> if you are unable to attend any of the 3 days.
        </div>
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
  head: {
    title: 'Event Alert: Design Corner 2021 — EWBMQ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Registration form for the EWB Design Corner 2021 hosted by Macquarie University, UNSW, UTS, USYD and WSU.' },
      { property: 'twitter:title', name: 'twitter:title', content: 'Event Alert: Design Corner 2021 — EWBMQ' },
      { property: 'twitter:description', name: 'twitter:description', content: 'Registration form for the EWB Design Corner 2021 hosted by Macquarie University, UNSW, UTS, USYD and WSU.' },
      { property: 'twitter:image', name: 'twitter:image', content: '~/assets/events/design-corner/design-corner-social.png' },
      { property: 'og:type', content: 'event' },
      { property: 'og:title', name: 'og:title', content: 'Event Alert: Design Corner 2021 — EWBMQ' },
      { property: 'og:description', name: 'og:description', content: 'Registration form for the EWB Design Corner 2021 hosted by Macquarie University, UNSW, UTS, USYD and WSU.' },
      { property: 'og:image', name: 'og:image', content: '~/assets/events/design-corner/design-corner-social.png' },
      { property: 'og:url', name: 'og:url', content: 'https://ewbmq.org/events/design-corner/' }
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
