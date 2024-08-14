// Countdown Timer

function updateCountdown(){
    const eventDate = new Date('2024-08-08T23:59:59'); // Set your target date here
    const now = new Date();
    const timeDiffrance = eventDate - now;
    if(timeDiffrance <= 0){
        document.getElementById("countdown").innerHTML = "The Event is Started!!!";
        return;
    }

    const days = Math.floor(timeDiffrance / (1000*60*60*24));
    const hours = Math.floor((timeDiffrance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiffrance % (1000*60*60)) / (1000*60));
    const second = Math.floor((timeDiffrance % (1000*60)) / 1000);

    // document.getElementById("countdown").innerHTML = `${days} Days ${hours} Hours ${minutes}Min 
    // ${second}Sec`

    document.getElementById("countdown").innerHTML = `<div class="card">
  <div class="card-body">
    <span>${days}</span> <span>day</span> <span>${hours}</span> <span>hours</span> <span>${minutes}</span> <span>minutes</span> <span>${second}</span> <span>second</span>
  </div>
</div>`

}

//update Countdown every second

setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call to display countdown immediately