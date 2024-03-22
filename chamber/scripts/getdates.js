document.addEventListener("DOMContentLoaded", function () {
    let currentYear = new Date().getFullYear();
    let firstParagraph = document.getElementById("footerFirstParagraph");

    let decoratedName = "Contact Chamber Montevideo";
    let uruguayFlag = "Rincón 454 - 598 2916 1277 - 598 2916 1243";
    let uruguayFlagImage = `<img src="images/flag.webp" alt="Flag of Uruguay" width="80" height="80" style="vertical-align: middle;">`;

    firstParagraph.innerHTML = ` ${decoratedName} -  ${uruguayFlag} ${uruguayFlagImage} - ${currentYear}&copy;`;

    let lastModifiedParagraph = document.getElementById("lastModified");
    lastModifiedParagraph.innerHTML = "Última modificación: " + document.lastModified;
    var timestampField = document.getElementById('timestamp');


    
});




