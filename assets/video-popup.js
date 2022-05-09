const modalTriggers = document.querySelectorAll('.popup-trigger');
const modalCloseTrigger = document.querySelector('.popup-modal__close');
const bodyBlackout = document.querySelector('.body-blackout');

function openVideoModal(videoUrl, modalId) {
  const videoPlayer = document.getElementById(`modal-video-player-${modalId}`);
  const videoSource = document.getElementById(`modal-video-source-${modalId}`);
  const popupModal = document.getElementById(modalId);

  popupModal.classList.add('is--visible');
  bodyBlackout.classList.add('is-blacked-out');
}

function closeVideoModal(modalId) {
  const videoPlayer = document.getElementById(`modal-video-player-${modalId}`);
  const videoSource = document.getElementById(`modal-video-source-${modalId}`);
  console.log('modalId', modalId);
  const popupModal = document.getElementById(modalId);
  console.log('popupModal', popupModal);

  popupModal.classList.remove('is--visible');
  bodyBlackout.classList.remove('is-blacked-out');
  videoPlayer.pause();
}
