let Form = document.getElementById("form");

Form.addEventListener("submit",function(e){

    e.preventDefault();

    let email = document.getElementById("Email").value.trim();
    let Password = document.getElementById("Password").value.trim();

    let EmailError = document.getElementById("EmailError");
    let PasswordError = document.getElementById("PasswordError");

    console.log(email);
    console.log(Password);

    if(email ==''){
        EmailError.innerText = '*Required';
    }else{
        EmailError.innerText = '';
    }

    if(Password ==''){
        PasswordError.innerText = '*Required';
    }
    else{
        PasswordError.innerText = '';
    }

});


