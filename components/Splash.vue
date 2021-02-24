<template>
  <div class="c-splash">
    <img class="c-splash-globe" src="~/assets/ewb-globe.gif" alt="EWB Globe">
    <img class="c-splash-letters" src="~/assets/ewbmq-globe-letters.gif" alt="Engineers Without Borders Macquarie University">
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
