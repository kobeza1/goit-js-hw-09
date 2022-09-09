const refs = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.btnStart.addEventListener('click', onBodyColorChange);
refs.btnStop.addEventListener('click', onBodyColorStop);

function onBodyColorChange() {
  if (refs.btnStart.hasAttribute('disabled')) {
    console.warn('The function is already running');
    return;
  }
  intervalId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.btnStart.setAttribute('disabled', 'disabled');
  refs.btnStop.removeAttribute('disabled');
  console.log('The function is running');
}

function onBodyColorStop() {
  refs.btnStop.setAttribute('disabled', 'disabled');
  refs.btnStart.removeAttribute('disabled');
  clearInterval(intervalId);
  console.log('The function is stopped');
}
