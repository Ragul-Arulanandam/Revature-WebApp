const signUp = e=> {
    let userName = document.getElementById('username').value,
    eMail = document.getElementById('email').value,
    pwd = document.getElementById('password').value;


    let formData = JSON.parse(localStorage.getItem('formData')) || [];


    let exist =formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => 
        data.userName.toLowerCase() == userName.toLowerCase() && 
        data.eMail.toLowerCase() == eMail.toLowerCase());

    if(!exist){
        formData.push({ userName, eMail, pwd });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('username').focus();

        console.log(formData);
        alert("Account Created.\n\nPlease Sign In using the link below.");
    }
    else{
        alert("Ooopppssss... Duplicate found!!!\nYou have already sigjned up");
    }
    e.preventDefault();
}

function signIn(e) {
    let email = document.getElementById('email').value, 
    pwd = document.getElementById('password').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
    
    console.log(email);
    console.log(formData);

    if(!exist){
        alert("Incorrect login credentials");
    }
    else{
        location.href = "/";
    }
    e.preventDefault();
}