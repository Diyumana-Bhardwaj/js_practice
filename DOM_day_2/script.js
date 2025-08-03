const h1= document.querySelector('h1');
const image = document.querySelector('img');
h1.className = 'helulu';
const change = ()=>{
    h1.textContent="Hey How are you !\n <small>powered by TextContent</small>\n";
};

const change2 = ()=>{
    h1.innerHTML="Hey How are you !\n <small>powered by innerHTML</small>\n";
};

const change3 = ()=>{
    h1.innerText="Hey How are you !\n <small>powered by innerText</small>\n";
};

let repair = ()=>{
    // image.src="https://images.unsplash.com/photo-1583083527882-4bee9aba2eea?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    image.setAttribute('src','https://images.unsplash.com/photo-1583083527882-4bee9aba2eea?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
};

