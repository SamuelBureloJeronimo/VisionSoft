const btnMenu = document.getElementById("btnMenu");
const nav = document.getElementById("navPrincipal");
const ul = document.getElementById("");

function btnResponsive() {
    if (nav.style.display == "none" || nav.style.display == "") {
        nav.style.display = "flex";
        return;
    }
    nav.style.display = "none";
}

// Asigna la función al evento 'click' del botón
btnMenu.addEventListener("click", btnResponsive);