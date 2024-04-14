
let customers=[];


let allCustomers = document.getElementById('all-customers');
function ShowCustomers() {
    allCustomers.innerHTML = '';
    customers.forEach((item) => {
        allCustomers.innerHTML += `
      <tr>
        <th scope="row">${item.Id}</th>
        <td>${item.fullName}</td>
        <td>${item.email}</td>
        <td>${item.message}</td>
        <td><button class="btn btn-danger" onClick="DeleteCostumer(${item.Id})">Delete</button></td>
      </tr>
        `
    });
}

let sentMessageBtn=document.getElementById('sendMessageBtn');

sentMessageBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    let customerName=document.getElementById('cust-name').value;
    let customerEmail=document.getElementById('cust-email').value;
    let customerMessage=document.getElementById('cust-message').value;
    if(customerName.length>=3){
        let nameInfoMessage = document.getElementById('nameInfoMessage');
        nameInfoMessage.style.display="none";
        if(customerMessage.length>=10){
            customers.push(new customer(customerName,customerEmail,customerMessage));
            ShowCustomers();
            document.getElementById('cust-name').value='';
            document.getElementById('cust-email').value='';
            document.getElementById('cust-message').value='';
            let InfoMessage = document.getElementById('InfoMessage');
            InfoMessage.style.display = 'none';
        }
        else{
            let InfoMessage = document.getElementById('InfoMessage');
            InfoMessage.style.display = 'block';
            InfoMessage.innerHTML = `Message length must be greater than 10`;
        }
    }
    else{

        let nameInfoMessage = document.getElementById('nameInfoMessage');
        nameInfoMessage.style.display="block";
        nameInfoMessage.innerHTML = `Fullname length must be greater than 3`;
    }
   
   
});

function DeleteCostumer(id){
    let index = customers.findIndex(c => c.Id == id);
    customers.splice(index, 1);
    ShowCustomers();
}


