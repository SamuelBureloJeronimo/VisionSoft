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
const p1_OurHistory = document.getElementById("p1_OurHistory");

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
        p1_OurHistory.textContent = 'Todo comenzó con una simple idea "trabajar en lo que nos gusta" la mayoría de los miembros experimentamos lo que es el sacrificio de trabajar en algo totalmente diferente al área de tecnología, y terminar desesperados en un lugar donde no se valora nuestro esfuerzo ni las horas y horas de esfuerzo.' +
            "\n\nCon esto en mente, decidimos montar un negocio para que en el futuro pudiéramos trabajar en lo que nos gusta y ganarnos la vida dignamente.";
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
        p1_OurHistory.textContent = 'It all started with a simple idea "to work in what we like" most of the members experienced what is the sacrifice of working in something totally different from the technology area, and end up in despair in a place where our effort is not valued nor the hours and hours of effort.' +
            "\n\nWith this in mind, we decided to start a business so that in the future we could work in what\n we like and earn a decent living.";
        return;
    }
}