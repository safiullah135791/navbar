let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let home = document.querySelector('#home');

home.onclick = () =>{
    navbar.classList.remove('open');
    menu.classList.remove('bx-x')
}
menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}