function CalculateRate(fix_data) {
  let rate = 0;
  let calc_data = [];
  fix_data.forEach((fix) => {
    switch (true) {
      case fix.MIT === 0:
        rate += 0.0;
        break;
      case fix.MIT < 7:
        rate += fix.Speed > 0 ? 45 : 65;
        calc_data.push({ Fix: fix.Fix, Rate: fix.Speed > 0 ? 45 : 65 });
        break;
      case fix.MIT < 10:
        rate += fix.Speed > 0 ? 38 : 54;
        calc_data.push({ Fix: fix.Fix, Rate: fix.Speed > 0 ? 38 : 54 });
        break;
      case fix.MIT < 20:
        rate += fix.Speed > 0 ? 20 : 28;
        calc_data.push({ Fix: fix.Fix, Rate: fix.Speed > 0 ? 20 : 28 });
        break;
      case fix.MIT < 30:
        rate += fix.Speed > 0 ? 12 : 17;
        calc_data.push({ Fix: fix.Fix, Rate: fix.Speed > 0 ? 12 : 17 });
        break;
      case fix.MIT < 40:
        rate += fix.Speed > 0 ? 10 : 14;
        calc_data.push({ Fix: fix.Fix, Rate: fix.Speed > 0 ? 10 : 14 });
        break;
      case fix.MIT < 41:
        rate += fix.Speed > 0 ? 8 : 11;
        calc_data.push({ Fix: fix.Fix, Rate: fix.Speed > 0 ? 8 : 11 });
        break;
      default:
        rate += 0.0;
    }
  });
  let rate_value = document.getElementById('rate_value');
  rate_value.innerHTML = rate;
  rate_value.title = 'The calculated rates of the below selections';

  calc_data.forEach((fix) => {
    if (fix.Speed == 0) {
      fix.Speed = 'None';
    }
    if (fix.Fix == '') {
      fix.Fix = 'N/A';
    }
  });
  GenerateDataTable(calc_data);
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

function GenerateDataTable(fix_data) {
  function buildHtmlTable(arr) {
    var tableHtml = '<table>',
      columns = addAllColumnHeaders(arr);
    tableHtml += '<tr>';
    for (var j = 0, maxj = columns.length; j < maxj; ++j) {
      tableHtml += '<th>' + columns[j] + '</th>';
    }
    tableHtml += '</tr>';

    for (var i = 0, maxi = arr.length; i < maxi; ++i) {
      tableHtml += '<tr>';
      for (var j = 0, maxj = columns.length; j < maxj; ++j) {
        var cellValue = arr[i][columns[j]];
        tableHtml += '<td>' + (cellValue || '') + '</td>';
      }
      tableHtml += '</tr>';
    }
    tableHtml += '</table>';
    return tableHtml;
  }

  function addAllColumnHeaders(arr) {
    var columnSet = [];
    for (var i = 0, l = arr.length; i < l; i++) {
      for (var key in arr[i]) {
        if (arr[i].hasOwnProperty(key) && columnSet.indexOf(key) === -1) {
          columnSet.push(key);
        }
      }
    }
    return columnSet;
  }

  const calc_data = document.getElementById('calc_data');
  calc_data.innerHTML = buildHtmlTable(fix_data);
}
