const bodyBlackout = document.querySelector('.body-blackout');

function openVideoModal(modalId) {
  const popupModal = document.getElementById(modalId);

  popupModal.classList.add('is--visible');
  bodyBlackout.classList.add('is-blacked-out');
}

function closeVideoModal(modalId) {
  const videoPlayer = document.getElementById(`modal-video-player-${modalId}`);
  const popupModal = document.getElementById(modalId);

  popupModal.classList.remove('is--visible');
  bodyBlackout.classList.remove('is-blacked-out');
  videoPlayer.pause();
}
