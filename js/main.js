const toggleThemeButton = document.getElementById("toggle-theme");
const sections = document.querySelectorAll(".section[id]");
const down_tag = document.getElementById("down_tag");
const down_button = document.getElementById("down_button");

if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
) {
    document.body.classList.toggle("dark");
}

toggleThemeButton.addEventListener("click", (event) => {
    document.body.classList.toggle("dark");
});

// Scroll active section

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}
window.addEventListener("scroll", scrollActive);

// On scroll events

function scrollDownTag() {
    if (this.scrollY >= 500) {
        down_tag.classList.add("d-none");
        down_button.classList.remove("d-none");
    } else {
        down_tag.classList.remove("d-none");
        down_button.classList.add("d-none");
    }
}
window.addEventListener("scroll", scrollDownTag);
