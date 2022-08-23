let loggedInUser = {};

        (() => {

            let item = localStorage.getItem("loggedInUser");

            if (item) loggedInUser = JSON.parse(item);
            else {
                window.location.href = "./login.html"
                return;
            }


            

            document.querySelector("#name").innerText ="Welcome, " + loggedInUser.firstName; 
               

        })()


        function doLogout() {
            localStorage.removeItem("loggedInUser");

            window.location.href = "./login.html";
        }
   