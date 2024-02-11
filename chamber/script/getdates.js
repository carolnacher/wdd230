document.addEventListener("DOMContentLoaded", function () {
    let currentYear = new Date().getFullYear();
    let firstParagraph = document.getElementById("footerFirstParagraph");

    let decoratedName = "🌟 Carol Nacher 🌟";
    let uruguayFlag = "Uruguay";
    let uruguayFlagImage = `<img src="images/flag.webp" alt="Flag of Uruguay" width="200" height="200" style="vertical-align: middle;">`;

    firstParagraph.innerHTML = `&copy; ${currentYear} ${decoratedName} -  ${uruguayFlag} ${uruguayFlagImage}`;

    let lastModifiedParagraph = document.getElementById("lastModified");
    lastModifiedParagraph.innerHTML = "Última modificación: " + document.lastModified;

    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');
    
    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    }); 
});

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



