let currentIndex = 1;

function openLightbox() {
    document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function currentSlide(index) {
    showSlide(currentIndex = index);
}

function showSlide(index) {
    let slides = document.getElementsByClassName('slide');
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[currentIndex - 1].style.display = 'block';
}
