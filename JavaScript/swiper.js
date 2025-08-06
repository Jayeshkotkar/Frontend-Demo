const track = document.getElementById('carouselTrack');
    const dots = document.querySelectorAll('.dot');
    const totalItems = 3;
    let currentIndex = 0;

    function updateCarousel(index, animate = true) {
      if (!animate) track.style.transition = 'none';
      else track.style.transition = 'transform 1s ease-in-out';
      track.style.transform = `translateX(-${index * 100}%)`;
      updateDots(index % totalItems);
    }

    function updateDots(index) {
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    }

    function goToNextSlide() {
      currentIndex++;
      updateCarousel(currentIndex);
      if (currentIndex === totalItems) {
        setTimeout(() => {
          currentIndex = 0;
          updateCarousel(currentIndex, false);
        }, 1000);
      }
    }

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        currentIndex = parseInt(dot.getAttribute('data-index'));
        updateCarousel(currentIndex);
      });
    });

    setInterval(goToNextSlide, 5000);


    function dispAlert() {
      alert("Your query sent successfully");
    }