<template>
  <div class="c-splash">
    <img class="c-splash-globe" src="~/assets/ewb-globe.gif" alt="EWB Globe">
    <img class="c-splash-letters" src="~/assets/ewbmq-globe-letters.gif" alt="Engineers Without Borders Macquarie University">
    <div class="c-splash-skip">
      <a class="c-splash-skip-link" href="#content">
        Skip to content
      </a>
    </div>
  </div>
</template>

<style>
.c-splash {
  background: no-repeat top / 100vw url('~/assets/ewb-triangle-pattern-gray.png'),
              no-repeat bottom / 100vw url('~/assets/ewb-triangle-pattern.png'),
              var(--color-black);
  height: 125vh;
  padding-bottom: 25vh;
}
.c-splash-skip {
  display: block;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 50px;
  padding: 0 0 48px;
  background: no-repeat bottom / 48px url('~/assets/icons/icon-skip.svg');
}
.c-splash-skip-link {
  text-decoration: none;
  color: var(--color-dark-gray);
  font-family: 'Red Hat Display';
}
.c-splash-globe {
  display: block;
  position: absolute;
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  left: 50%;
  width: 25vw;
  height: auto;
}
.c-splash-letters {
  display: block;
  position: absolute;
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  left: 50%;
  width: 37.5vw;
  height: auto;
}
</style>
