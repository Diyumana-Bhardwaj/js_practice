const form = document.querySelector('form');
const fill_email = document.querySelector('#fill_email');
const fill_name = document.querySelectorAll('.fill_name');
const fill_password = document.querySelector('#fill_password');
const declare = document.querySelector('# declaration');

form.addEventListener('submit',function(event){
    event.preventDefault();
    const name=event.target[0].value;
    const email=event.target[1].value;
    const password=event.target[2].value;
    if(email && name && password){
        fill_name.forEach(ele => {
            ele.textContent = name;
        });
        fill_email.textContent = email;
        
        fill_password.textContent = password;
        declare.style.display = 'block';
    }


})

