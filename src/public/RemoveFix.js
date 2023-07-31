function RemoveFix(fixId) {
  const elementToRemove = document.getElementById(fixId);
  if (elementToRemove) {
    elementToRemove.remove();
  }
  GatherData();
  let numberOfFixes = document.getElementsByClassName('card').length;
  if (numberOfFixes <= 1) {
    HideResetButton();
    let remove_buttons = document.getElementsByClassName('RemoveFix')[0];
    let remove_labels = document.getElementById('remove_label');
    remove_buttons.style.display = 'none';
    remove_labels.style.display = 'none';
  }
}

function ResetCards() {
  const fixElements = document.getElementsByClassName('card');
  HideResetButton();
  while (fixElements.length > 1) {
    fixElements[1].remove();
  }
  const fixInput = document.getElementsByClassName('FixInput')[0];
  fixInput.value = '';
  const speedChecks = document.getElementsByClassName('SpeedChecks');
  for (let i = 0; i < speedChecks.length; i++) {
    speedChecks[i].checked = false;
  }
  const miles = document.getElementsByClassName('Miles')[0];
  miles.value = '0';
  GatherData();
  closePopup();
}

function HideResetButton() {
  const resetCards = document.getElementById('reset_cards');
  resetCards.style.display = 'none';
}

const background = document.querySelector('.background');
const popupContainer = document.querySelector('.popup-container');
const closeBtn = document.querySelector('.close-btn');

function openPopup() {
  background.style.display = 'block';
  popupContainer.style.display = 'block';
}

function closePopup() {
  background.style.display = 'none';
  popupContainer.style.display = 'none';
}

closeBtn.addEventListener('click', closePopup);
background.addEventListener('click', closePopup);
