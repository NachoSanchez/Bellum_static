const track = document.querySelector('.carousel-container');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);


//obteniendo el ancho de cada slide por separado
const slideWidth = slides[0].getBoundingClientRect().width;

//agregando ese ancho de margen a cada slide
slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index +'px';
});

//Funciones
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-'+ targetSlide.style.left +')';
    currentSlide.classList.remove('currentSlide');
    targetSlide.classList.add('currentSlide');
}

const updateArrows = (slides, prevButton, nextButton, targetIndex) => {

    if (targetIndex === 0){
        prevButton.classList.add('hide');
        nextButton.classList.remove('hide');
    } else if (targetIndex === slides.length -1) {
        prevButton.classList.remove('hide');
        nextButton.classList.add('hide');
    } else {
        prevButton.classList.remove('hide');
        nextButton.classList.remove('hide');
    }
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('currentDot');
    targetDot.classList.add('currentDot');
}

//Event Listeners
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.currentSlide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.currentDot');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);


    moveToSlide(track, currentSlide, prevSlide); 
    updateDots(currentDot, prevDot);  
    updateArrows(slides, prevButton, nextButton, prevIndex);
});

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.currentSlide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.currentDot');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot)
    updateArrows(slides, prevButton, nextButton, nextIndex);
});


dotsNav.addEventListener('click', e=> {
    const targetDot = e.target.closest('button');

    if(!targetDot) return;

    const currentSlide = track.querySelector('.currentSlide');
    const currentDot = dotsNav.querySelector('.currentDot');
    const targetIndex  = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    updateArrows(slides, prevButton, nextButton, targetIndex);
});

