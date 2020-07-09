$('.carousel').carousel({
    interval: 2000
  })


const header = document.querySelector('.navbar')
console.log(header)
console.log(header.style)

function changeHeaderColor(){
    if(window.scrollY > 10){
        header.classList.add('scrolledNav')
    } else {
        header.classList.remove('scrolledNav')
    }
}

document.addEventListener('scroll', changeHeaderColor)