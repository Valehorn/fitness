const videoContainer = document.querySelector('.about__video-container');
const videoPlug = document.querySelector('.about__video-plug');
const playLink = document.querySelector('.about__button-play');
const buttonContainer = document.querySelector('.about__button-play-container');

//Если js не будет работать - about__button-play будет ссылкой.

const replaceLinkToButton = () => {
  playLink.remove();
  const playButton = document.createElement('button');
  playButton.classList.add('about__button-play');
  playButton.type = 'button';

  const buttonDescription = document.createElement('span');
  buttonDescription.textContent = 'Кнопка проигрывателя';
  buttonDescription.classList.add('visually-hidden');

  playButton.append(buttonDescription);
  buttonContainer.append(playButton);
};

const createIframe = () => {
  videoPlug.remove();
  const iframe = document.createElement('iframe');
  iframe.classList.add('about__video');
  iframe.src = 'https://www.youtube.com/embed/9TZXsZItgdw';
  iframe.width = '320';
  iframe.height = '170';
  iframe.allowfullscreen = '';
  iframe.title = 'Omsk fitness mall video';
  iframe.loading = 'lazy';

  videoContainer.append(iframe);
};

const onPlayButtonClick = () => {
  createIframe();
};


const openVideo = () => {
  replaceLinkToButton();
  const playButton = document.querySelector('.about__button-play');
  playButton.addEventListener('click', onPlayButtonClick, { once: true, passive: true });
};

export { openVideo };
