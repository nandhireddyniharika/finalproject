function initGallery() {
  console.log("Page loaded – initGallery called");
  const figures = document.querySelectorAll("#gallery figure");
  const largeDisplay = document.getElementById("large-display");
  const displayText = document.getElementById("display-text");

  for (let i = 0; i < figures.length; i++) {
    const fig = figures[i];
    fig.setAttribute("tabindex", "0"); // dynamically add tabindex

    const img = fig.querySelector("img");
    const altText = img.alt;
    const bgImage = `url('${img.src}')`;

    // Mouse events
    fig.addEventListener("mouseover", function () {
      console.log("Mouse over:", altText);
      largeDisplay.style.backgroundImage = bgImage;
      displayText.textContent = altText;
    });

    fig.addEventListener("mouseleave", function () {
      console.log("Mouse leave:", altText);
      largeDisplay.style.backgroundImage = "";
      displayText.textContent = "Hover or focus an image below";
    });

    // Keyboard focus events
    fig.addEventListener("focus", function () {
      console.log("Focus on:", altText);
      largeDisplay.style.backgroundImage = bgImage;
      displayText.textContent = altText;
    });

    fig.addEventListener("blur", function () {
      console.log("Blur from:", altText);
      largeDisplay.style.backgroundImage = "";
      displayText.textContent = "Hover or focus an image below";
    });
  }
}
