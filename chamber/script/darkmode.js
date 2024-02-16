document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.querySelector('#darkModeToggle');
    const body = document.querySelector('#content');

    darkModeToggle.addEventListener('change', function() {
        if (darkModeToggle.checked) {
            body.style.background = "#000";
            body.style.color = "#fff";
        } else {
            body.style.background = "#eee";
            body.style.color = "#000";
        }
    });
});
