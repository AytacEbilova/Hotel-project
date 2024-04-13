const header = document.querySelector("header");
document.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        header.classList.add("scrolled");
    }
    else {
        header.classList.remove("scrolled");
    }
});

//our services

let services = [];
services.push(new card("Trekking", "Far far away, behind the word mountains", "./assets/images/Screenshot%202024-04-10%20183744.png"));
services.push(new card("The map", "Far far away, behind the word mountains", "./assets/images/Screenshot%202024-04-10%20183808.png"));
services.push(new card("Island Hoping", "Far far away, behind the word mountains", "./assets/images/Screenshot%202024-04-10%20184725.png"));
services.push(new card("World Round", "Far far away, behind the word mountains", "./assets/images/Screenshot%202024-04-10%20184822.png"));
services.push(new card("Travel With Plane", "Far far away, behind the word mountains", "./assets/images/Screenshot%202024-04-10%20184844.png"));

let cardsSection = document.getElementById('carousel');
let deleteServiceBtn = document.querySelectorAll('delete-service-btn');
let readMoreBtns = document.querySelectorAll('.read-more');


function SetBtns() {
    deleteServiceBtn = document.querySelectorAll('.delete-service-btn');
    deleteServiceBtn.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            if (event.target && event.target.matches("button#delete-service-btn")) {
                const index = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
                services.splice(index, 1);
                Swal.fire({
                    title: "Service Deleted",
                    text: `The service has been deleted.`,
                    icon: "success"
                });
                ShowServices();
            }
        });
    });

    readMoreBtns = document.querySelectorAll('.read-more');
    readMoreBtns.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            if (event.target && event.target.matches("span.read-more")) {
                const index = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
                let CustomReadMoreModal = document.getElementById('custom-read-more-modal');
                CustomReadMoreModal.style.display = 'block';

                CustomReadMoreModal.querySelector('.modal-content').innerHTML = `
        <div class="img-container">
            <img src=${services[index].icon} alt="" id="read-more-image">
        </div>
        <h2 style="font-size:26px;font-weight:bold;margin-bottom:15px;">${services[index].title}</h2>
        <p id="read-more-content">${services[index].content}</p>
        <button type="submit" id="cancel-modal-btn" onclick="CancelModal()">Cancel</button>
                `;
            }
        });
    });
}
function CancelModal() {
    let CustomReadMoreModal = document.getElementById('custom-read-more-modal');
    CustomReadMoreModal.style.display = 'none';
}


function ShowServices() {
    cardsSection.innerHTML = '';
    services.forEach((s) => {
        cardsSection.innerHTML +=
            `<li class="card">
        <div class="img"><img src=${s.icon} alt="">
        </div>
        <h2 class="slide-h2">${s.title}</h2>
        <p>${s.content}</p>
        <p>Created at : ${s.createdAt}</p>
        <span class="read-more">Read More</span>
        <button id="delete-service-btn" type="button" class="btn btn-danger delete-service-btn">Delete</button>
        </li>`;
    });
    SetBtns();
}

//find now

let findNowBtn = document.getElementById('find-now-btn');
let ShowServicesbtn = document.getElementById('show-all-btn');

ShowServicesbtn.addEventListener('click', () => {
    ShowServices();
});

findNowBtn.addEventListener('click', () => {
    let inputContent = document.getElementById('search-input').value;
    console.log(inputContent);
    cardsSection.innerHTML = '';
    services.forEach((s) => {
        if (s.title.toLowerCase().includes(inputContent.toLowerCase())) {
            cardsSection.innerHTML +=
                `<li class="card">
            <div class="img"><img src=${s.icon} alt="">
            </div>
            <h2 class="slide-h2">${s.title}</h2>
            <p>${s.content}</p>
            <a href="">Read More</a>
            <button id="delete-service-btn" type="button" class="btn btn-danger delete-service-btn">Delete</button>
            </li>`;
        }
    });
    document.getElementById('search-input').value = '';
});

//add service

let addServiceBtn = document.getElementById('add-service-btn');

let cancelServiceBtn = document.getElementById('cancel-service-btn');




cancelServiceBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let customModal = document.getElementById('custom-modal');
    console.log(customModal);
    document.getElementById('custom-modal').style.display = 'none';

    document.getElementById('custom-title').value = "";
    document.getElementById('custom-icon').value = "";
    document.getElementById('custom-content').value = "";
});

addServiceBtn.addEventListener('click', (e) => {
    let customModal = document.getElementById('custom-modal');
    console.log(customModal);
    document.getElementById('custom-modal').style.display = 'block';
});



//confirm add service btn
let ConfirmAddBtn = document.getElementById('confirm-add-service-btn');
ConfirmAddBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let title = document.getElementById('custom-title').value;
    let icon = document.getElementById('custom-icon').value;
    let content = document.getElementById('custom-content').value;
    if (title.length >= 3) {
        if (content.length >= 10) {
            services.push(new card(title, content, icon));
            document.getElementById('custom-modal').style.display = 'none';
            ShowServices();
            document.getElementById('custom-title').value = "";
            document.getElementById('custom-icon').value = "";
            document.getElementById('custom-content').value = "";

            Swal.fire({
                title: "Service Added",
                icon: "success"
            });


        }
        else {
            let InfoMessage = document.getElementById('add-info-message');
            InfoMessage.innerHTML = `Content length must be greater than 10`;
        }
    }
    else {
        let InfoMessage = document.getElementById('add-info-message');
        InfoMessage.innerHTML = `Title length must be greater than 3`;
    }

});

//selection change 

const selectElement = document.getElementById("sort-select");

selectElement.addEventListener("change", function (event) {
    const selectedValue = event.target.value;

    if (selectedValue === "az") {
        services.sort((a, b) => a.title.localeCompare(b.title));
    }
    else if (selectedValue === "za") {
        services.sort((a, b) => b.title.localeCompare(a.title));
    }
    ShowServices();
});



//blog post section start
let posts = [];

posts.push(new blogPost("Far far away, behind the word mountains, far from the countries", "./assets/images/img_1.jpg.webp"));
posts.push(new blogPost("Far far away, behind the word mountains, far from the countries", "./assets/images/img_2%20(1).jpg"));
posts.push(new blogPost("Far far away, behind the word mountains, far from the countries", "./assets/images/img_3.jpg"));
posts.push(new blogPost("Far far away, behind the word mountains, far from the countries", "./assets/images/img_4.jpg"));
posts.push(new blogPost("Far far away, behind the word mountains, far from the countries", "./assets/images/img_1.jpg.webp"));
posts.push(new blogPost("Far far away, behind the word mountains, far from the countries", "./assets/images/img_3.jpg"));


let blogCarousel = document.getElementById('blog-carousel')

function ShowBlogs() {
    blogCarousel.innerHTML = '';
    posts.forEach((item) => {
        blogCarousel.innerHTML += `
        <div class="card" style="width: 22rem;">
        <img class="card-img-top" src=${item.imgSrc}>
        <div class="card-body">
            <span onclick="EditBlog(${item.Id})"><i class="fa-solid fa-pen"></i></span>
            <p class="card-title p">
                ${item.title}
            </p>
            <a href="" class="slide-a">Read More</a>
        </div>
    </div>
        `
    });
};
let clickedBlog;
function EditBlog(id) {
    let index = posts.findIndex(post => post.Id == id);
    clickedBlog = posts[index];
    let editModal = document.getElementById('edit-modal');
    editModal.style.display = 'block';
    let editTitle = document.getElementById('edit-title');
    let editImg = document.getElementById('edit-img');
    console.log(clickedBlog);
    editTitle.value = clickedBlog.title;
    editImg.src = clickedBlog.imgSrc;
}

let blogCancelbtn = document.getElementById('cancel-btn');
blogCancelbtn.addEventListener('click', (e) => {
    e.preventDefault();
    let editModal = document.getElementById('edit-modal');
    editModal.style.display = 'none';
});

let blogEditBtn  =document.getElementById('edit-btn');
blogEditBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    let editTitle = document.getElementById('edit-title');
    console.log(editTitle.value.trim().length);
    if(editTitle.value.trim().length>0){
        clickedBlog.title = editTitle.value;
        let editModal = document.getElementById('edit-modal');
        editModal.style.display = 'none';
        ShowBlogs();
    }
    else{
        let editInfoMessage=  document.getElementById('edit-info-message');
        editInfoMessage.innerHTML = `Title can't be empty`;
    }
});