const openBtn = document.getElementById('openBtn');
const videoSection = document.querySelector(".video-section");
const x_button = document.getElementById('close-btn');
openBtn.addEventListener("click", () => {
    videoSection.style.display="block";
});

x_button.addEventListener("click",()=>{
    videoSection.style.display="none";
});
