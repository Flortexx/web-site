const database = [
    "pepik.ahoj1",
    "jana.pizza2",
    "karel.kočka3",
    "eva.12345",

    
]





function login() {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    const loginData = username + "." + password

    for(let i = 0; i < database.length; i++){
        
        if(loginData == database [i]) {
            document.getElementById("output").innerHTML = "login successful"
            console.log("login successful");
            window.location.href = 'http://127.0.0.1:5500/01-mujprvn-Repositar-main/01-mujprvn-Repositar-main/IT1/19-login/loggin.html';
            document.getElementById("outputSite").innerHTML = loginData
            break
        } else if (i == database.length - 1){
            document.getElementById("output").innerHTML = "login failed"
            console.log("login failed")
        }
    }
}