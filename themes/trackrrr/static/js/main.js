document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.text-with-links a')
  links.forEach((linkElement) => {
    if (linkElement.getAttribute('href').startsWith('#')) {
      return
    }

    linkElement.setAttribute('target', '_blank')
    linkElement.setAttribute('rel', 'noreferrer noopener')
  })
})
