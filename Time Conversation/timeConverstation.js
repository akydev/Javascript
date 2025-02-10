// const d = new Date();
// document.getElementById("currentTime").innerHTML = d;

// const d1 = new Date();
// console.log(d1.toString()); // "Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)"

// //Modify the time relative to UTC by adding +HH:MM or subtraction -HH:MM to the time.

// //Wed Mar 25 2015 23:30:00 GMT+0530 (India Standard Time)



const handleDateConvert = () =>{
    let d = new Date();
    let m = +(document.getElementById("timeData").value);
    let p = new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes()+m, d.getUTCSeconds());

    // console.log(p);
    document.getElementById("currentTime").innerHTML = p;
}