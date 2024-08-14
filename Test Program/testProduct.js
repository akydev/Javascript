//Call the Api.
// const products = [];

fetch("https://fakestoreapi.in/api/products")
.then(function(value){
    return value.json();
}).then(function(value){
    // products = value;
    // return value;
    // console.log(value);
    displayProduct(value.products);
}).catch(function(e){
    return(e);
})

displayProduct();

function displayProduct(data){
    // console.log(products);
    const display = data.map(function(value,index,array){

        return `<div class="card" style="width: 25.5rem;">
                <img src="${value.image}" class="card-img-top" alt="image">
                <div class="card-body">
                  <h5 class="card-title">${value.title}</h5>
                  <p class="card-text">${value.description}</p>
                </div>
                
                <div class="card-body">
                 <label class="card-text">Category</label>
                 <span class="card-text">${value.category}</span>
                 <label class="card-text">Model</label>
                 <span class="card-text">${value.model}</span>
                 <label class="card-text">Color</label>
                 <span class="card-text">${value.color}</span>
                </div>

                <div class="card-body">
                 <span class="card-text">Price</span>
                 <span class="card-text">$ ${value.price}</span>
                </div>
                
                <div class="card-body">
                 <span class="card-text">Discount</span>
                 <span class="card-text">${value.discount}%</span>
                </div>
              </div>`
    })
     
    document.getElementById("DisplayProduct").innerHTML = display.join(" ");
}

