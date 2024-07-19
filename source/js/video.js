const videoPlug = document.querySelector('.about__video-plug');
const video = document.querySelector('.about__video');
const playButton = document.querySelector('.about__button-play');

const OnLoadVideo = () => {
  videoPlug.classList.add('about__video-plug--close');
  video.classList.add('about__video--open');
};

const openVideo = () => {
  playButton.addEventListener('click', OnLoadVideo, { once: true, passive: true });
};

export { openVideo };
