function changeImage(event, src) {
    document.getElementById('mainImage').src = src;
    document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
    event.target.classList.add('active');
}
  // Slider functionality
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.products-slider');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentPosition = 0;
    let cardWidth = 282; 
    let gap = 16; 
  
    function updateButtonStates() {
      prevBtn.disabled = currentPosition >= 0;
      nextBtn.disabled = currentPosition <= -(slider.scrollWidth - slider.clientWidth);
    }
  
    nextBtn.addEventListener('click', () => {
      const maxScroll = -(slider.scrollWidth - slider.clientWidth);
      currentPosition = Math.max(currentPosition - (cardWidth + gap), maxScroll);
      slider.style.transform = `translateX(${currentPosition}px)`;
      updateButtonStates();
    });
  
    prevBtn.addEventListener('click', () => {
      currentPosition = Math.min(currentPosition + (cardWidth + gap), 0);
      slider.style.transform = `translateX(${currentPosition}px)`;
      updateButtonStates();
    });
  
    // Handle window resize
    window.addEventListener('resize', () => {
      cardWidth = document.querySelector('.product-card').offsetWidth;
      updateButtonStates();
    });
  
    // Initial button state
    updateButtonStates();
  });     
