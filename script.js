$('.carousel').carousel({
    interval: 2000
  })

const toggler = document.querySelector('.navbar-toggler')
const header = document.querySelector('.navbar')
function changeHeaderColor(){
    if(window.scrollY > 10){
        header.classList.add('scrolledNav')
        header.classList.remove('unscrolledNav')
        toggler.classList.add('scrolledToggler')
        toggler.classList.remove('unscrolledToggler')
    } else {
        header.classList.remove('scrolledNav')
        header.classList.add('unscrolledNav')
        toggler.classList.remove('scrolledToggler')
        toggler.classList.add('unscrolledToggler')
    }
}

document.addEventListener('scroll', changeHeaderColor)