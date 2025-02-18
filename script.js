const toggleButton = document.getElementById("toggleButton");
const sidebar = document.getElementById("sidebar");
const mainContent = document.getElementById("main-content");

toggleButton.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    mainContent.classList.toggle("open");
});
