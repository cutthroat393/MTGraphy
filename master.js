
function formSubmitted(event){
    let fullnameTxt = document.getElementById('fullnameTxt')
    
    let name = fullnameTxt.value
    let email = document.getElementById('emailTxt').value
    let phoneNum = document.getElementById('phonenumTxt').value
    let country = document.getElementById('countryTxt').value


    if(name.length <2){
        alert('name length must be more than 2')
    }

    else if (!email.endsWith("@gmail.com")){
        alert('email must ends with @gmail.com')
    }

    else if (phoneNum.length <10){
        alert('please enter your full phone number')
    }

    else if (country != 'Indonesia' && country!='Malaysia' && country!='Singapore'){
        alert('our services only available in Indonesia, Malaysia, and Singapore')
    }

    else{
        alert('register success')
    }
    console.log(username)
    console.log(email)
    console.log(password)

    event.preventDefault()
}