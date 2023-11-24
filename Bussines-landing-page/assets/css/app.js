document.addEventListener("DOMContentLoaded", function () {
    const mainSections = document.querySelectorAll("main section");

    setTimeout(() => {
        mainSections.forEach(section => section.classList.add("show"));
    }, 400);
});
