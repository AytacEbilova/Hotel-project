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
let readMoreBtns = document.querySelectorAll('.read-more');



function CancelModal() {
    let CustomReadMoreModal = document.getElementById('custom-read-more-modal');
    CustomReadMoreModal.style.display = 'none';
}

function ReadMoreService(serviceId) {
    let index = services.findIndex(s => s.Id == serviceId);
    let service = services[index];
    
    let CustomReadMoreModal = document.getElementById('custom-read-more-modal');
    CustomReadMoreModal.style.display = 'block';

    CustomReadMoreModal.querySelector('.modal-content').innerHTML = `
<div class="img-container">
<img src=${service.icon} alt="" id="read-more-image">
</div>
<h2 style="font-size:26px;font-weight:bold;margin-bottom:15px;">${service.title}</h2>
<p id="read-more-content">${service.content}</p>
<button type="submit" id="cancel-modal-btn" onclick="CancelModal()">Cancel</button>
    `;
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
        <span class="read-more" onclick="ReadMoreService(${s.Id})">Read More</span>
        <button id="delete-service-btn" onclick="DeleteService(${s.Id})" type="button" class="btn btn-danger delete-service-btn">Delete</button>
        </li>`;
    });
}


function DeleteService(serviceId) {
    let index = services.findIndex(s => s.Id == serviceId);
    services.splice(index, 1);
    ShowServices();
    Swal.fire({
        title: "Service Deleted",
        icon: "success"
    });
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

//selection change sorted az za
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

let blogEditBtn = document.getElementById('edit-btn');
blogEditBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let editTitle = document.getElementById('edit-title');
    console.log(editTitle.value.trim().length);
    if (editTitle.value.trim().length > 0) {
        clickedBlog.title = editTitle.value;
        let editModal = document.getElementById('edit-modal');
        editModal.style.display = 'none';
        ShowBlogs();
    }
    else {
        let editInfoMessage = document.getElementById('edit-info-message');
        editInfoMessage.innerHTML = `Title can't be empty`;
    }
});


//faqs section
let FaqArray = [];

FaqArray.push(new faq("Is it free?", "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia ,there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."));
FaqArray.push(new faq("How to install this template?", "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia ,there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."));
FaqArray.push(new faq("Where can i get help?", "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia ,there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."));

let faqsAccordion = document.getElementById("faqs-accordion");

function ShowFaqs() {
    faqsAccordion.innerHTML = '';
    FaqArray.forEach((item) => {
        faqsAccordion.innerHTML += `
        <div class="faq">
        <div class="question">
            <h3>${item.question}</h3>
            <svg width="15" height="10" viewBox="0 0 42 25">
                <path d="M3 3L21 21L39 3" stroke-width="7" stroke-linecap="round" />
            </svg>
        </div>
        <div class="answer">
            <p>${item.answer}</p>
            <br>
            <p>${item.answer}</p>
            
        </div>
    </div>

        `
    });
};



//Testimonials sect
let employees = [];
employees.push(new employee("John Doe", "CEO, Co-Founder", "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a  paradisematic country, in which roasted parts of sentences fly into your mouth.", "./assets/images/person_1.jpg"));
employees.push(new employee("Amy Perez", "Creative Director", "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a  paradisematic country, in which roasted parts of sentences fly into your mouth.", "./assets/images/person_3.jpg"));
employees.push(new employee("Hannah White", "Creative Director", "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a  paradisematic country, in which roasted parts of sentences fly into your mouth.", "./assets/images/person_2.jpg"));
employees.push(new employee("John Doe", "Creative Director", "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a  paradisematic country, in which roasted parts of sentences fly into your mouth.", "./assets/images/person_1.jpg"));
employees.push(new employee("Amy Perez", "Creative Director", "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a  paradisematic country, in which roasted parts of sentences fly into your mouth.", "./assets/images/person_3.jpg"));
employees.push(new employee("John Doe", "Creative Director", "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a  paradisematic country, in which roasted parts of sentences fly into your mouth.", "./assets/images/person_4.jpg"));


let EmployeesSection = document.getElementById('employees');

function ShowEmployees() {
    EmployeesSection.innerHTML = '';
    employees.forEach((item) => {
        EmployeesSection.innerHTML += `
        <div class="card" style="width: 18rem;">
        <span><i class="fa-solid fa-quote-left"></i></span>
        <div class="text-content">
            <p id="home-p">${item.comment}
            </p>
        </div>
        <div class="author">
            <div class="img-container">
                <img src=${item.imgSrc}>
            </div>
            <div class="text">
                <h3>${item.fullName}</h3>
                <p>${item.position}</p>
            </div>
        </div>
        <button class="btn btn-danger" onclick="DeleteEmployee(${item.Id})">
        Delete</button>
    </div>
        `
    })
}

let clickedEmployee;

function DeleteEmployee(employeeId) {
    let index = employees.findIndex(e => e.Id == employeeId);
    employees.splice(index, 1);
    ShowEmployees();
}


let addEmployeeBtn = document.getElementById('AddEmployeeBtn');
addEmployeeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let modal = document.getElementById('AddEmplyoeeModal');
    modal.style.display = 'block';
})

let confirmAddEmployeeBtn = document.getElementById('ConfirmAddEmployee');
confirmAddEmployeeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let fullName=document.getElementById('employeeFullname').value;
    let position=document.getElementById('employeePosition').value;
    let comment=document.getElementById('employeeComment').value;
    let imgSrc=document.getElementById('employeeImgSrc').value;
    if(fullName.length>=5){
        if(comment.length>=10){
            employees.push(new employee(fullName,position,comment,imgSrc));
            document.getElementById('AddEmplyoeeModal').style.display='none';
            ShowEmployees();
            document.getElementById('employeeFullname').value="";
            document.getElementById('employeePosition').value="";
            document.getElementById('employeeComment').value="";
            document.getElementById('employeeImgSrc').value="";
            Swal.fire({
                title: "Employee Added",
                icon: "success"
            });
        }
        else{
            let EmployeeInfoMessage = document.getElementById('add-employee-info-message');
            EmployeeInfoMessage.innerHTML = `Content length must be greater than 10`;
        }
    }
    else{
        let  InfoMessage = document.getElementById('add-employee-info-message');
        EmployeeInfoMessage.innerHTML = `Fullname length must be greater than 5`;
    }
})

let CancelAddEmployee = document.getElementById('CancelAddEmployee');
CancelAddEmployee.addEventListener('click', (e) => {
    e.preventDefault();
    let modal = document.getElementById('AddEmplyoeeModal');
    modal.style.display = 'none';
   
})





