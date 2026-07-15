document.addEventListener("DOMContentLoaded", () => {

    const startBtn = document.getElementById("startBtn");
    const loadingScreen = document.querySelector(".loading-screen");
    const birthdayPage = document.querySelector(".birthday-page");

    startBtn.addEventListener("click", () => {

        loadingScreen.style.opacity = "0";

        setTimeout(() => {
            loadingScreen.style.display = "none";
            birthdayPage.style.display = "block";

            birthdayPage.animate([
                { opacity: 0, transform: "translateY(40px)" },
                { opacity: 1, transform: "translateY(0)" }
            ], {
                duration: 1200,
                fill: "forwards"
            });

        }, 700);

    });

});
