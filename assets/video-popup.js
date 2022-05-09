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

    var videoPlayer = document.getElementById(
      `modal-video-player-${popupTrigger}`
    );
    var videoSource = document.getElementById(
      `modal-video-source-${popupTrigger}`
    );

    popupModal
      .querySelector('.popup-modal__close')
      .addEventListener('click', () => {
        videoPlayer.pause();
        videoSource.removeAttribute('src'); // empty source
        videoPlayer.load();
        popupModal.classList.remove('is--visible');
        bodyBlackout.classList.remove('is-blacked-out');
      });

    bodyBlackout.addEventListener('click', () => {
      popupModal.classList.remove('is--visible');
      bodyBlackout.classList.remove('is-blacked-out');
    });
  });
});

function openVideoModal(videoUrl, modalId) {
  const videoPlayer = document.getElementById(
    'modal-video-player-{{popup_modal}}'
  );
  const videoSource = document.getElementById(
    'modal-video-source-{{popup_modal}}'
  );
  const popupModal = document.querySelector(`[data-popup-modal="${modalId}"]`);

  videoSource.setAttribute('src', videoUrl);

  popupModal.classList.add('is--visible');
}
