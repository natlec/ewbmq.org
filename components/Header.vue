<template>
  <header class="c-header">
    <nav class="c-nav">
      <a class="c-nav-item" href="#about">About</a>
      <a class="c-nav-item" href="#members">Members</a>
      <img class="c-nav-logo" src="~/assets/ewbmq-logo.svg" height="50">
      <a class="c-nav-item" href="#news">News</a>
      <a class="c-nav-item" href="#ops">Operations</a>
    </nav>
  </header>
</template>

<style>
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
  padding: 32px;
  color: var(--color-black);
  font: 600 18px 'Red Hat Display', sans-serif;
  text-decoration: none;
  vertical-align: middle;
}
.c-nav-item:hover,
.c-nav-item:focus {
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-decoration-color: black;
}
.c-nav-logo {
  vertical-align: middle;
  margin: 0 32px;
}
</style>
