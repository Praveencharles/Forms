let form = document.getElementById("form");

form.addEventListener("submit",function(e){

    e.preventDefault();

    let Name = document.getElementById("firstName");
    let Password = document.getElementById("Password");
    let Email = document.getElementById("Email");
    let confirmPassword = document.getElementById("confirmPassword");

    let NameError = document.getElementById("nameError");
    let EmailError = document.getElementById("EmailError");
    let PasswordError = document.getElementById("passwordError");
    let confirmPasswordError = document.getElementById("confirmPasswordError");


    if(Name.value === ''){
        NameError.innerText = '*Required';
    }
    else{
        NameError.innerText = '';
    }
    
    if(Email.value === ''){
        EmailError.innerText = '*Required';
    }
    else{
        EmailError.innerText = '';
    }

    if(Password.value === ''){
        PasswordError.innerText = '*Required';
    }
    else{
        PasswordError.innerText = '';
    }

    if(confirmPassword.value === ''){
        confirmPasswordError.innerText = '*Re-Enter Password';
    }
    else{
        if(confirmPassword.value != Password.value){
            confirmPasswordError.innerText = 'Password not matched ';
        }
        else{
            confirmPasswordError.innerText = '';
        }
    }


});
