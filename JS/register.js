function validate(){
    let input_first_name = document.getElementById("first_name").value.trim()
    let input_last_name = document.getElementById("last_name").value.trim()
    let input_email = document.getElementById("email").value.trim()
    let input_phone = document.getElementById("phone").value.trim()
    let input_pass = document.getElementById("pass").value.trim()
    let input_cpass = document.getElementById("cpass").value.trim()

    if(input_first_name == "" && input_last_name == "" && input_email== "" && input_phone == "" && input_pass == "" && input_cpass == ""){
        document.getElementById('firstNameError').textContent = 'First name is required.'
        document.getElementById('lastNameError').textContent = 'Last name is required.'
        document.getElementById('emailError').textContent = 'Email is required.'
        document.getElementById('numberError').textContent = 'Phone number is required.'
        document.getElementById('passError').textContent = 'Password is required.'
        document.getElementById('cpassError').textContent = 'Confirm Password is required.'
        return false
    }
    else if(input_first_name == "" && input_first_name.length < 5){
        document.getElementById('firstNameError').textContent = 'First name must be more than 4 letters'
        return false
    }
    else if(input_last_name == "" && input_last_name.length < 5){
        document.getElementById('lastNameError').textContent = 'Last name must be more than 4 letters'
        return false
    }
    else if(input_email == "" && !input_email.endsWith("@gmail.com")){
        document.getElementById('emailError').textContent = 'Email must ends with @gmail.com'
        return false
    }
    else if(input_phone == "" && !isPhoneNum(input_phone)){
        document.getElementById('numberError').textContent = 'Phone number is not valid'
        return false
    }
    else if(input_pass == "" && !isAlphaNum(input_pass)){
        document.getElementById('passError').textContent = 'Password must be alphanumeric'
        return false
    }
    else if(input_cpass == "" && input_pass != input_cpass){
        document.getElementById('cpassError').textContent = 'Re-type the correct password'
        return false
    }
    else{
        window.location.href = 'homepage.html'
    }
}

function isNum(element){
    let flag = 0
    for(let i=0; i<element.length; i++){
        if(element[i]<='0' && element[i]>='9')
            flag++
    }
    if(flag > 0)
        return false
    else
        return true
}

function isAlphaNum(element){
    for(let i=0; i<element.length; i++){
        if(element[i]>='a' && element[i]<='z')
            continue
        else if(element[i]>='A' && element[i]<='Z')
            continue
        else if(element[i]>='0' && element[i]<='9')
            continue
        else
            return false
    }
    return true
}

function isPhoneNum(element){
    if(element[0]==0 && element[1]==8 && element.length>=11 && isNum(element))
        return true
    else
        return false
}