let dir = { 
    right:"right-5",
    left :"left-5",
    top:"top-5",
    bottom :"bottom-5"
}

let type={
    warn:"bg-red-500",
    info:"bg-blue-500",
    success:"bg-green-500"
}

let positionX = document.querySelector('#positionX');
let positionY = document.querySelector('#positionY');
let customMsg = document.querySelector('#customMsg');
let button = document.querySelector('button');

button.addEventListener('click', () => {
    if(!customMsg.value) {
        alert("Please enter a message");
        return;
    }
    let div = document.createElement('div');
    div.classList.add('fixed', dir[positionX.value], dir[positionY.value], 'px-4', 'py-3', type[document.querySelector('input[name="toastType"]:checked').value],'text-white', 'rounded-lg', 'shadow-lg', 'transition-opacity', 'duration-300');
    div.innerHTML = customMsg.value;
    document.body.appendChild(div);

    setTimeout(() => {
        div.classList.add('opacity-0');
        setTimeout(() => {
            document.body.removeChild(div);
        }, 300);
    }, 3000);
});