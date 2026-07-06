// Fades the brand mark in over the last few seconds of the looping hero video

const REVEAL_SECONDS = 2.5;

function initHeroReveal() {
  const video = document.querySelector('.hero-video');
  const logo = document.getElementById('hero-logo-reveal');
  if (!video || !logo) return;

  video.addEventListener('timeupdate', () => {
    if (!video.duration) return;
    const remaining = video.duration - video.currentTime;
    const shouldShow = remaining <= REVEAL_SECONDS;
    logo.classList.toggle('opacity-100', shouldShow);
    logo.classList.toggle('opacity-0', !shouldShow);
  });
}

document.addEventListener('DOMContentLoaded', initHeroReveal);
