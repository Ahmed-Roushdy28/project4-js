// var signupName = document.getElementById('name')
// var signupEmail = document.getElementById('email')
// var signupPassword = document.getElementById('password')
// var signupRepassword = document.getElementById('re-password')


function onSubmit(e){
e.preventDefault() ;
const info =  e.target
const json = {
    "name": info.name.value,
    "email":info.email.value,
    "password":info.password.value,
    "rePassword":info.rePassword.value,
    "phone":info.phone.value
}
signUp(json);
}




async function signUp( data ){
     try{
        const response = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signup" , {
            method : "POST" ,
            body : JSON.stringify(data) ,
            headers :{
                "Content-Type" : "application/json"
            }
            }) ;
            const result = await response.json() ;
            if (response.ok){
                const userName = result.user.name
                localStorage.setItem("userName" , userName)
                window.location.href="index.html"
            }else{
                // console.log( result.errors.msg);
                const errorMessage = document.querySelector("#passwordMatch")
                if(result.errors){
                    errorMessage.innerHTML = `<span class="text-danger">${result.errors.msg}</span>` ;
                }else if (result.message){
                    errorMessage.innerHTML = `<span class="text-danger">${result.message}</span>` ;
                }else{
                    errorMessage.innerHTML = `<span class="text-danger">${"something went wrong pls try again"}</span>` ;
                }
                errorMessage.classList.remove("d-none")
            }


     }catch(error){
        console.log(error);
        
     }
      }