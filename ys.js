window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 50)
})

const navbar = document.querySelector('.navbar')

const navItem = document.querySelectorAll('.navbar li')

navItem.forEach(function (nav) {
  nav.addEventListener('click', (e) => {
    const checkBx = document.querySelector('#check')
    checkBx.checked = false
  })



})




