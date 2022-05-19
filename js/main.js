let toggleThemeButton = document.getElementById("toggle-theme");

if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
) {
    document.body.classList.toggle("dark");
}

toggleThemeButton.addEventListener("click", (event) => {
    document.body.classList.toggle("dark");
});
