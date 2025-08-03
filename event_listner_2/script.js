document.body.addEventListener('keydown',function(event){
    if(event.key === " ") document.querySelector('div').textContent='space';
    else document.querySelector('div').textContent=event.key;
})