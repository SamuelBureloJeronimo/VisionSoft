const btnMenu = document.getElementById("btnMenu");
const nav = document.getElementById("navPrincipal");


btnMenu.addEventListener("click", btnResponsive);

function btnResponsive() {
    if (nav.style.display == "none" || nav.style.display == "") {
        nav.style.display = "flex";
        return;
    }
    nav.style.display = "none";
}


/* CONTROL DE IDIOMAS */
let idiomaSelected = "Español";

// NAV
const HOME = document.getElementById("HOME");
const PORTFOLIO = document.getElementById("PORTFOLIO");
const GALLERY = document.getElementById("GALLERY");
const ABOUT_US = document.getElementById("ABOUT_US");
const CONTACT_US = document.getElementById("CONTACT_US");

// Who are the VISIONSOFT team?
const WhoAreTeam = document.getElementById("WhoAreTeam");
const servicesH3 = document.getElementById("servicesH3");
const skillsH3 = document.getElementById("skillsH3");
const ourHistoryH3 = document.getElementById("ourHistoryH3");

const btnLeng = document.getElementById("btnLeng");
clickLenguaje("Español");

function clickLenguaje(element) {
    idiomaSelected = element;
    btnLeng.textContent = idiomaSelected;

    if (idiomaSelected == "Español") {
        HOME.textContent = "INICIO";
        PORTFOLIO.textContent = "PORTAFOLIO";
        GALLERY.textContent = "GALERIA";
        ABOUT_US.textContent = "SOBRE NOSOTROS";
        CONTACT_US.textContent = "CONTACTANOS";

        WhoAreTeam.textContent = "¿Quiénes forman el equipo de VisionSoft?";
        servicesH3.textContent = "Servicios";
        skillsH3.textContent = "Nuestras habilidades";
        ourHistoryH3.textContent = "Nuestra historia";
        return;
    }
    if (idiomaSelected == "Ingles") {
        HOME.textContent = "HOME";
        PORTFOLIO.textContent = "PORTFOLIO";
        GALLERY.textContent = "GALLERY";
        ABOUT_US.textContent = "ABOUT US";
        CONTACT_US.textContent = "CONTACT US";

        WhoAreTeam.textContent = "Who are the VisionSoft team?";
        servicesH3.textContent = "Services";
        skillsH3.textContent = "Ours Skills";
        ourHistoryH3.textContent = "Our History";
        return;
    }
}