<template>
  <main>
    <Splash />
    <Header />
    <div class="content">
      <section class="c-section">
        <div class="c-video" @click="playVideo">
          <img
            v-if="!videoState"
            class="c-video-thumb"
            src="~/assets/video-thumb.png"
            alt="Click here to play introduction video"
          >
          <youtube
            v-if="videoState"
            ref="youtube"
            class="c-video-frame"
            video-id="zNoDtJ5USHo"
            @playing="playing"
          />
        </div>
      </section>

      <section id="about" class="c-section">
        <div class="c-section-double">
          <div class="c-section-double-left">
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
          <div class="c-section-double-right">
            <h2>
              About EWBMQ
            </h2>
            <p>
              We are EWBMQ, a newly-formed chapter of EWB at Macquarie University. We aim to bring awareness and create social value through humanitarian and sustainable engineering through a variety of events, including: School Outreach Programs, Hackathons, Design Summits and much more.
            </p>
            <p>
              Through partnerships and collaboration, EWB has focused on developing skills, knowledge and creating engineering solutions since 2003; which is now geared to launch at Macquarie University through the engagement of students expanding the dimensions of experience.
            </p>
          </div>
        </div>

        <div class="c-bubbles">
          <ul>
            <li class="c-bubbles-item">
              <img class="c-bubbles-item-image" src="~/assets/headshots/headshot-joseph.png">
              <div class="c-bubbles-item-byline">
                <strong class="c-bubbles-item-byline-title">
                  Joseph Malicdem
                </strong>
                <strong class="c-bubbles-item-byline-subtitle">
                  President
                </strong>
              </div>
              <a class="c-bubbles-item-overlay" href="mailto:joseph.malicdem@students.mq.edu.au" target="_blank" rel="noreferrer noopener">
                <img src="~/assets/icons/icon-email-light.svg" alt="Email" width="32">
                <span>Contact</span>
              </a>
            </li>
            <li class="c-bubbles-item">
              <img class="c-bubbles-item-image" src="~/assets/headshots/headshot-bharosha.png">
              <div class="c-bubbles-item-byline">
                <strong class="c-bubbles-item-byline-title">
                  Bharosha Poudel
                </strong>
                <strong class="c-bubbles-item-byline-subtitle">
                  VP of Operations
                </strong>
              </div>
              <a class="c-bubbles-item-overlay" href="mailto:bharosha.poudel@students.mq.edu.au" target="_blank" rel="noreferrer noopener">
                <img src="~/assets/icons/icon-email-light.svg" alt="Email" width="32">
                <span>Contact</span>
              </a>
            </li>
            <li class="c-bubbles-item">
              <img class="c-bubbles-item-image" src="~/assets/headshots/headshot-abdullah.png">
              <div class="c-bubbles-item-byline">
                <strong class="c-bubbles-item-byline-title">
                  Abdullah Abualsaud
                </strong>
                <strong class="c-bubbles-item-byline-subtitle">
                  VP of Partnerships
                </strong>
              </div>
              <a class="c-bubbles-item-overlay" href="mailto:abdullah-abdulaziz-j.abuals@students.mq.edu.au" target="_blank" rel="noreferrer noopener">
                <img src="~/assets/icons/icon-email-light.svg" alt="Email" width="32">
                <span>Contact</span>
              </a>
            </li>
            <li class="c-bubbles-item">
              <img class="c-bubbles-item-image" src="~/assets/headshots/headshot-bijoya.png">
              <div class="c-bubbles-item-byline">
                <strong class="c-bubbles-item-byline-title">
                  Bijoya Bakali
                </strong>
                <strong class="c-bubbles-item-byline-subtitle">
                  Treasurer
                </strong>
              </div>
              <a class="c-bubbles-item-overlay" href="mailto:bijoya.bakali@students.mq.edu.au" target="_blank" rel="noreferrer noopener">
                <img src="~/assets/icons/icon-email-light.svg" alt="Email" width="32">
                <span>Contact</span>
              </a>
            </li>
            <li class="c-bubbles-item">
              <img class="c-bubbles-item-image" src="~/assets/headshots/headshot-nathan.png">
              <div class="c-bubbles-item-byline">
                <strong class="c-bubbles-item-byline-title">
                  Nathan Lecompte
                </strong>
                <strong class="c-bubbles-item-byline-subtitle">
                  Secretary
                </strong>
              </div>
              <a class="c-bubbles-item-overlay" href="mailto:nathan.lecompte@students.mq.edu.au" target="_blank" rel="noreferrer noopener">
                <img src="~/assets/icons/icon-email-light.svg" alt="Email" width="32">
                <span>Contact</span>
              </a>
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
              We run a variety of social events, workshops and networking opportunities throughout the year available excusively to our members.
            </p>
            <p>
              Tune into our social channels for further updates:
            </p>
            <ul class="c-socials">
              <li class="c-socials-item">
                <a href="https://www.instagram.com/ewbmacquarie" target="_blank" rel="noreferrer noopener">
                  <img src="~/assets/icons/icon-instagram.svg" alt="Instagram">
                </a>
              </li>
              <li class="c-socials-item">
                <a href="https://www.facebook.com/ewbmq" target="_blank" rel="noreferrer noopener">
                  <img src="~/assets/icons/icon-facebook.svg" alt="facebook">
                </a>
              </li>
              <li class="c-socials-item">
                <a href="https://discord.gg/HGxBsCq" target="_blank" rel="noreferrer noopener">
                  <img src="~/assets/icons/icon-discord.svg" alt="Discord">
                </a>
              </li>
              <li class="c-socials-item">
                <a href="https://www.twitter.com/ewbmq" target="_blank" rel="noreferrer noopener">
                  <img src="~/assets/icons/icon-twitter.svg" alt="Twitter">
                </a>
              </li>
              <li class="c-socials-item">
                <a href="mailto:macquarie@ewb.org.au" target="_blank" rel="noreferrer noopener">
                  <img src="~/assets/icons/icon-email.svg" alt="Email">
                </a>
              </li>
            </ul>
          </div>
          <div class="c-section-double-right">
            <script src="https://js.hsforms.net/forms/shell.js" />
            <script>
              hbspt.forms.create({
              portalId: "9223100",
              formId: "e8ab8e7f-6fbc-47aa-a6ee-e37867427d95"
              });
            </script>
          </div>
        </div>
      </section>

      <section id="news" class="c-section">
        <h2>
          Latest News
        </h2>
        <ul class="c-news">
          <li class="c-news-item">
            <!-- <img src="~/assets/news/news-general-committee.png" alt="General Committee news banner"> -->
            <p>
              Interested in getting involved in helping run our internal operations and gain valuable experience working with a team of like-minded individuals? Consider joining our General Committee as a general member or director!
            </p>
          </li>
          <li class="c-news-item">
            <!-- <img src="~/assets/news/news-o-week.png" alt="O-Week news banner"> -->
            <p>
              It's that time of year again, O-Week is nearly here! Get ready to hear about EWBMQ in detail and ask all of your burning questions in our virtual Digital nEWBie sessions run throughout O-Week!
            </p>
          </li>
          <li class="c-news-item">
            <!-- <img src="~/assets/news/news-affiliation.png" alt="Affiliation news banner"> -->
            <p>
              We have some exciting news to share with you all, EWBMQ is now officially an affiliated society at Macquarie University! For those participating in the GLP, a majority of EWBMQ opportunities are now eligible for GLP credit points!
            </p>
          </li>
        </ul>
        <div class="c-cta">
          <div class="c-cta-left">
            <h3>
              Monthly Newsletter
            </h3>
            <p>
              Want the latest updates sent straight to your inbox?<br>
              <strong>Sign-up for our monthly newsletter!</strong>
            </p>
          </div>
          <div class="c-cta-right">
            <div class="c-cta-form">
              <!-- TODO: Add Hubspot form -->
            </div>
            <p>
              Unsubscribe anytime. No spam, ever.
            </p>
          </div>
        </div>
      </section>

      <section class="c-section">
        <div class="c-section-double">
          <div class="c-section-double-left">
            <h2>
              Operations
            </h2>
            <p>
              We aim to be transparent about our internal operations and have built our portal to provide executives, members and curious minds alike with access to all of our internal documents, resources and more.
            </p>
            <div class="c-info">
              Note: To respect the privacy of our members, personally-identifiable information on EWBMQ members (with the exception of members within the executive team) is not publicly accessible through any of the hosted content platforms we maintain.
            </div>
          </div>
          <div class="c-section-double-right">
            <ul>
              <li>
                <a href="" rel="noreferrer noopener">
                  📰 Monthly Newsletter
                </a>
              </li>
              <li>
                <a href="" rel="noreferrer noopener">
                  📜 Constitution
                </a>
              </li>
              <li>
                <a href="" rel="noreferrer noopener">
                  📝 Forms
                </a>
              </li>
              <li>
                <a href="" rel="noreferrer noopener">
                  🔨 Tasks
                </a>
              </li>
              <li>
                <a href="" rel="noreferrer noopener">
                  📅 Calendar
                </a>
              </li>
              <li>
                <a href="" rel="noreferrer noopener">
                  📢 General Committee
                </a>
              </li>
              <li>
                <a href="" rel="noreferrer noopener">
                  ✏️ Meeting Notes
                </a>
              </li>
              <li>
                <a href="" rel="noreferrer noopener">
                  📐 Event Plans
                </a>
              </li>
              <li>
                <a href="" rel="noreferrer noopener">
                  🤝 Partner Program
                </a>
              </li>
              <li>
                <a href="" rel="noreferrer noopener">
                  📎 Resources
                </a>
              </li>
              <li>
                <a href="" rel="noreferrer noopener">
                  💰 Finances
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
  data () {
    return {
      videoState: false
    }
  },
  computed: {
    videoPlayer () {
      return this.$refs.youtube.player
    }
  },
  methods: {
    playVideo () {
      this.videoState = true
      this.videoPlayer.playVideo()
    }
  }
}
</script>

<style>
.content {

}
.c-section {
  margin: 15vh 15vw;
}
.c-video {
  display: block;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  z-index: 1;
  width: 100%;
  height: 0;
  padding-bottom: 56%;
  box-shadow: 0 4px 8px rgba(24, 24, 24, .05),
              0 2px 4px rgba(24, 24, 24, .05);
}
.c-video-thumb{
  position: absolute;
  cursor: pointer;
  width: 100%;
  height: 100%;
}
.c-video-frame {
  position: absolute;
  border-radius: 16px;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
</style>
