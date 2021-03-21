<template>
  <footer class="c-footer">
    <div class="c-footer-aoc">
      <p>
        EWBMQ respectfully acknowledges the Traditional Owners of the Country on which we work.
      </p>
      <img src="~/assets/flag-aboriginal.svg" alt="Aboriginal Flag" height="24">
      <img src="~/assets/flag-torres-strait-islander.svg" alt="Torres Strait Islander Flag" height="24">
    </div>
    <div class="c-footer-copyright">
      © {{ copyrightDate }} EWBMQ
    </div>
    <ul class="c-footer-links">
      <li class="c-footer-links-item">
        <a href="https://github.com/natlec/ewbmq.org/" rel="noreferrer noopener">
          Source Code
        </a>
      </li>
      <li class="c-footer-links-divider">
        ·
      </li>
      <li class="c-footer-links-item">
        <a href="https://ewb.org.au" rel="noreferrer noopener">
          EWB
        </a>
      </li>
      <li class="c-footer-links-divider">
        ·
      </li>
      <li class="c-footer-links-item">
        <a href="https://mq.edu.au" rel="noreferrer noopener">
          Macquarie Uni
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      copyrightDate: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.c-footer {
  font-size: 1em;
  padding: 5vh 15vw 25vh;
  background: no-repeat bottom / 100vw url('~/assets/ewb-footer-pattern.png'),
              var(--color-light-gray);
  text-align: center;
  border-top: 2px solid rgba(24, 24, 24, 0.025);
}
.c-footer-aoc {
  display: inline-block;
  color: var(--color-black);
  font-size: 1.2em;
  font-weight: 600;
  max-width: 600px;
  margin: 16px 8px 32px;
}
.c-footer-copyright {
  font-size: .889em;
  font-weight: 600;
  margin: 24px 0 8px;
}
.c-footer-links {
  font-size: .889em;
  list-style: none;
  margin: 0;
  padding: 0;
}
.c-footer-links-item {
  display: inline-block;
  margin: 8px;
}
.c-footer-links-item a {
  color: var(--color-dark-gray);
}
.c-footer-links-item a:focus {
  color: var(--color-black);
}
.c-footer-links-divider {
  display: inline-block;
  font-weight: bold;
  font-size: 1.2em;
}
</style>
