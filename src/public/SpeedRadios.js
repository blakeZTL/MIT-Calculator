function toggleSpeed(checkbox) {
  if (checkbox.checked) {
    let fix = checkbox.closest('.card');
    let checkboxes = fix.querySelectorAll(
      '.SpeedChecks:not([id="' + checkbox.id + '"])'
    );
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }
}
