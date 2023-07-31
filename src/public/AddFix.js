const container = document.getElementsByClassName('container')[0];
const add_fix = document.getElementById('add_fix');
const fix = document.getElementsByClassName('card')[0];
const reset_cards = document.getElementById('reset_cards');

let num_of_fixes = 1;

add_fix.addEventListener('click', () => {
  num_of_fixes++;
  const new_fix = fix.cloneNode(true);
  new_fix.id = `fix${num_of_fixes}`;
  let remove_fix = new_fix.getElementsByClassName('RemoveFix')[0];
  remove_fix.style.display = 'block';
  remove_fix.style.opacity = '0.6';
  let speedChecks = new_fix.getElementsByClassName('SpeedChecks');
  for (let i = 0; i < speedChecks.length; i++) {
    speedChecks[i].checked = false;
    speedChecks[i].id = `${speedChecks[i].id}-${new_fix.id}`;
  }
  let speedLabels = new_fix.getElementsByClassName('SpeedLabel');
  for (let i = 0; i < speedLabels.length; i++) {
    speedLabels[i].htmlFor = `${speedChecks[i].id}`;
  }
  let fixInput = new_fix.getElementsByClassName('FixInput')[0];
  fixInput.value = '';

  container.appendChild(new_fix);

  reset_cards.style.display = 'block';
});
