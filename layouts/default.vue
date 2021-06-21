<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
:root {
  --color-black: #181818;
  --color-dark-gray: #404040;
  --color-light-gray: #F3F3F3;
  --color-green: #00903D;
  --color-yellow: #FFCC00;
  --color-background: #ffffff;
}

::-moz-selection {
  color: var(--color-background);
  background: var(--color-green);
}
::selection {
  color: var(--color-background);
  background: var(--color-green);
}

::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: var(--color-black);
}
::-webkit-scrollbar-thumb {
  background: var(--color-dark-gray);
}
::-webkit-scrollbar-thumb:hover {
  background: var(--color-light-gray);
}

html {
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: var(--color-dark-gray) var(--color-black);
}

body {
  margin: 0;
  background: var(--color-background);
  line-height: 1.5;
  font: 400 1.2em 'PT Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: var(--color-dark-gray);
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Font sizing: https://www.modularscale.com/?1&em&1.2 */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 600;
  line-height: 2;
  color: var(--color-black);
}
h1 {
  font-size: 48px;
}
h2 {
  font-size: 32px;
}
p {
  line-height: 1.5;
}
a {
  font-weight: 600;
  color: var(--color-green);
  text-decoration: underline currentColor 2px;
  outline: none;
}
a:focus {
  text-decoration: none;
  color: var(--color-black);
  background: var(--color-yellow);
  box-shadow: 0 -2px var(--color-yellow),
              0 4px var(--color-black);
}
hr {
  border: 1px solid var(--color-light-gray);
}

.content {
  position: relative;
  background: no-repeat top / 100vw url('~/assets/ewb-triangle-pattern-light.png');
  z-index: 2;
}
.c-section {
  margin: 15vh 15vw;
}
.c-section--thin {
  margin: 15vh 25vw;
}
.c-section--thinTopMargin {
  margin-top: 64px;
}
.c-section--thinBottomMargin {
  margin-bottom: 64px;
}
.c-section--center {
  text-align: center;
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
.c-info {
  border-radius: 16px;
  border: 2px solid var(--color-light-gray);
  padding: 32px;
  margin: 32px 0 0;
}
@media (max-width: 1024px) {
  .c-section {
    margin: 32px;
  }
  .c-section--first {
    margin-top: 32px;
  }
  .c-section-double {
    flex-direction: column;
  }
  .c-section-double-left,
  .c-section-double-right {
    margin: 0;
  }
}
</style>
