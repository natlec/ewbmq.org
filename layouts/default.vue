<template>
  <div>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/typeface-red-hat-display@1.1.13/index.css" integrity="sha256-ufSNTM2+CubHCwLVvF5pW782ilMbGqkDF1WsaV3Td0s=" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/typeface-pt-serif@1.1.13/index.css" integrity="sha256-4WeerH+X1JEs+stpOplYmRe3xcPyuex8fmJxq9lOi18=" crossorigin="anonymous">
    <Nuxt />
  </div>
</template>

<style>
:root {
    --color-black: #181818;
    --color-dark-gray: #404040;
    --color-light-gray: #F3F3F3;
    --color-green: #00903D;
    --color-background: #ffffff;
}
body {
  margin: 0;
  background: var(--color-background);
  line-height: 1.5;
  font: 400 1em 'PT Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: var(--color-dark-gray);
  scroll-behavior: smooth;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 600;
  line-height: 2;
  color: var(--color-black);
}
h1 {
  font-size: 32px;
}
h2 {
  font-size: 24px;
}
</style>
