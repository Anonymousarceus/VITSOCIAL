document.addEventListener("DOMContentLoaded", function() {
    let signupbtn = document.getElementById("signupbtn");
    let signinbtn = document.getElementById("signinbtn");
    let namefieldContainer = document.getElementById("namefield");
    let title =document.getElementById("title"); 

    signinbtn.onclick = function() {
        // console.log("Sign In button clicked");
        namefieldContainer.classList.add("hidden");
        title.innerHTML="Sign In";
        signupbtn.classList.add("disable");
        signinbtn.classList.remove("disable");
    }
    signupbtn.onclick = function() {
        // console.log("Sign Up button clicked");
        
        namefieldContainer.classList.remove("hidden");
        title.innerHTML="Sign Up";
        signinbtn.classList.add("disable");
        signupbtn.classList.remove("disable");
    }
});
