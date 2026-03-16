const banner = document.getElementById("cookie-banner")

if(localStorage.getItem("cookiesAccepted")){
banner.style.display = "none"
}

document.getElementById("acceptCookies").onclick = function(){

localStorage.setItem("cookiesAccepted","true")

banner.style.display = "none"

}

document.getElementById("rejectCookies").onclick = function(){

banner.style.display = "none"

}