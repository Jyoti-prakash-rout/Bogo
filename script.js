document.addEventListener("DOMContentLoaded", function () {
  const options = document.querySelectorAll(".option");
  const totalPriceBox = document.querySelector(".total");

  // ========== UPDATE TOTAL PRICE ==========
  function updateTotalPrice() {
    const activeRadio = document.querySelector('input[name="units"]:checked');
    if (!activeRadio) return;

    const selectedOption = activeRadio.closest(".option");
    const price = selectedOption.dataset.price;

    totalPriceBox.textContent = "Total: $" + price + " USD";
  }

  // ========== HIGHLIGHT SELECTED OPTION ==========
  function highlightSelected() {
    options.forEach(function (opt) {
      const radio = opt.querySelector('input[type="radio"]');
      if (radio.checked) {
        opt.classList.add("selected");
      } else {
        opt.classList.remove("selected");
      }
    });
  }

  // ========== WHEN USER CLICKS AN OPTION ==========
  options.forEach(function (option) {
    option.addEventListener("click", function (e) {
      // Ignore if clicking on dropdown (size/color)
      if (e.target.tagName === "SELECT") return;

      const radio = option.querySelector('input[type="radio"]');
      radio.checked = true;

      updateTotalPrice();
      highlightSelected();
    });
  });

  // ========== WHEN RADIO BUTTON CHANGES (Keyboard, etc.) ==========
  const radios = document.querySelectorAll('input[name="units"]');
  radios.forEach(function (radio) {
    radio.addEventListener("change", function () {
      updateTotalPrice();
      highlightSelected();
    });
  });

  // ========== INITIAL UI LOAD ==========
  updateTotalPrice();
  highlightSelected();
});
