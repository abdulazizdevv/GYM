const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-responsive')[0]
const hide = document.querySelector(".hide")

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.add('db')
})

hide.addEventListener('click', () => {
  navbarLinks.classList.remove('db')
})

