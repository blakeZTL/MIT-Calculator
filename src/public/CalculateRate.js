function CalculateRate(fix_data) {
  let rate = 0;
  fix_data.forEach((fix) => {
    switch (true) {
      case fix.MIT === 0:
        rate += 0.0;
        break;
      case fix.MIT < 7:
        rate += fix.Speed > 0 ? 45 : 65;
        break;
      case fix.MIT < 10:
        rate += fix.Speed > 0 ? 38 : 54;
        break;
      case fix.MIT < 20:
        rate += fix.Speed > 0 ? 20 : 28;
        break;
      case fix.MIT < 30:
        rate += fix.Speed > 0 ? 12 : 17;
        break;
      case fix.MIT < 40:
        rate += fix.Speed > 0 ? 10 : 14;
        break;
      case fix.MIT < 41:
        rate += fix.Speed > 0 ? 8 : 11;
        break;
      default:
        rate += 0.0;
    }
  });
  document.getElementById('rate_value').innerHTML = rate;
}

function GatherData() {
  Cards = document.getElementsByClassName('card');
  Fixes = [];
  for (let i = 0; i < Cards.length; i++) {
    let FixName = Cards[i].getElementsByClassName('FixInput')[0].value;
    let Miles = Cards[i].getElementsByClassName('Miles')[0].value;
    let Speeds = Cards[i].getElementsByClassName('SpeedChecks');
    speed_value = 0;
    for (let j = 0; j < Speeds.length; j++) {
      if (Speeds[j].checked == false) {
        continue;
      } else {
        speed_value = Speeds[j].value;
        break;
      }
    }
    Fixes.push({ Fix: FixName, MIT: parseFloat(Miles), Speed: speed_value });
  }
  CalculateRate(Fixes);
}
