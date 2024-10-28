
// console.log("JavaScript externo está funcionando!");



window.addEventListener("scroll", () => {
    const parallaxElement = document.querySelector(".parallax");
    if (parallaxElement) {
        let scrollPosition = window.pageYOffset;
        parallaxElement.style.backgroundPositionY = scrollPosition * 0.5 + "px";
    } else {
        console.error("Elemento .parallax não encontrado!");
    }
});
