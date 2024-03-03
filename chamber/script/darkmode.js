document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.querySelector('#mode');
    const body = document.querySelector('#content');
    const infodark = document.querySelector('.data');
    const formPage = document.querySelector('.formPage'); 
    const wflDark = formPage.querySelector('.wfl'); 

    darkModeToggle.addEventListener('change', function() {
        if (darkModeToggle.checked) {
            body.style.background = "#000";
            body.style.color = "#fff";
            infodark.style.background = "#000";
            wflDark.style.background = "#000";
          
        } else {
            body.style.background = "#eee";
            body.style.color = "#000";
            infodark.style.background = "#B6C4B6";
            wflDark.style.background = "#eee";
    
        }
    });
});

