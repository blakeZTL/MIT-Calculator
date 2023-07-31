function RemoveFix(fixId) {
  const elementToRemove = document.getElementById(fixId);
  if (elementToRemove) {
    elementToRemove.remove();
  }
  GatherData();
  let numberOfFixes = document.getElementsByClassName('card').length;
  if (numberOfFixes <= 1) {
    HideResetButton();
  }
}

function ResetCards() {
  swal(
    'Resetting Fixes',
    'Are you sure you want to reset all fixes?',
    'warning',
    {
      buttons: {
        cancel: 'No',
        catch: {
          text: 'Yes',
          value: 'Yes',
        },
      },
    }
  ).then((value) => {
    if (value === 'Yes') {
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
    }
  });
}

function HideResetButton() {
  const resetCards = document.getElementById('reset_cards');
  resetCards.style.display = 'none';
}
