
/* =====================================
   PROTECH_SR - ANIMACIONES Y SCROLL
===================================== */

// 1. MOSTRAR MENU AL DESPLAZARSE

const header = document.getElementById("header");

function controlarMenu() {

    if (window.scrollY > 100) {
        header.classList.add("menu-visible");
    } else {
        header.classList.remove("menu-visible");
    }

}

window.addEventListener("scroll", controlarMenu, {
    passive: true
});

controlarMenu();


// 2. ANIMACIONES DE ELEMENTOS AL APARECER

const elementosAnimados = document.querySelectorAll(
    ".hero-content, .servicios, .servicio-card, .nosotros, .contacto"
);

const observador = new IntersectionObserver(
    (elementos) => {

        elementos.forEach((elemento) => {

            if (elemento.isIntersecting) {

                elemento.target.classList.add("reveal", "visible");

                observador.unobserve(elemento.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);

elementosAnimados.forEach((elemento) => {
    observador.observe(elemento);
});
