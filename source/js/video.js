const videoPlug = document.querySelector('.about__video-plug');
const video = document.querySelector('.about__video');
const playButton = document.querySelector('.about__button-play');

/* Функция для запрета загрузки видео, если кнопка play не нажата. */

function checkIframeDisplay() {
  if (video.display === 'none') {
    video.src = '';
  } else {
    video.src = 'https://www.youtube.com/embed/9TZXsZItgdw';
  }
}

const loadVideo = () => {
  videoPlug.classList.add('about__video-plug--close');
  video.classList.add('about__video--open');
};

const openVideo = () => {
  playButton.addEventListener('click', loadVideo, { once: true, passive: true });
};

export { openVideo, checkIframeDisplay };
