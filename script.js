const password = document.querySelector("#password");
const confirm_password = document.querySelector("#confirm-password");
const submit = document.querySelector(".submit");

//add event listener to check if the password OR the confirm password thing is updated
submit.addEventListener('click', (e) => { //if the submit button is clicked, check if the passwords ar the same
    e.preventDefault();
    if (password.value === confirm_password.value && password.value !== ""){
        password.style.borderColor = "green";
        confirm_password.style.borderColor = "green";
        document.myform.submit(); //if they are the same submit the form
    }
    else{
        password.style.borderColor = "red";
        confirm_password.style.borderColor = "red";
        const error_div = document.querySelector(".error");
        error_div.innerText = "* Passwords do not match";
        error_div.style = "color:red; font-size:8px";
    }
})