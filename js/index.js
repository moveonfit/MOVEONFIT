const btnMenu = document.getElementById('menu');
const menuLateral = document.getElementById('menu-lateral');
const menuFechar = document.getElementById('menu-fechar');
const menuOverlay = document.getElementById('menu-overlay');

const btnProdutos = document.getElementById("btn-produtos");
const submenu = document.querySelector(".submenu-produtos");

// ABRIR MENU
btnMenu.addEventListener('click', () => {
    menuLateral.classList.add('ativo');
    menuOverlay.classList.add('ativo');
});

// FECHAR MENU
menuFechar.addEventListener('click', fecharMenu);
menuOverlay.addEventListener('click', fecharMenu);

// FECHAR AO CLICAR NOS LINKS (MENOS PRODUTOS)
const linksMenu = document.querySelectorAll(
    '#menu-lateral a:not(#btn-produtos)'
);

linksMenu.forEach(link => {
    link.addEventListener('click', () => {
        fecharMenu();
    });
});

function fecharMenu() {
    menuLateral.classList.remove('ativo');
    menuOverlay.classList.remove('ativo');
    submenu.style.display = "none"; // fecha submenu também
}

// ABRIR / FECHAR SUBMENU
btnProdutos.addEventListener("click", (e) => {
    e.preventDefault();
    submenu.style.display =
        submenu.style.display === "block" ? "none" : "block";
});


const filtrosMenu = document.querySelectorAll(".submenu-produtos a");
const cards = document.querySelectorAll(".card");

filtrosMenu.forEach(filtro => {
    filtro.addEventListener("click", (e) => {
        e.preventDefault();

        const categoria = filtro.dataset.filtro;

        cards.forEach(card => {
            if (categoria === "todos") {
                card.style.display = "block";
            } else if (card.dataset.categoria === categoria) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

        // fecha menu depois de filtrar (opcional, mas profissional)
        fecharMenu();
    });
});
