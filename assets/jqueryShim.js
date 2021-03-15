// Pseudo-jQuery for Hubspot callbacks
(function pseudoJQuery () {
  window.jQuery = window.jQuery || function (nodeOrSelector) {
    return { context: nodeOrSelector }
  }
})()
