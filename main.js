const menu_bar = document.querySelector('#menu');
const nav_list = document.querySelector('.list');
const remove = document.querySelector('.fa-xmark');
const moon = document.querySelector('.moon');
const body = document.querySelector('body');
const header = document.querySelector('.nav');
const sun =  document.querySelector('.sun');

menu_bar.addEventListener("click", () => {
    nav_list.classList.toggle('active');
});

remove.addEventListener("click", () => {
    nav_list.classList.remove('active');
});

moon.addEventListener("click", () => {
    body.classList.toggle('active');
    header.classList.toggle('active');

    // if(body.classList.contains('active')) {
    //     switch_text.innerHTML = "sun"
    // } else {
    //     switch_text.innerHTML = "sun"
    // }

});

sun.addEventListener("click", () => {
    body.classList.remove('active');
    header.classList.remove('active');
});