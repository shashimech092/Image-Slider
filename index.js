
    let currentSlide = 0;
    const slides = document.getElementsByClassName('slider-image');
    const captions = document.getElementsByClassName('slider-captions')[0].getElementsByTagName('p');

    // Show the initial slide
    showSlide(currentSlide);

    function showSlide(slideIndex) {
      if (slideIndex < 0) {
        slideIndex = slides.length - 1;
      } else if (slideIndex >= slides.length) {
        slideIndex = 0;
      }

      // Hide all slides and captions
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = 'translateX(-100%)';
        captions[i].style.display = 'none';
      }

      // Show the selected slide and caption
      slides[slideIndex].style.transform = 'translateX(0)';
      captions[slideIndex].style.display = 'block';
    }

    function nextSlide() {
      currentSlide++;
      showSlide(currentSlide);
    }

    function previousSlide() {
      currentSlide--;
      showSlide(currentSlide);
    }

    // Automatic slide transition
    setInterval(() => {
      nextSlide();
    }, 1000);
 
