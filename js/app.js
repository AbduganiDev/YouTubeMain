let upload = document.getElementById('upload');
upload.addEventListener('click', dotOne);

function dotOne() {
    let box = document.querySelector('.nav-right-box');
    box.classList.toggle('activety');
}

let cast = document.getElementById('cast');
cast.addEventListener('click', dotTwo);

function dotTwo() {
    let box = document.querySelector('.nav-rigth-tv');
    box.classList.toggle('activety');
}

let notification = document.getElementById('notification');
notification.addEventListener('click', dotThree);

function dotThree() {
    let box = document.querySelector('.nav-right-notification');
    box.classList.toggle('activety');
}

let user = document.getElementById('user');
user.addEventListener('click', dotFour);

function dotFour() {
    let box = document.querySelector('.nav-right-account');
    box.classList.toggle('activety');
}

let menu = document.getElementById('menu');
menu.addEventListener('click', funcWidth);

function funcWidth() {
    let sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('sideBarWidth');
}


