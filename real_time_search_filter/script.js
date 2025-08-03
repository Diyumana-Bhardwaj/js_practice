const users =[
    {
        img :"https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww",
        name: "Alice",
        prof: "Frontend Developer"
    },
      
    {
        img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww",
        name: "Bob",
        prof: "Backend Engineer"
    },


    {
        img: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        name:"Charlie",
        prof: "Full Stack Developer"
    },

    {
        img : "https://images.unsplash.com/photo-1716471551703-e8bb5ca9bf23?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlc3VtZSUyMHBob3RvfGVufDB8fDB8fHww",
        name: "Harry",
        prof: "Machine Learning Engineer",
    },
    {
        img : "https://images.unsplash.com/photo-1699899657680-421c2c2d5064?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdW1lJTIwcGhvdG98ZW58MHx8MHx8fDA%3D",
        name: "Diana",
        prof: "UI/UX Designer",
    },
    {
        img : "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        name: "Henry",
        prof: "Data Analyst",
    },
    {
        img : "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww",
        name: "John",
        prof: "Software Engineer",
    },
    {
        img : "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww",
        name: "Harley",
        prof: "Freelancer",
    },
]
const inp = document.querySelector('#searchInput');

function setUser(arr){
    arr.forEach(user => {
        const card = document.createElement('div');
        card.className= 'card';
        card.innerHTML = `
        <img src = "${user.img}" alt = "${user.name}">
        <div class = "info-blur">
            <h3>${user.name}</h3>
            <p>${user.prof}</p>
        </div>
        `;
        document.querySelector('.card-container').appendChild(card);
    });
};

setUser(users);

inp.addEventListener('input',function(){
    let newUsers= users.filter((user)=>{
        return user.name.toLowerCase().startsWith(inp.value.toLowerCase());
    });document.querySelector('.card-container').innerHTML="";
    if(newUsers.length === 0){
       document.querySelector('.card-container').innerHTML = `<div class="no-result">Sorry, no results found :(</div>`;
    }else{
        setUser(newUsers);
    }
    
})