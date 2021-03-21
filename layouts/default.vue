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
body {
  margin: 0;
  background: var(--color-background);
  line-height: 1.5;
  font: 400 1.2em 'PT Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: var(--color-dark-gray);
  scroll-behavior: smooth;
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

::-moz-selection {
  color: var(--color-background);
  background: var(--color-green);
}
::selection {
  color: var(--color-background);
  background: var(--color-green);
}
</style>
