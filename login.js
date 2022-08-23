



(() => {

    let item = localStorage.getItem("user");

    if (item) user = JSON.parse(item);

    let loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        window.location.href = "./dashboard.html"
        return;
    }
})()

function doLogin(e){
    e.preventDefault();

    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    

let isFound = false;

for(let i=0; i<user.length; i++){

    if(user[i].email === email){
isFound= true;

if(user[i].password === password){
localStorage.setItem("loggedInUser",JSON.stringify(user[i]))
window.location.href="./dashboard.html"
break;

}else{
document.querySelector("#error").innerText = "Incorrect password";
return;
}


    }


}
if(!isFound){ 
    document.querySelector("#error").innerText = "User Not Found";
return;
}
setTimeout(() => {
    document.querySelector("#result").innerText = "";
    document.querySelector("#error").innerText = "";
}, 5000);

e.target.reset();
}
