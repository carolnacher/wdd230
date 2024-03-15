document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.querySelector('#mode');
    const body = document.querySelector('#content');

   
    const infodark = document.querySelector('.data');

    darkModeToggle.addEventListener('change', function() {
        if (darkModeToggle.checked) {
            body.style.background = "#000";
            body.style.color = "#fff";

            
            if (infodark) {
                infodark.style.background = "#000";
            }
        } else {
            body.style.background = "#eee";
            body.style.color = "#000";

            
            if (infodark) {
                infodark.style.background = "#B6C4B6";
            }
        }
    });
});