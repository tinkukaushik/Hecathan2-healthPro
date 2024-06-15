let navbar = document.querySelector(".navbar");
let menu = document.querySelector("#menu-btn");
let register = document.querySelector(".register");
let signup = document.querySelector(".signupFrm");
let body = document.querySelector(".home");
let submitbtn = document.querySelector(".submitBtn");
let registerbtn = document.querySelector(".registerbtn");
let doctor = document.querySelector(".doctor-card");


menu.onclick = function(){
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}


window.onscroll = function(){
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
}

register.onclick = function(){
    // register.classList.toggle("fa-times");
    signup.classList.toggle("on");
}

submitbtn.onclick = function(){
    window.open("servicepage.html");
}

registerbtn.onclick = function(){
    window.location.href("register.html");
}

// doctor.onclick = function(){
//     window.open("dprofile.html");
// }

function showDoctorProfile(name,spe,rate,exp){
    // alert(name);
    // document.querySelector(".profile-name").innerHTML;

    window.open("dprofile.html");

}
function bookAppointment(){
    window.open("appointmentform.html");
}

function confirmAppoint(){
    window.open("appointmentconfirm.html");
}
