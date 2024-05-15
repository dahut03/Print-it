const slides = [
    {
        "image":"./assets/images/slideshow/slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image":"./assets/images/slideshow/slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"./assets/images/slideshow/slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image":"./assets/images/slideshow/slide4.jpg",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

const slider = document.querySelector('.slider');
const slidesContainer = document.querySelector('.slides');
const arrowsContainer = document.querySelector('.arrows');
const dotsContainer = document.querySelector('.dots');

// Ajouter les slides
slides.forEach(slide => {
    const slideElement = document.createElement('div');
    slideElement.classList.add('slide');
    slideElement.innerHTML = `<img src="${slide.image}" alt="Diapositive"><div class="tagline">${slide.tagLine}</div>`;
    slidesContainer.appendChild(slideElement);
});

// Selectionner les flèches
const prevArrow = document.querySelector('.arrow.prev');
const nextArrow = document.querySelector('.arrow.next');

prevArrow.addEventListener('click', () => {
    moveToSlide(currentSlideIndex - 1);
});

nextArrow.addEventListener('click', () => {
    moveToSlide(currentSlideIndex + 1);
});

// Ajouter les dots
for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
        moveToSlide(i);
    });
    dotsContainer.appendChild(dot);
}

let currentSlideIndex = 0;

function moveToSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${-index * 100}%)`;
    });

    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });

    currentSlideIndex = index;
}

moveToSlide(0);
