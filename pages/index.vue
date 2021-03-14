<template>
  <main>
    <Splash />
    <Header />
    <div class="content">
      <section class="c-section">
        <VideoPlayer />
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
          <ul class="c-bubbles-list">
            <li class="c-bubbles-item">
              <div class="c-bubbles-item-image-container">
                <img class="c-bubbles-item-image" src="~/assets/headshots/headshot-joseph.png">
                <a class="c-bubbles-item-overlay" href="mailto:joseph.malicdem@students.mq.edu.au" target="_blank" rel="noreferrer noopener" title="Contact Joseph Malicdem">
                  <img src="~/assets/icons/icon-email-light.svg" alt="Email" width="48">
                  <span>Contact</span>
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
                <img class="c-bubbles-item-image" src="~/assets/headshots/headshot-bharosha.png">
                <a class="c-bubbles-item-overlay" href="mailto:bharosha.poudel@students.mq.edu.au" target="_blank" rel="noreferrer noopener" title="Contact Bharosha Poudel">
                  <img src="~/assets/icons/icon-email-light.svg" alt="Email" width="48">
                  <span>Contact</span>
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
                <img class="c-bubbles-item-image" src="~/assets/headshots/headshot-abdullah.png">
                <a class="c-bubbles-item-overlay" href="mailto:abdullah-abdulaziz-j.abuals@students.mq.edu.au" target="_blank" rel="noreferrer noopener" title="Contact Abdullah Abualsaud">
                  <img src="~/assets/icons/icon-email-light.svg" alt="Email" width="48">
                  <span>Contact</span>
                </a>
              </div>
              <div class="c-bubbles-item-byline">
                <strong class="c-bubbles-item-byline-title">
                  Abdullah Abualsaud
                </strong>
                <span class="c-bubbles-item-byline-subtitle">
                  VP of Partnerships
                </span>
              </div>
            </li>
            <li class="c-bubbles-item">
              <div class="c-bubbles-item-image-container">
                <img class="c-bubbles-item-image" src="~/assets/headshots/headshot-bijoya.png">
                <a class="c-bubbles-item-overlay" href="mailto:bijoya.bakali@students.mq.edu.au" target="_blank" rel="noreferrer noopener" title="Contact Bijoya Bakali">
                  <img src="~/assets/icons/icon-email-light.svg" alt="Email" width="48">
                  <span>Contact</span>
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
                <img class="c-bubbles-item-image" src="~/assets/headshots/headshot-nathan.png">
                <a class="c-bubbles-item-overlay" href="mailto:nathan.lecompte@students.mq.edu.au" target="_blank" rel="noreferrer noopener" title="Contact Nathan Lecompte">
                  <img src="~/assets/icons/icon-email-light.svg" alt="Email" width="48">
                  <span>Contact</span>
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
                <img class="c-bubbles-item-image" src="~/assets/headshots/headshot-shahariar.png">
                <a class="c-bubbles-item-overlay" href="mailto:md-shahariar.mollah@students.mq.edu.au" target="_blank" rel="noreferrer noopener" title="Contact Md Shahariar Mollah">
                  <img src="~/assets/icons/icon-email-light.svg" alt="Email" width="48">
                  <span>Contact</span>
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
                <img class="c-bubbles-item-image" src="~/assets/headshots/headshot-jordan.png">
                <a class="c-bubbles-item-overlay" href="mailto:jordan.cairns@students.mq.edu.au" target="_blank" rel="noreferrer noopener" title="Contact Jordan Cairns">
                  <img src="~/assets/icons/icon-email-light.svg" alt="Email" width="48">
                  <span>Contact</span>
                </a>
              </div>
              <div class="c-bubbles-item-byline">
                <strong class="c-bubbles-item-byline-title">
                  Jordan Cairns
                </strong>
                <span class="c-bubbles-item-byline-subtitle">
                  School Outreach Coordinator
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
              We run a variety of social events, workshops and networking opportunities throughout the year available excusively to our members.
            </p>
            <p>
              Tune into our social channels for further updates:
            </p>
            <ul class="c-socials">
              <li class="c-socials-item">
                <a href="https://www.instagram.com/ewbmacquarie" target="_blank" rel="noreferrer noopener" title="Instagram">
                  <img src="~/assets/icons/icon-instagram.svg" alt="Instagram" width="64">
                </a>
              </li>
              <li class="c-socials-item">
                <a href="https://www.facebook.com/ewbmq" target="_blank" rel="noreferrer noopener" title="Facebook">
                  <img src="~/assets/icons/icon-facebook.svg" alt="Facebook" width="64">
                </a>
              </li>
              <li class="c-socials-item">
                <a href="https://discord.gg/HGxBsCq" target="_blank" rel="noreferrer noopener" title="Discord">
                  <img src="~/assets/icons/icon-discord.svg" alt="Discord" width="64">
                </a>
              </li>
              <li class="c-socials-item">
                <a href="https://www.twitter.com/ewbmq" target="_blank" rel="noreferrer noopener" title="Twitter">
                  <img src="~/assets/icons/icon-twitter.svg" alt="Twitter" width="64">
                </a>
              </li>
              <li class="c-socials-item">
                <a href="mailto:macquarie@ewb.org.au" target="_blank" rel="noreferrer noopener" title="Email">
                  <img src="~/assets/icons/icon-email.svg" alt="Email" width="64">
                </a>
              </li>
            </ul>
          </div>
          <div class="c-section-double-right">
            <Form />
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

<style>
hr {
  border: 1px solid var(--color-light-gray);
}
.content .c-section:first-child {
  margin-top: 64px;
}
.c-section {
  margin: 15vh 15vw;
}
.c-section-double {
  display: flex;
  flex-direction: row;
}
.c-section-double-left {
  flex: 1;
  margin-right: 32px;
}
.c-section-double-right {
  flex: 1;
  margin-left: 32px;
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
  border: 6px solid transparent;
  border-radius: 100%;
  font-weight: 600;
  line-height: 2;
  text-decoration: none;
  opacity: 0;
  outline: none;
  transform: scale(1);
  transition: opacity .2s ease;
}
.c-bubbles-item:hover .c-bubbles-item-overlay,
.c-bubbles-item-overlay:focus {
  opacity: .95;
}
.c-bubbles-item-overlay:focus {
  border-color: var(--color-black);
  box-shadow: inset 0 0 0 4px var(--color-light-gray);
}
.c-socials {
  list-style-type: none;
  margin: 32px 0 0;
  padding: 0;
}
.c-socials-item {
  display: inline-block;
  position: relative;
  margin: 16px;
  border-radius: 100%;
  width: 64px;
  height: 64px;
  background: var(--color-black);
  border: 4px solid var(--color-black);
  outline: none;
}
.c-socials-item:focus-within {
  border-color: var(--color-black);
  box-shadow: inset 0 0 0 3px var(--color-light-gray);
}
</style>
