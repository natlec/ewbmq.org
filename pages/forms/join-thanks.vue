<template>
  <main>
    <div id="content" class="content">
      <header class="c-header">
        <h1 class="c-header-title">
          <span class="c-header-subtitle">Congratulations:</span>
          You're now a member!
        </h1>
      </header>

      <section class="c-section c-section--center c-section--thinTopMargin c-section--thinBottomMargin c-section--thin">
        <p>
          <strong>Thanks for joining EWBMQ!</strong> You've automatically been added to our mailing list and membership register; make sure to tune-into our other social & comms channels (we're particularly active on <a href="https://discord.gg/HGxBsCq" target="_blank" rel="noreferrer noopener">Discord</a>):
        </p>
        <ul class="c-socials c-socials--center">
          <li class="c-socials-item">
            <a class="c-socials-item-link" href="https://www.instagram.com/ewbmacquarie" target="_blank" rel="noreferrer noopener" title="Instagram">
              <img loading="lazy" class="c-socials-item-image" src="~/assets/icons/icon-instagram.svg" alt="Instagram" width="48">
              <span class="c-socials-item-label">
                Instagram
              </span>
            </a>
          </li>
          <li class="c-socials-item">
            <a class="c-socials-item-link" href="https://www.facebook.com/ewbmq" target="_blank" rel="noreferrer noopener" title="Facebook">
              <img loading="lazy" class="c-socials-item-image" src="~/assets/icons/icon-facebook.svg" alt="Facebook" width="48">
              <span class="c-socials-item-label">
                Facebook
              </span>
            </a>
          </li>
          <li class="c-socials-item">
            <a class="c-socials-item-link" href="https://discord.gg/HGxBsCq" target="_blank" rel="noreferrer noopener" title="Discord">
              <img loading="lazy" class="c-socials-item-image" src="~/assets/icons/icon-discord.svg" alt="Discord" width="48">
              <span class="c-socials-item-label">
                Discord
              </span>
            </a>
          </li>
          <li class="c-socials-item">
            <a class="c-socials-item-link" href="https://www.twitter.com/ewbmq" target="_blank" rel="noreferrer noopener" title="Twitter">
              <img loading="lazy" class="c-socials-item-image" src="~/assets/icons/icon-twitter.svg" alt="Twitter" width="48">
              <span class="c-socials-item-label">
                Twitter
              </span>
            </a>
          </li>
        </ul>
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
    title: "Congratulations: You're now a member! — EWBMQ",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'noindex' }
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

.c-socials {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 32px 0 0;
  padding: 0;
  align-items: center;
  justify-content: center;
}
.c-socials-item {
  display: block;
  margin: 24px;
  flex: 0 0 1;
}
.c-socials-item-link {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--color-black);
  text-decoration: none;
}
.c-socials-item-image {
  display: block;
  position: relative;
  border-radius: 100%;
  width: 48px;
  height: 48px;
  background: var(--color-black);
  border: 3px solid var(--color-black);
  outline: none;
  transition: box-shadow .2s ease;
}
.c-socials-item-link:focus {
  box-shadow: none;
  background: var(--color-background);
  color: var(--color-black);
}
.c-socials-item-link:hover .c-socials-item-image {
  border-color: var(--color-black);
  box-shadow: inset 0 0 0 3px var(--color-dark-gray);
}
.c-socials-item-link:focus .c-socials-item-image {
  background: var(--color-green);
  border-color: var(--color-light-gray);
  box-shadow: 0 0 0 4px var(--color-black);
}
.c-socials-item-label {
  display: block;
  margin: 16px;
  font-family: 'Red Hat Display';
}
.c-socials-item-link:hover .c-socials-item-label {
  text-decoration: underline 2px;
}
.c-socials-item-link:focus .c-socials-item-label {
  text-decoration: none;
  background: var(--color-yellow);
  box-shadow: 0 -2px var(--color-yellow),
              0 4px var(--color-black);
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
