document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".s6-contain");
    const dots = document.querySelectorAll(".indicator-dots .dot");
    let currentIndex = 0;
    const intervalTime = 5000; // 5 seconds

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Start
    showSlide(currentIndex);
    setInterval(nextSlide, intervalTime);
});

    

//  for the dot color changing

function updateDots(currentIndex) {
    const dots = document.querySelectorAll(".indicator-dots .dot");
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
    });
}


// disply alert

function dispAlert() {
    alert("Your query sent successfully");
}






