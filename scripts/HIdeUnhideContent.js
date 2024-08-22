function toggleVisibility(elementId, buttonId) {
  const element = document.getElementById(elementId);
  const elementButton = document.getElementById(buttonId);
  element.classList.toggle("hidden");
  elementButton.classList.toggle("open");
}
