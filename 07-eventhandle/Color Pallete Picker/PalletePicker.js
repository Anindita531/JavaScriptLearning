   const picker = document.querySelector("#colorPicker");
    const preview = document.querySelector("#preview");

    // যখনই user color change করবে
    picker.addEventListener("input", function() {
      let chosenColor = picker.value; // HEX color code যেমন #ff0000
      preview.style.backgroundColor = chosenColor;
      preview.innerText = "Selected: " + chosenColor;
    });