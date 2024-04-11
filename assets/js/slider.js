const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".slider-nav button"); 
const firstCardWidth=carousel.querySelector(".card").offsetWidth;
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.id === "prev") {
            carousel.scrollLeft -= firstCardWidth;
        }
         else {
            carousel.scrollLeft += firstCardWidth;
        }
    });
});


const carousell = document.querySelector(".carousell");
const arrowBtn = document.querySelectorAll(".slider-nav button");
const firstCard = carousell.querySelector(".card").offsetWidth;

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousell.scrollLeft += btn.id === "prev" ? -firstCard : firstCard;
    });
});

//faqs section
const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        // Remove "active" class from all faq elements except the clicked one
        faqs.forEach(otherFaq => {
            if (otherFaq !== faq) {
                otherFaq.classList.remove("active");
            }
        });

        // Toggle "active" class for the clicked faq element
        faq.classList.toggle("active");
    });
});


