document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    const closeBtn = document.getElementById('close-btn'); // Asegúrate de que este botón esté en tu HTML
    // Evento para abrir y cerrar el menú
    menuBtn.addEventListener('click', function () {
        menu.classList.toggle('open'); // Alterna la clase 'open' en el menú
        menuBtn.classList.toggle('open'); // Alterna la clase 'open' en el botón de menú
    });
    // Evento para cerrar el menú
    closeBtn.addEventListener('click', function () {
        menu.classList.remove('open'); // Cierra el menú
        menuBtn.classList.remove('open'); // Restaura el botón de menú
    });
});