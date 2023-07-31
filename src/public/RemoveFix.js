function RemoveFix(fixId) {
  const elementToRemove = document.getElementById(fixId);
  if (elementToRemove) {
    elementToRemove.remove();
  }
  GatherData();
}

function ResetFixes() {
  const fixElements = document.getElementsByClassName('card');
  while (fixElements.length > 1) {
    fixElements[1].remove();
  }
  GatherData();
}
