var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
};

function minusSlide() {
    showSlides(slideIndex -= 1);  
};

function currentSlide(picture) {
    showSlides(slideIndex = picture);
};

function showSlides(picture) {
    var i;
    var slides = document.getElementsByClassName("item");
    if (picture > slides.length) {
      slideIndex = 1
    }
    if (picture < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";  
};

