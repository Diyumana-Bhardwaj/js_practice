const add_btn = document.querySelector('#add-note');
const form_container = document.querySelector(".form-container");
const close_btn = document.querySelector(".closeForm");
const form = document.querySelector('form');
const imageInput = form.querySelector('input[placeholder="https://example.com/photo.jpg"]');
const nameInput = form.querySelector('input[placeholder="Enter full name"]');
const townInput = form.querySelector('input[placeholder="Enter home town"]');
const purposeInput = form.querySelector('input[placeholder="e.g., Quick appointment note"]');
const categoryInputs = form.querySelectorAll('input[name="category"]');



//button handling

//filters handling

//form prakat karna aur gayab karna
add_btn.addEventListener('click',function(){
    form_container.style.display = "initial";
})
close_btn.addEventListener('click', function(){
    form_container.style.display="none";
})
// form validation
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting

    const imageUrl = imageInput.value.trim();
    const fullName = nameInput.value.trim();
    const homeTown = townInput.value.trim();
    const purpose = purposeInput.value.trim();
    const selectedCategory = [...categoryInputs].find(input => input.checked)?.value;

    // Validate inputs
    if (!imageUrl) {
        alert('Please enter a valid image URL (jpg, jpeg, or png).');
        return;
    }

    if (!fullName || fullName.length < 2) {
        alert('Please enter a valid full name.');
        return;
    }

    if (!homeTown) {
        alert('Please enter your home town.');
        return;
    }

    if (!purpose || purpose.length > 100) {
        alert('Please enter a purpose under 100 characters.');
        return;
    }

    if (!selectedCategory) {
        alert('Please select a category.');
        return;
    }

    const note = {
        url: imageUrl,
        name: fullName,
        town: homeTown,
        purpose: purpose,
        category: selectedCategory
    };
    StoreLocal(note);
    form.reset(); 
    form_container.style.display = "none";
});


// data stores in local storage
function StoreLocal(obj){
    let tasks =[]
    if(localStorage.getItem("tasks") !== null) tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.push(obj);
    localStorage.setItem("tasks",JSON.stringify(tasks));
}
// stack storage se display ho