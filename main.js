let navbar = document.querySelector('.navbar1 .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle("active");
};

window.onscroll = () =>{
    navbar.classList.remove('active')
}