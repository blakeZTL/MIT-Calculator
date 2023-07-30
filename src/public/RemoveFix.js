function RemoveFix(fixId) {
  const elementToRemove = document.getElementById(fixId);
  if (elementToRemove) {
    elementToRemove.remove();
  }
  GatherData();
}
