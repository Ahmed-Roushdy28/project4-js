function onSubmit(e){
e.preventDefault() ;
const info = e.target
const json = {
   email : info.email.value , 
   password : info.password.value
}
console.log(json);
signIn(json)
}


async function signIn(data) {
try{
   const response = await fetch ("https://ecommerce.routemisr.com/api/v1/auth/signin" , {
      method : "POST" ,
      body : JSON.stringify(data) ,
      headers :{
          "Content-Type" : "application/json"
      }
      })   
      const result = await response.json();
      if(response.ok){
         const userName = result.user.name;
         localStorage.setItem('userName', userName);
         window.location.href="main.html"
      }else{const errorMessage = document.querySelector("#passwordMatchh")
         if(result.errors){
            errorMessage.innerHTML  = `<span class="text-danger">${result.errors.msg}</span>` 
         }else if (result.message){
            errorMessage.innerHTML = `<span class="text-danger">${result.message}</span>`
         }else{
            errorMessage.innerHTML = `<span class="text-danger">${"something went wrong pls try again"}</span>` ;
        }
        errorMessage.classList.remove("d-none")
      }
}catch(error){
   console.log(error);
   
}
}