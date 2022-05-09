const modalTriggers = document.querySelectorAll('.popup-trigger');
const modalCloseTrigger = document.querySelector('.popup-modal__close');
const bodyBlackout = document.querySelector('.body-blackout');

modalTriggers.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const { popupTrigger } = trigger.dataset;
    console.log('popupTrigger', popupTrigger);
    const popupModal = document.querySelector(
      `[data-popup-modal="${popupTrigger}"]`
    );

    popupModal.classList.add('is--visible');
    bodyBlackout.classList.add('is-blacked-out');

    var videoPlayer = document.querySelector('#modal-video-player');
    var videoSource = document.querySelector('#modal-video-source');

    popupModal
      .querySelector('.popup-modal__close')
      .addEventListener('click', () => {
        console.log('close modal');
        console.log(videoElement);
        videoSource.pause();
        videoSource.removeAttribute('src'); // empty source
        videoSource.load();
        popupModal.classList.remove('is--visible');
        bodyBlackout.classList.remove('is-blacked-out');
      });

    bodyBlackout.addEventListener('click', () => {
      popupModal.classList.remove('is--visible');
      bodyBlackout.classList.remove('is-blacked-out');
    });
  });
});
