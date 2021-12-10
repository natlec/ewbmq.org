<template>
  <main>
    <Splash v-if="!isMobile()" />
    <div id="content" class="content">
      <client-only>
        <Header />
      </client-only>

      <section class="c-section c-section--thinTopMargin">
        <client-only>
          <VideoPlayer />
        </client-only>
      </section>

      <section id="about" class="c-section">
        <div class="c-section-double">
          <div class="c-section-double-left">
            <h2>
              About EWBMQ
            </h2>
            <p>
              We are EWBMQ, a newly-formed chapter of Engineers Without Borders (EWB) at Macquarie University. We aim to bring awareness and create social value through humanitarian and sustainable engineering through a variety of events, including: School Outreach Programs, Hackathons, Design Summits and much more.
            </p>
            <p>
              Through partnerships and collaboration, EWB has focused on developing skills, knowledge and creating engineering solutions since 2003; which is now geared to launch at Macquarie University through the engagement of students expanding the dimensions of experience.
            </p>
          </div>
          <div class="c-section-double-right">
            <div class="c-highlight">
              <strong class="c-highlight-title">
                Our Vision:
              </strong>
              <mark class="c-highlight-mark">
                A world where technology benefits all.
              </mark>
            </div>
            <hr>
            <div class="c-highlight">
              <strong class="c-highlight-title">
                Our Mission:
              </strong>
              <mark class="c-highlight-mark">
                Redefining the purpose and impact of engineering as a critical enabler of sustainable development.
              </mark>
            </div>
          </div>
        </div>

        <div class="c-bubbles">
          <ul class="c-bubbles-list">
            <li class="c-bubbles-item">
              <div class="c-bubbles-item-image-container">
                <img loading="lazy" class="c-bubbles-item-image" src="~/assets/headshots/headshot-joseph.png" alt="Headshot for Joseph Malicdem">
                <a class="c-bubbles-item-overlay" href="mailto:joseph.malicdem@students.mq.edu.au" target="_blank" rel="noreferrer noopener">
                  <img src="~/assets/icons/icon-email-light.svg" alt="Email" width="48">
                  Contact
                </a>
              </div>
              <div class="c-bubbles-item-byline">
                <strong class="c-bubbles-item-byline-title">
                  Joseph Malicdem
                </strong>
                <span class="c-bubbles-item-byline-subtitle">
                  President
                </span>
              </div>
            </li>
            <li class="c-bubbles-item">
              <div class="c-bubbles-item-image-container">
                <img loading="lazy" class="c-bubbles-item-image" src="~/assets/headshots/headshot-bharosha.png" alt="Headshot for Bharosha Poudel">
                <a class="c-bubbles-item-overlay" href="mailto:bharosha.poudel@students.mq.edu.au" target="_blank" rel="noreferrer noopener">
                  <img src="~/assets/icons/icon-email-light.svg" alt="Email" width="48">
                  Contact
                </a>
              </div>
              <div class="c-bubbles-item-byline">
                <strong class="c-bubbles-item-byline-title">
                  Bharosha Poudel
                </strong>
                <span class="c-bubbles-item-byline-subtitle">
                  VP of Operations
                </span>
              </div>
            </li>
            <li class="c-bubbles-item">
              <div class="c-bubbles-item-image-container">
                <img loading="lazy" class="c-bubbles-item-image" src="~/assets/headshots/headshot-abdullah.png" alt="Headshot for Abdullah Abualsaud">
                <a class="c-bubbles-item-overlay" href="mailto:abdullah-abdulaziz-j.abuals@students.mq.edu.au" target="_blank" rel="noreferrer noopener">
                  <img src="~/assets/icons/icon-email-light.svg" alt="Email" width="48">
                  Contact
                </a>
              </div>
              <div class="c-bubbles-item-byline">
                <strong class="c-bubbles-item-byline-title">
                  Abdullah Abualsaud
                </strong>
                <span class="c-bubbles-item-byline-subtitle">
                  VP of Partnerships / <br> School Outreach Coordinator
                </span>
              </div>
            </li>
            <li class="c-bubbles-item">
              <div class="c-bubbles-item-image-container">
                <img loading="lazy" class="c-bubbles-item-image" src="~/assets/headshots/headshot-bijoya.png" alt="Headshot for Bijoya Bakali">
                <a class="c-bubbles-item-overlay" href="mailto:bijoya.bakali@students.mq.edu.au" target="_blank" rel="noreferrer noopener">
                  <img src="~/assets/icons/icon-email-light.svg" alt="Email" width="48">
                  Contact
                </a>
              </div>
              <div class="c-bubbles-item-byline">
                <strong class="c-bubbles-item-byline-title">
                  Bijoya Bakali
                </strong>
                <span class="c-bubbles-item-byline-subtitle">
                  Treasurer
                </span>
              </div>
            </li>
            <li class="c-bubbles-item">
              <div class="c-bubbles-item-image-container">
                <img loading="lazy" class="c-bubbles-item-image" src="~/assets/headshots/headshot-nathan.png" alt="Headshot for Nathan Lecompte">
                <a class="c-bubbles-item-overlay" href="mailto:nathan.lecompte@students.mq.edu.au" target="_blank" rel="noreferrer noopener">
                  <img src="~/assets/icons/icon-email-light.svg" alt="Email" width="48">
                  Contact
                </a>
              </div>
              <div class="c-bubbles-item-byline">
                <strong class="c-bubbles-item-byline-title">
                  Nathan Lecompte
                </strong>
                <span class="c-bubbles-item-byline-subtitle">
                  Secretary
                </span>
              </div>
            </li>
            <li class="c-bubbles-item">
              <div class="c-bubbles-item-image-container">
                <img loading="lazy" class="c-bubbles-item-image" src="~/assets/headshots/headshot-shahariar.png" alt="Headshot for Md Shahariar Mollah">
                <a class="c-bubbles-item-overlay" href="mailto:md-shahariar.mollah@students.mq.edu.au" target="_blank" rel="noreferrer noopener">
                  <img src="~/assets/icons/icon-email-light.svg" alt="Email" width="48">
                  Contact
                  <span class="u-assistive-hidden">
                    md-shahariar.mollah@students.mq.edu.au
                  </span>
                </a>
              </div>
              <div class="c-bubbles-item-byline">
                <strong class="c-bubbles-item-byline-title">
                  Md Shahariar Mollah
                </strong>
                <span class="c-bubbles-item-byline-subtitle">
                  Marketing Director
                </span>
              </div>
            </li>
            <li class="c-bubbles-item">
              <div class="c-bubbles-item-image-container">
                <img loading="lazy" class="c-bubbles-item-image" src="~/assets/headshots/headshot-raphael.png" alt="Headshot for Raphael Paras">
                <a class="c-bubbles-item-overlay" href="mailto:raphael.paras@students.mq.edu.au" target="_blank" rel="noreferrer noopener">
                  <img src="~/assets/icons/icon-email-light.svg" alt="Email" width="48">
                  Contact
                </a>
              </div>
              <div class="c-bubbles-item-byline">
                <strong class="c-bubbles-item-byline-title">
                  Raphael Paras
                </strong>
                <span class="c-bubbles-item-byline-subtitle">
                  Events Director
                </span>
              </div>
            </li>
            <li class="c-bubbles-item">
              <div class="c-bubbles-item-image-container">
                <img loading="lazy" class="c-bubbles-item-image" src="~/assets/headshots/headshot-shiaw-shiuan.png" alt="Headshot for Shiaw Shiuan Lin">
                <a class="c-bubbles-item-overlay" href="mailto:shiaw-shiuan.lin@students.mq.edu.au" target="_blank" rel="noreferrer noopener">
                  <img src="~/assets/icons/icon-email-light.svg" alt="Email" width="48">
                  Contact
                </a>
              </div>
              <div class="c-bubbles-item-byline">
                <strong class="c-bubbles-item-byline-title">
                  Shiaw Shiuan Lin
                </strong>
                <span class="c-bubbles-item-byline-subtitle">
                  Content Director
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section id="members" class="c-section">
        <div class="c-section-double">
          <div class="c-section-double-left">
            <h2>
              Membership
            </h2>
            <p>
              Interested in joining EWBMQ as a volunteer? Whether you've only just started uni or are well on your way to completing the final boss battle of academia, everyone is welcome!
            </p>
            <p>
              We run a variety of social events, workshops and networking opportunities throughout the year available exclusively to our members.
            </p>
            <p>
              Tune into our social & comms channels for further updates:
            </p>
            <ul class="c-socials">
              <li class="c-socials-item">
                <a class="c-socials-item-link" href="https://www.instagram.com/ewbmacquarie" target="_blank" rel="noreferrer noopener">
                  <img loading="lazy" class="c-socials-item-image" src="~/assets/icons/icon-instagram.svg" alt="Instagram icon" width="48">
                  <span class="c-socials-item-label">
                    Instagram
                  </span>
                </a>
              </li>
              <li class="c-socials-item">
                <a class="c-socials-item-link" href="https://www.facebook.com/ewbmq" target="_blank" rel="noreferrer noopener">
                  <img loading="lazy" class="c-socials-item-image" src="~/assets/icons/icon-facebook.svg" alt="Facebook icon" width="48">
                  <span class="c-socials-item-label">
                    Facebook
                  </span>
                </a>
              </li>
              <li class="c-socials-item">
                <a class="c-socials-item-link" href="https://discord.gg/HGxBsCq" target="_blank" rel="noreferrer noopener">
                  <img loading="lazy" class="c-socials-item-image" src="~/assets/icons/icon-discord.svg" alt="Discord icon" width="48">
                  <span class="c-socials-item-label">
                    Discord
                  </span>
                </a>
              </li>
              <li class="c-socials-item">
                <a class="c-socials-item-link" href="https://www.twitter.com/ewbmq" target="_blank" rel="noreferrer noopener">
                  <img loading="lazy" class="c-socials-item-image" src="~/assets/icons/icon-twitter.svg" alt="Twitter icon" width="48">
                  <span class="c-socials-item-label">
                    Twitter
                  </span>
                </a>
              </li>
              <li class="c-socials-item">
                <a class="c-socials-item-link" href="mailto:macquarie@ewb.org.au" target="_blank" rel="noreferrer noopener">
                  <img loading="lazy" class="c-socials-item-image" src="~/assets/icons/icon-email.svg" alt="Email icon" width="48">
                  <span class="c-socials-item-label">
                    Email
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div class="c-section-double-right">
            <client-only>
              <Form />
            </client-only>
          </div>
        </div>
      </section>

      <section id="ops" class="c-section">
        <div class="c-section-double">
          <div class="c-section-double-left">
            <h2>
              Operations
            </h2>
            <p>
              We aim to be transparent about our internal operations and have built our portal to provide executives, members and curious minds alike with access to all of our internal documents, resources and more.
            </p>
            <div class="c-info">
              <strong>Note:</strong> To respect the privacy of our members, personally-identifiable information on EWBMQ members (with the exception of members within the executive team) is not publicly accessible through any of the hosted content platforms we maintain.
            </div>
          </div>
          <div class="c-section-double-right">
            <ul class="c-list">
              <li class="c-list-item">
                <a href="https://www.notion.so/Constitution-f9de2fec67544fce99c8dcb78f80f773" rel="noreferrer noopener">
                  <span class="c-list-item-icon">📜</span>Constitution
                </a>
              </li>
              <li class="c-list-item">
                <a href="https://www.notion.so/a2f39258457d4bdca30d594912d39c28" rel="noreferrer noopener">
                  <span class="c-list-item-icon">📝</span>Forms
                </a>
              </li>
              <li class="c-list-item">
                <a href="https://www.notion.so/58f48d6e6afa4b85bb54035aa8f3c5f7" rel="noreferrer noopener">
                  <span class="c-list-item-icon">🔨</span>Tasks
                </a>
              </li>
              <li class="c-list-item">
                <a href="https://www.notion.so/b8fac119248948b08fd011f0712a7829" rel="noreferrer noopener">
                  <span class="c-list-item-icon">📅</span>Event Calendar
                </a>
              </li>
              <li class="c-list-item">
                <a href="https://www.notion.so/2282ba7f33d743c0856a72f72cce3df1" rel="noreferrer noopener">
                  <span class="c-list-item-icon">📐</span>Event Plans
                </a>
              </li>
            </ul>
            <ul class="c-list">
              <li class="c-list-item">
                <a href="https://www.notion.so/General-Committee-12bd15c9cc5a47d2b9d88611108c2d80" rel="noreferrer noopener">
                  <span class="c-list-item-icon">📢</span>General Committee
                </a>
              </li>
              <li class="c-list-item">
                <a href="https://www.notion.so/e79473a92ddf4afd8b2c2b805b0c7bdd" rel="noreferrer noopener">
                  <span class="c-list-item-icon">✏️</span>Meeting Notes
                </a>
              </li>
              <li class="c-list-item">
                <a href="https://www.notion.so/2b71d2520f0447ac83d1d1ff3ec9ef61" rel="noreferrer noopener">
                  <span class="c-list-item-icon">⚖️</span>Alumni
                </a>
              </li>
              <li class="c-list-item">
                <a href="https://www.notion.so/acd62c7881c14d7ab55c2f5941562a69" rel="noreferrer noopener">
                  <span class="c-list-item-icon">📎</span>Resources
                </a>
              </li>
              <li class="c-list-item">
                <a href="https://www.notion.so/Finances-275edb03d1694648bae8d3f94d673a75" rel="noreferrer noopener">
                  <span class="c-list-item-icon">💰</span>Finances
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </main>
</template>

<script>
export default {
  components: {
    Splash: () => process.client ? import('~/components/Splash.vue') : null,
    Header: () => process.client ? import('~/lazy-components/Header.vue') : null,
    Form: () => process.client ? import('~/lazy-components/Form.vue') : null,
    VideoPlayer: () => process.client ? import(/* webpackPrefetch: true */ '~/lazy-components/VideoPlayer.vue') : null
  },
  methods: {
    isMobile () {
      return window.innerWidth < 1024
    }
  }
}
</script>

<style scoped>
.u-assistive-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
.c-highlight {
  font-style: italic;
  text-align: center;
  padding: 48px 32px;
}
.c-highlight-title {
  display: block;
  color: var(--color-green);
  font-size: 1.2em;
  font-weight: 600;
  line-height: 2;
}
.c-highlight-mark {
  color: var(--color-black);
  background: var(--color-background);
  font-size: 1.44em;
  font-weight: 600;
}
.c-bubbles {
  text-align: center;
  font-size: 1em;
  margin: 128px 0;
}
.c-bubbles-list {
  list-style-type: none;
  padding: 0;
  margin: 48px 0;
}
.c-bubbles-item {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin: 48px;
}
.c-bubbles-item-image {
  width: 196px;
  z-index: 1;
}
.c-bubbles-item-byline {
  margin: 24px 0 0;
}
.c-bubbles-item-byline-title {
  display: block;
  font-size: 1.2em;
  font-family: 'Red Hat Display';
  color: var(--color-black);
}
.c-bubbles-item-byline-subtitle {
  display: block;
  margin: 4px 0 0;
}
.c-bubbles-item-image-container {
  display: block;
  position: relative;
  border-radius: 100%;
  width: 196px;
  height: 196px;
}
.c-bubbles-item-overlay {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--color-black);
  opacity: .85;
  color: var(--color-light-gray);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border: 4px solid transparent;
  border-radius: 100%;
  font-family: 'Red Hat Display';
  font-weight: 600;
  line-height: 2;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-decoration-color: var(--color-light-gray);
  opacity: 0;
  outline: none;
  transform: scale(1);
  transition: opacity .2s ease,
              box-shadow .2s ease;
}
.c-bubbles-item-overlay:hover {
  border-color: var(--color-black);
  box-shadow: inset 0 0 0 4px var(--color-dark-gray);
  opacity: 1;
}
.c-bubbles-item-overlay:focus {
  text-decoration: none;
  color: var(--color-light-gray);
  background: var(--color-green);
  border-color: var(--color-light-gray);
  box-shadow: 0 0 0 4px var(--color-black);
  opacity: 1;
}
.c-socials {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 32px 0 0;
  padding: 0;
}
.c-socials-item {
  display: block;
  margin: 24px 0;
  flex: 0 0 50%;
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
.c-list {
  display: inline-block;
  vertical-align: top;
  list-style-type: none;
  padding: 0;
  margin: 100px 16px 0;
  max-height: 300px;
}
.c-list-item {
  margin: 16px 0;
}
.c-list-item-icon {
  display: inline-block;
  font-size: 1.2em;
  text-align: center;
  text-decoration: none;
  width: 24px;
  margin-right: 16px;
}
@media (max-width: 1024px) {
  .c-highlight {
    padding: 32px;
  }
  .c-bubbles {
    margin: 0;
  }
  .c-bubbles-item {
    margin: 32px;
  }
  .c-socials-item {
    margin: 24px;
    flex: 0 0 auto;
  }
  .c-list {
    display: block;
    margin: 32px;
  }
}
</style>
