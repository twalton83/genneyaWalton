const imageTop = document.querySelector('.topImage')
const imageBottom = document.querySelector('.bottomImage')

const mainImageCarousel = () => {
    let i = 0
    let nextImage; 
    let currentImage = imageTop
    const imageSrcs =["img/img-primary.jpg",
    "img/img-secondary.jpg",
    "img/img-1.jpg",
    "img/img-2.jpg",
    "img/img-3.jpg",
    "img/img-4.jpg",
    "img/img-5.jpg" ]
        setInterval(function(){
        if(i === imageSrcs.length){
            i = 0
        }
            imageTop.src = imageSrcs[i]
        // the first image needs to fade into the second
            imageTop.style.opacity = 0
            currentImage = imageBottom
         
            let nextImage = imageSrcs[i+1]
            imageTop.src = nextImage
         // then the first image needs to fade back in 
            imageTop.style.opacity = 1
            currentImage = imageTop
        i++
        }, 3000) 
    
    }
    


document.addEventListener('DOMContentLoaded', mainImageCarousel)