const dropdown = document.querySelector('select');
const h1 = document.querySelector('h1');
const h3 = document.querySelector('h3');
const inc = document.querySelector('.increment');
const dec = document.querySelector('.decrement');
const cut = document.querySelector('.cross'); 
const p = document.querySelector('p');
const color_template = document.querySelectorAll('.color_template');
const upload = document.querySelector('.file_btn');
const input_file = document.querySelector('.input_file');
const div = document.querySelector('.main');

let count = 0;
let bg_color = p.style.backgroundColor;

dropdown.addEventListener('change',function(){
    h1.innerText = "You selected " + dropdown.value;
})

inc.addEventListener('click',function(){
    count++;
    h3.innerText="The count is: " + count;
})

dec.addEventListener('click',function(){
    count--;
    h3.innerText="The count is: " + count;
})
cut.addEventListener('click',function(){
    p.style.display='none';
})

color_template.forEach(color =>{
    color.addEventListener('mouseover',function(){
        let bg=color.classList[1];
        p.style.backgroundColor=bg;
    })
    color.addEventListener('mouseout',function(){
        p.style.backgroundColor=bg_color;
    })
})

input_file.addEventListener('change',function(event){
    const file = event.target.files[0];
    if(file){
        upload.textContent = file.name;
    }
});

div.addEventListener('click',function(){
    div.style.backgroundColor='lightpink';
});