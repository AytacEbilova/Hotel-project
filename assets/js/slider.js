const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".slider-nav button"); 
let firstCardWidth;
document.addEventListener("DOMContentLoaded", ()=>{
    firstCardWidth=carousel.querySelector(".card").offsetWidth;
});

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
let firstCard;
document.addEventListener("DOMContentLoaded", ()=>{
    firstCard=carousel.querySelector(".card").offsetWidth;
});

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousell.scrollLeft += btn.id === "prev" ? -firstCard : firstCard;
    });
});

//faqs section
const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
       
        faqs.forEach(otherFaq => {
            if (otherFaq !== faq) {
                otherFaq.classList.remove("active");
            }
        });

        faq.classList.toggle("active");
    });
});

//testimonial section
const cards = document.querySelector(".cards");
const arrowBtnss = document.querySelectorAll(".slider-nav button"); 
let firstCards;
document.addEventListener("DOMContentLoaded", ()=>{
    firstCards=carousel.querySelector(".card").offsetWidth;
});

arrowBtnss.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.id === "prev") {
            cards.scrollLeft -= firstCards;
        } else {
            cards.scrollLeft += firstCards;
        }
    });
});


