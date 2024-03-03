document.addEventListener("DOMContentLoaded", function () {
    let currentYear = new Date().getFullYear();
    let firstParagraph = document.getElementById("footerFirstParagraph");

    let decoratedName = "🌟 Carol Nacher 🌟";
    let uruguayFlag = "WDD230 - Uruguay";
    let uruguayFlagImage = `<img src="images/flag.webp" alt="Flag of Uruguay" width="200" height="200" style="vertical-align: middle;">`;

    firstParagraph.innerHTML = `&copy; ${currentYear} ${decoratedName} -  ${uruguayFlag} ${uruguayFlagImage}`;

    let lastModifiedParagraph = document.getElementById("lastModified");
    lastModifiedParagraph.innerHTML = "Última modificación: " + document.lastModified;
    var timestampField = document.getElementById('timestamp');
    timestampField.value = Date.now();

     
});




