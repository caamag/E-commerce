const slides = 'caio'; 

const slide1 = 'Slide1'; 
const slide2 = 'Slide2'; 
const slide3 = 'Slide3'; 
const slide4 = 'Slide4'; 

let currentIndex = 0;

function updateSlider () {

    const translateValue = -currentIndex * 100 + '%'; 

}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}
