const toggleThemeButton = document.getElementById("toggle-theme");
const sections = document.querySelectorAll(".section[id]");
const badges = document.querySelectorAll(".skills_grid .badge_row .badge");
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
        const sectionTop = current.offsetTop - 95;
        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            let activeSection = document.querySelector(
                ".menu a[href*=" + sectionId + "]"
            );
            activeSection.classList.add("active-link");
            if (activeSection.getAttribute("href") === "#skills") {
                badges.forEach((badge, index) => {
                    let timer = 5 + Math.random() * 10;
                    setTimeout(() => {
                        badge.classList.add("animate");
                    }, 14 * (index + timer));
                });
            } else {
                badges.forEach((badge) => badge.classList.remove("animate"));
            }
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
