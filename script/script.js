function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  

function validateSigninForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (email === "") {
      alert("Email must be filled out");
      return false;
    }
    else if(!validateEmail(email)){
        alert("Email must be valid");
        return false;
    }
  
    if (password === "") {
      alert("Password must be filled out");
      return false;
    }
    return true;
  }
  


function validateSignupForm(){
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const telephone = document.getElementById("telephone").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(firstname === "" || lastname === ""){
        alert("Name field must be filled!");
        return false;
    }
    else if(telephone === ""){
        alert("Telephone must be filled!");
        return false;
    }
    if(email === ""){
        alert("Email must be filled!");
        return false;
    }
    else if(!validateEmail(email)){
        alert("Email must be valid");
        return false;
    }
    else if(password === ""){
        alert("Password must be filled!");
        return false;
    }
    return true;
}
