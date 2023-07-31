function RemoveFix(fixId) {
  const elementToRemove = document.getElementById(fixId);
  if (elementToRemove) {
    elementToRemove.remove();
  }
  GatherData();
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
      while (fixElements.length > 1) {
        fixElements[1].remove();
      }
      GatherData();
    }
  });
}
