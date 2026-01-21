let form = document.getElementById("form");

form.addEventListener("submit",function(e){

    e.preventDefault();

    let Username = document.getElementById("Username");
    let Password = document.getElementById("Password");

    let UsernameError = document.getElementById("UsernameError");
    let PasswordError = document.getElementById("PasswordError");

    if(Username.value === ''){
        UsernameError.innerText = '*Required';
    }
    else{
        UsernameError.innerText = 'Looks Good!';
    }

    if(Password.value === ''){
        PasswordError.innerText = "*Required";
    }
    else{
        PasswordError.innerText = 'Looks Good!';
    }


});
