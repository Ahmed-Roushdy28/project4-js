   const userName = localStorage.getItem('userName');
   const userNameElement = document.getElementById('userName');
   if (userName) {
       userNameElement.innerHTML = `Welcome, ${userName}`;
   } else {
       userNameElement.innerHTML = "Welcome";
   }
