let products = [];

fetch("https://fakestoreapi.com/products") //call the API Using URL.
.then(function(value){
    return value.json(); //convert data value in json format.
}).then(function(value){
    products = value;    //Assigne Data Value to the product array.
    displayInfo();       //call DisplayInfo Function to display Products on Html.
}).catch(function(e){    //catch the exception.
    console.log(e);     // print the exception in console.
});

function displayInfo(){
    const product = products.map(function(value, index, array){
        return `<div class="card">
                  <img src="${value.image}" class="card-img-top" id="img" alt="product_image">
                  <div class="card-body">
                    <h5 class="card-title" id="title">${value.title}</h5>
                    <p class="card-text" id="desc">${value.description}</p>
                    <a href="#" class="btn btn-primary">Add To Cart</a>
                  </div> 
              </div>`
    });
    document.getElementById("product_details").innerHTML = product.join("");
}