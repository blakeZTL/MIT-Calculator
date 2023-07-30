function addRow() {
    var container = document.getElementById("container");

    // Create a new row
    var row = document.createElement("div");
    row.className = "row";

    var fixName = document.createElement("label");
    fixName.textContent = "Fix";

    var fixNameInput = document.createElement("input");
    fixNameInput.type = "text";
    fixNameInput.id = "fixName";
    fixNameInput.title = "Fix Name";
    fixNameInput.value = "?????";

    var mitValueLabel = document.createElement("label");
    mitValueLabel.textContent = "MIT";

    var mitValueInput = document.createElement("input");
    mitValueInput.type = "text";
    mitValueInput.id = "mitValue";
    mitValueInput.className = "mitValue";
    mitValueInput.addEventListener("input", calculateRate);
    mitValueInput.value = "0";
    mitValueInput.title = "Miles-In-Trail Value";

    var speedCheckbox = document.createElement("input");
    speedCheckbox.type = "checkbox";
    speedCheckbox.title = "Speed?";
    speedCheckbox.id = "speedCheckbox";
    speedCheckbox.className = "speedCheckbox";
    
    speedCheckbox.addEventListener("input", calculateRate);

    // Create remove button
    var removeButton = document.createElement("button");
    removeButton.textContent = "X";
    removeButton.title = "Remove Fix"
    removeButton.onclick = function () {
        container.removeChild(row);
    };
    removeButton.id = "removeButton";

    // Create text for checkbox
    var speedLabel = document.createElement("label");
    speedLabel.textContent = "Speed?";

    // Append label, input, and remove button to the row
    row.appendChild(removeButton);
    row.appendChild(fixName);
    row.appendChild(fixNameInput);
    row.appendChild(mitValueLabel);
    row.appendChild(mitValueInput);
    row.appendChild(document.createElement("br"));
    row.appendChild(speedLabel);
    row.appendChild(speedCheckbox);
    

    // Append the row to the container
    container.appendChild(row);
}

function calculateRate() {
    var container = document.getElementById("container");
    var rows = container.children;
    var values = [];
    var checkboxes = [];

    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        var mitValueInput = row.querySelector(".mitValue");
        var checkbox = row.querySelector(".speedCheckbox");
        var value = parseFloat(mitValueInput.value);

        values.push(value);
        checkboxes.push(checkbox.checked);
    }

    var rate = 0;

    for (var i = 0; i < values.length; i++) {
        var value = values[i];
        var checkbox = checkboxes[i];

        switch (true) {
            case value === 0:
                rate += 0.0;
                break;
            case value < 7:
                rate += checkbox ? 45 : 65;
                break;
            case value < 10:
                rate += checkbox ? 38 : 54;
                break;
            case value < 20:
                rate += checkbox ? 20 : 28;
                break;
            case value < 30:
                rate += checkbox ? 12 : 17;
                break;
            case value < 40:
                rate += checkbox ? 10 : 14;
                break;
            case value < 41:
                rate += checkbox ? 8 : 11;
                break;
            default:
                rate += 0.0;
        }
    }

    var rateDisplay = document.getElementById("calcRate");
    rateDisplay.textContent = "Calculated Rate: " + rate;
}
