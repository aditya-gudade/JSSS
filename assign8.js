document.addEventListener("DOMContentLoaded", function() {
    const otherElement = document.getElementById("otherElement");
    const originalColor = getComputedStyle(otherElement).backgroundColor;

    const hoverButton = document.getElementById("hoverButton");
    const focusInput = document.getElementById("focusInput");

    hoverButton.addEventListener("mouseover", () => {
        otherElement.style.backgroundColor = "#ff5733";
    });

    hoverButton.addEventListener("mouseout", () => {
        otherElement.style.backgroundColor = originalColor;
    });

    focusInput.addEventListener("focus", () => {
        otherElement.style.backgroundColor = "#33ff57";
    });

    focusInput.addEventListener("blur", () => {
        otherElement.style.backgroundColor = originalColor;
    });
});
