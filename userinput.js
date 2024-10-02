

function registration(){
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let mobile = document.querySelector('#mobile').value;
    let password = document.querySelector('#password').value;
    let cpassword = document.querySelector('#cpassword').value;

    console.log(name,email,mobile,password,cpassword);

    if(name === ""){
        document.querySelector('#errorname').innerHTML = "please enter your name";
        let selectname = document.querySelector('#name');
        selectname.style.borderColor = "red"
        selectname.style.outlineColor = "red"
        return false;
    }
    else if(email === ""){
        document.querySelector('#erroremail').innerHTML = "please enter valid email";
        let selectname = document.querySelector('#email');
        selectname.style.borderColor = "red"
        selectname.style.outlineColor = "red"
        return false;
    }
    else if(!(email.includes('@') && email.includes(".com"))){
        document.querySelector('#erroremail').innerHTML = "Please enter valid email";
        let selectname = document.querySelector('#email');
        selectname.style.borderColor = "red"
        selectname.style.outlineColor = "red"
        return false;
    }
    else if(mobile.length !== 10){
        document.querySelector('#errormobile').innerHTML = "mobile number should be 10 digit";
        let selectname = document.querySelector('#mobile');
        selectname.style.borderColor = "red"
        selectname.style.outlineColor = "red"
        return false;
    }
    else if(isNaN(mobile)){
        document.querySelector('#errormobile').innerHTML = "mobile number should integer only";
        let selectname = document.querySelector('#mobile');
        selectname.style.borderColor = "red"
        selectname.style.outlineColor = "red"
        return false;
    }


    
}

function s(arg){
    console.log(arg)
    let selectedinput = document.querySelector(`#${arg}`);
    console.log(selectedinput);
    selectedinput.style.borderColor = "black";
    selectedinput.style.outlineColor = "black";


    let selectederrordiv = document.querySelector(`#error${arg}`);
    selectederrordiv.innerHTML = "";

}