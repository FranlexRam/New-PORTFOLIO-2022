const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');


// Modo claro/oscuro
toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (toggleIcon.src.includes('moon.svg')) {
        toggleIcon.src= 'assets/icons/sun.svg';
        toggleText.textContent='Light mode'
    } else {
        toggleIcon.src = "assets/icons/moon.svg";
        toggleText.textContent = "Dark mode";
    }
});