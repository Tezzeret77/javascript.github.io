
    const square = document.getElementById("square");
    const colorButtons = document.querySelectorAll(".color-button");
    const colorText = document.getElementById ("color-text");
    const customButton = document.querySelector(".custom-button");
  
    colorButtons.forEach(button => {
      button.addEventListener("click", function() {
        const color = this.getAttribute("data-color");
        square.style.backgroundColor = color;
        colorText.textContent = "Color seleccionado: " + color;
      });
    });


    customButton.addEventListener("click", function() {
      const customText = "Ya te dije que no hacia nada"; // Establecer el texto personalizado aquí
      document.getElementById("color-text").textContent = customText;
      alert("Eres tonto?");
    });

