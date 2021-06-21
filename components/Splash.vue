<template>
  <div class="c-splash">
    <div class="c-globe">
      <canvas id="canvas3d" class="c-globe-canvas"></canvas>
    </div>
    <div class="c-splash-skip">
      <a class="c-splash-skip-link" href="#content">
        Skip to content
      </a>
    </div>
    <script src="/spline.runtime.min.js"></script>
  </div>
</template>

<style scoped>
.c-splash {
  position: relative;
  background: no-repeat bottom / 100vw url('~/assets/ewb-triangle-pattern-gray.png'),
              var(--color-black);
  height: 125vh;
  padding-bottom: 25vh;
  z-index: 3;
}
.c-splash-skip {
  display: block;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: calc(50vh + 50px);
  padding: 0 0 48px;
  background: no-repeat bottom / 48px url('~/assets/icons/icon-skip.svg');
}
.c-splash-skip-link {
  text-decoration: none;
  color: var(--color-dark-gray);
  font-family: 'Red Hat Display';
}
.c-splash-skip-link:hover {
  color: var(--color-light-gray);
  text-decoration: underline 2px currentColor;
}
.c-splash-skip-link:focus {
  text-decoration: none;
  color: var(--color-black);
}
.c-globe {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  overflow: hidden;
}
.c-globe-canvas {
  width: 100vw !important;
  outline: none;
}
</style>
