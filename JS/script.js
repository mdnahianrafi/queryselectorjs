let inputMail = document.querySelector('#exampleInputEmail1');
let inputPass = document.querySelector('#exampleInputPassword1');
let inputDistrict = document.querySelector('#exampleInputDistrict1');
let button = document.querySelector('button');
let result = document.querySelector("h2");

button.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    
    if (inputMail.value === "mymail@gmail.com") {
        if (inputDistrict.value === "Dhaka") {
            if (inputPass.value === "12345678") {
                
                result.innerHTML = "✔ Your Login Has Been Successful.";
            } else {
                result.innerHTML = "Invalid Email, District, or Password";
            }
        } else {
            result.innerHTML = "Invalid Email, District, or Password";
        }
    } else {
        result.innerHTML = "Invalid Email, District, or Password";
    }
});


