let login = document.querySelector('.login');

let Create = document.querySelector('.create');

let container = document.querySelector('.container');

login.onclick = function(){
  container.classList.add('signinForm');
}

Create.onclick = function(){
  container.classList.remove('signinForm');
}