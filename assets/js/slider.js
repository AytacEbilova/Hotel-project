const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".slider-nav button"); // Use querySelectorAll to select all matching elements
const firstCardWidth=carousel.querySelector(".card").offsetWidth;
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id==="prev" ? -firstCardWidth : firstCardWidth;
    });
});

// const dragging = (e) => {
//     carousel.scrollLeft = e.pageX;
// };

// carousel.addEventListener("mousemove", dragging);
