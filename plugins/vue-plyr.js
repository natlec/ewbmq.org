import Vue from 'vue'
import VuePlyr from 'vue-plyr'

Vue.use(VuePlyr, {
  plyr: {
    controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'fullscreen'],
    settings: ['quality'],
    quality: {
      default: 1080,
      options: [1080, 720]
    }
  }
})
