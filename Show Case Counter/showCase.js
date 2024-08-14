//Create a common funtion for counters.
function createCounter(id, maxNumber, interval){
    let currentNumber = 0;
    const counterElement =document.getElementById(id);

    function updateCounter(){
        if(currentNumber <= maxNumber){
            counterElement.textContent = currentNumber;
            currentNumber ++;
        }
    }

    setInterval(updateCounter,interval);
};

//Create three counter.
createCounter("projects", 500, 10);
createCounter("workingHours", 17140, 10);
createCounter("clients", 1500, 10);