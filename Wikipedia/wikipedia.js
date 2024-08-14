//create a function to call api (To test only).
function searchData() {
  let searchTxt = document.getElementById("searchTxt").value;
  fetch(
    `https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=${searchTxt}`
  )
    .then(function (value) {
      return value.json();
    })
    .then(function (value) {
      displayWikipedia(value.query.search);
    })
    .catch(function (e) {
      console.log(e);
    });
};
//create a function to display.
function displayWikipedia(data) {
  let output = data.map(function (value) {
    return `<div class="card col-xl-4 mb-4" style="width:400px">       
                <div class="card-body">
                  <h4 class="card-title">${value.title}</h4>
                  <p class="card-text">${value.snippet}</p>
                </div>
            </div>`;
  });
  document.getElementById("wikipedia_result").innerHTML = output.join(" ");
};