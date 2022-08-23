let user = [];



(() => {

    let item = localStorage.getItem("user");

    if (item) user = JSON.parse(item);

    let loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        window.location.href = "./dashboard.html"
        return;
    }
})()



function doSignUp(e){


    e.preventDefault();

let firstName =  document.getElementById("firstName").value
let lastName = document.getElementById("lastName").value
let  email =document.getElementById("email").value
let number = document.getElementById("number").value
let  gender =document.getElementById("gender").value
let age = document.getElementById("age").value
let  password =document.getElementById("password").value
let confirmPassword = document.getElementById("confirmPassword").value

setTimeout(() => {
    document.querySelector("#result").innerText = "";
    document.querySelector("#error").innerText = "";
}, 3000);

 

for(let i=0; i<user.length; i++){
if(user[i].email=== email){
    
    document.querySelector("#error").innerText = " This email is already exist !";
    
    return;
}


}

if(password !== confirmPassword){
    document.querySelector("#error").innerText = "Confirm password does`nt match"
    return;

}


let newuser = {
    firstName,
    lastName,
    email,
    number,
    age,
    gender,
    password,
    confirmPassword,
 }

 user.push(newuser)

 localStorage.setItem("user",JSON.stringify(user));

 document.querySelector("#result").innerText = "Sign Up Sucseeful";
 
 
 

 e.target.reset();
}






function doLogout() {
    localStorage.removeItem("loggedInUser");

    window.location.href = "./login.html";
}