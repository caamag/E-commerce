
//nav mobile
const navButton = document.querySelector('.menu-button'); 
const navXButton = document.querySelector('.menu-X-button'); 
const navMobile = document.querySelector('.items-mobile'); 

navButton.addEventListener('click', () => {

    navMobile.classList.toggle('nav-change'); 

    setTimeout(() => {

        navButton.style.display = 'none'; 
        navXButton.style.display = 'block'; 

    }, 400)

})

navXButton.addEventListener('click', () => {

    navMobile.classList.toggle('nav-change'); 

    setTimeout(() => {

        navButton.style.display = 'block'; 
        navXButton.style.display = 'none'; 

    }, 400)

})


//slider

const slides = document.querySelectorAll('.slide'); 
const prevBtn = document.querySelector('.prev-btn'); 
const nxtBtn = document.querySelector('.nxt-btn'); 

let currentSlide = 0;

function showSlide (slideIndex) {

    slides.forEach((slide, index) => {

        if (index === slideIndex) {
            slide.style.display = 'block'; 
        } else{
            slide.style.display = 'none'; 
        }

    }); 

}; 

prevBtn.addEventListener('click', () => {

    currentSlide = (currentSlide - 1 + slides.length) % slides.length; 
    showSlide(currentSlide); 

}); 

nxtBtn.addEventListener('click', () => {

    currentSlide = (currentSlide + 1) % slides.length; 
    showSlide(currentSlide); 

}); 

showSlide(currentSlide); 
