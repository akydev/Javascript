//Create a Array.
const customerDataArray = [];
//set index.
let index = -1;

function addItem(){
    let name = document.getElementById("nameTxt").value;
    let phone = document.getElementById("phoneTxt").value;
    let email = document.getElementById("emailTxt").value;

    const customer = {name, phone, email}

        if(!name == "" && !phone== "" && !email== "" && index < 0){
            console.log(customer)
            customerDataArray.push(customer);

        }
        else{
            // alert("Enter contact details");
            // itemArray[index] = item;
            customerDataArray[index] = customer;
            alert("Your Data edited sucessfully");

        }
        
        document.getElementById("nameTxt").value = "";
        document.getElementById("phoneTxt").value = "";
        document.getElementById("emailTxt").value = "";
        
        displayCustomerData();
    
}

function editItem(index1){
    index = index1;
    document.getElementById("nameTxt").value = customerDataArray[index1].name;
    document.getElementById("phoneTxt").value = customerDataArray[index1].phone;
    document.getElementById("emailTxt").value = customerDataArray[index1].email;

}

function displayCustomerData(){
    const display = customerDataArray.map(function(value,index){
        return      `<tr>
                        <th scope="row">${index}</th>
                        <td>${value.name}</td>
                        <td>${value.phone}</td>
                        <td>${value.email}</td>
                        <td><button type="button" class="btn btn-primary" onclick="editItem(${index})">Edit</button>
                        <button type="button" class="btn btn-primary" onclick="deleteItem(${index})">Delete</button>
                        
                      <!-- Example single primary button -->
                        <div class="btn-group">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Action
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#" onclick="editItem()">Edit</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#" onclick="deleteItem(${index})">Delete</a></li>
                        </ul>
                        </div>
                        </td>

                      </tr>`
    })
    document.getElementById("table_data").innerHTML = display.join(" ");
}


function deleteItem(index){
    customerDataArray.splice(index, 1);
    displayCustomerData();
}

function clearData(){
    customerDataArray.splice(0);
    displayCustomerData();
}