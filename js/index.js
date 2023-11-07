
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

}); 


//slider
const slider = document.querySelector('.slider');

function showSlides () {}; 