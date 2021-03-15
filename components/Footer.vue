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
      <p>
        © {{ copyrightDate }} EWBMQ
      </p>
    </div>
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

<style>
.c-footer {
  font-size: 1em;
  padding: 5vh 15vw 25vh;
  background: no-repeat bottom / 100vw url('~/assets/ewb-footer-pattern.png'),
              var(--color-light-gray);
  text-align: center;
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
  font-weight: 600;
}
</style>
