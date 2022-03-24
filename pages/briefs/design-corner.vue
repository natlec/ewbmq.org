<template>
  <main>
    <div id="content" class="content">
      <header class="c-header">
        <h1 class="c-header-title">
          <span class="c-header-subtitle">Event Brief:</span>
          Design Corner 2022
        </h1>
      </header>

      <section class="c-section c-section--thinTopMargin c-section--thinBottomMargin c-section--thin">
        <p>
          <strong>Welcome to our Inter-Uni Design Corner for 2022!</strong> This page contains a brief overview on how to get started (it's likely you may have already gone through some or all of these steps, but they remain here for your reference), here's what you need to do:
        </p>
        <div class="c-list">
          <ol>
            <li>
              Join the <a href="https://discord.gg/ycyVGpm7vm" target="_blank" rel="noreferrer noopener">EWB NSW Discord server</a>.
            </li>
            <li>
              Check your <a href="https://bit.ly/3tr4dlh" target="_blank" rel="noreferrer noopener">Team Allocations</a> and take note of your team number.
            </li>
            <li>
              Go to the <strong>#dc-welcome</strong> channel of the EWB NSW Discord and react to the welcome message with your team number. This will give you access to your team's dedicated text and voice channels.
            </li>
            <li>
              Download the <a href="/DC22 - Competitor Brief.pdf">Competitor Brief (1.89 MB)</a>, read through it thoroughly, and discuss it with your team. A copy of the Competitor Brief has also been sent to your emails and to your team's dedicated Discord channel.
            </li>
          </ol>
        </div>
        <div class="c-info">
          <strong>Note:</strong> Your team mentor will be there to help answer any questions, please note that mentors are only there to assist with answering logistical questions (think of them as exam invigilators, but with charisma).
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
    title: 'Event Brief: Design Corner 2022 — EWBMQ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Event brief for the EWB Design Corner 2022 hosted by MQ, UNSW, UTS, USYD and WSU.' },
      { property: 'twitter:title', name: 'twitter:title', content: 'Event Brief: Design Corner 2022 — EWBMQ' },
      { property: 'twitter:description', name: 'twitter:description', content: 'Event brief for the EWB Design Corner 2021 hosted by MQ, UNSW, UTS, USYD and WSU.' },
      { property: 'twitter:image', name: 'twitter:image', content: '~/assets/events/design-corner/design-corner-social.png' },
      { property: 'og:type', content: 'event' },
      { property: 'og:title', name: 'og:title', content: 'Event Brief: Design Corner 2022 — EWBMQ' },
      { property: 'og:description', name: 'og:description', content: 'Event brief for the EWB Design Corner 2022 hosted by MQ, UNSW, UTS, USYD and WSU.' },
      { property: 'og:url', name: 'og:url', content: 'https://ewbmq.org/briefs/design-corner/' }
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

.c-list ol {
  list-style: none;
  counter-reset: list;
}
.c-list li {
  margin: 32px 0 32px;
  counter-increment: list;
  padding-left: 64px;
  padding-inline: 24px;
}
.c-list li::before {
  content: counter(list);
  display: inline-flex;
  width: 48px;
  height: 48px;
  margin: 0 12px 0 -64px;
  align-items: center;
  justify-content: center;
  background: var(--color-light-gray);
  color: var(--color-black);
  font: 600 24px 'Red Hat Display';
  border-radius: 100%;
}
</style>
