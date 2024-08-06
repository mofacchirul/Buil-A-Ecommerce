const header=document.querySelector("header")
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY)
});

let menu = document.querySelector('#menu-icon');
let list = document.querySelector('.list');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    list.classList.toggle('open');
};