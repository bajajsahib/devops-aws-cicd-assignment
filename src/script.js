document.addEventListener("DOMContentLoaded", () => {
  const tsElement = document.getElementById("timestamp");
  if (tsElement) {
    tsElement.textContent = `Client Loaded: ${new Date().toLocaleString()}`;
  }
});
