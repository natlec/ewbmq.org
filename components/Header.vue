<template>
  <header class="c-header">
    <nav class="c-nav">
      <a class="c-nav-item" href="#about">About</a>
      <a class="c-nav-item" href="#members">Members</a>
      <img class="c-nav-logo" src="~/assets/ewbmq-logo.svg" height="50">
      <a class="c-nav-item" href="#ops">Operations</a>
      <a class="c-nav-item" href="https://ewb.org.au" target="_blank" rel="noopener noreferrer">
        EWB
        <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" fill="#181818" height="16" width="16">
          <path d="m12.5714 11v1.57h-9.14145v-9.14146h1.57v-2.28572h-2.2857c-.7143 0-1.57143.85718-1.57143 1.57143v10.57145c0 .7143.86309 1.5714 1.57143 1.5714h10.57145c.7084 0 1.5715-.8571 1.5715-1.5714v-2.2857z" />
          <path d="m14.8572 1.14283v7.35717h-2.2858v-3.5l-5.0714 5-1.5-1.5 5-5.07146h-3.5v-2.28572z" />
        </svg>
      </a>
    </nav>
  </header>
</template>

<style scoped>
.c-header {
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  height: 125px;
  background: var(--color-background);
  box-shadow: 0 0 0 2px rgba(0, 0, 0, .05),
              0 4px 32px rgba(0, 0, 0, .05);
  z-index: 9;
}
.c-nav-item {
  padding: 24px 32px;
  color: var(--color-black);
  font: 600 18px 'Red Hat Display', sans-serif;
  text-decoration: none;
  vertical-align: middle;
  border-radius: 16px;
  border: 3px solid transparent;
  transition: border-color .2s ease;
}
.c-nav-item:hover,
.c-nav-item:focus {
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-decoration-color: var(--color-black);
  border-color: var(--color-light-gray);
}
.c-nav-item:focus {
  color: var(--color-black);
  box-shadow: none;
  background: var(--color-background);
  text-decoration: none;
  border-color: var(--color-black);
  outline: none;
  transition: none;
}
.c-nav-logo {
  vertical-align: middle;
  margin: 0 32px;
}
</style>
