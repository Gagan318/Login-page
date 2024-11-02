const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click',() => {
    (document.getElementById('container')).classList.add("active");
});

loginBtn.addEventListener('click',() =>{
    (document.getElementById('container')).classList.remove("active");
});