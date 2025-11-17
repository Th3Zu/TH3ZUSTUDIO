let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');
let dots = document.querySelectorAll('.dot');

let currentIndex = 1; // Start at second item (index 1)

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
        currentIndex = (currentIndex + 1) % 6;
    }else{
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
        currentIndex = (currentIndex - 1 + 6) % 6;
    }
    updateDots();
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 1200)
}

const updateDots = () => {
    dots.forEach((dot, index) => {
        if(index === currentIndex){
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
        // ensure back button is visible (override CSS if needed)
        if (backButton){
            backButton.style.opacity = '1';
            backButton.style.pointerEvents = 'auto';
        }
    }
});
backButton.onclick = function(){
    carousel.classList.remove('showDetail');
    // hide back button again
    if (backButton){
        backButton.style.opacity = '0';
        backButton.style.pointerEvents = 'none';
    }
}