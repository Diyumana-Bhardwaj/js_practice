const button = document.querySelector('button');
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
const CurrentTheme = prefersDarkMode.matches;
let changeTheme = ()=>{
    const isDark = prefersDarkMode.matches;
    if(isDark){
        document.body.classList.add("dark-theme");
        document.body.classList.remove('light-theme');
    }else{
        document.body.classList.add('light-theme');
        document.body.classList.remove("dark-theme");
    }
};

const savedTheme = localStorage.getItem('theme');
if(savedTheme === 'dark-theme'){
    document.body.classList.add("dark-theme");
}else if (savedTheme === 'light-theme'){
    document.body.classList.add("light-theme");
}else changeTheme();

prefersDarkMode.addEventListener('change', function(){
    changeTheme();
});

button.addEventListener('click',function(){
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");
    localStorage.setItem('theme',document.body.classList.value);
})
