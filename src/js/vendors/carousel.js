import Splide from '@splidejs/splide';

const splide = new Splide('.splide', {
  type: 'loop',
  autoplay: true,
  interval: 3000,        // Optional: 3s between slides
  pauseOnHover: true,
  pauseOnFocus: true,
  resetProgress: false,
});

splide.mount();
