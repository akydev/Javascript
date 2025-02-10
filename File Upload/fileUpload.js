// write a function for file upload.


function handleFile(e){
    let file = e.target.files[0];

    // console.log(e.target.files[0]);
        toBase64(file).then(y=>{
            console.log(y);
            localStorage.setItem("img", y);
        })

}

const toBase64 = file => new Promise ((resolve, reject)=>{
    
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
})