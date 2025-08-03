const notes_area = document.querySelector('notes-container');
const colors = document.querySelector('.new-note-btn');

colors.addEventListener()
document.querySelector('.new-note-btn').addEventListener('click',function(){
    const div=document.createElement('div');
    div.style.backgroundColor='lightpink';
    notes_area.appendChild(div);
})