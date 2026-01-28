const btnMenu = document.getElementById('menu');
const menuLateral = document.getElementById('menu-lateral');
const menuFechar = document.getElementById('menu-fechar');
const menuOverlay = document.getElementById('menu-overlay');
const linksMenu = document.querySelectorAll('#menu-lateral a');

// abrir menu
btnMenu.addEventListener('click', () => {
    menuLateral.classList.add('ativo');
    menuOverlay.classList.add('ativo');
});

// fechar menu
menuFechar.addEventListener('click', fecharMenu);
menuOverlay.addEventListener('click', fecharMenu);

// FECHAR AO CLICAR EM QUALQUER LINK
linksMenu.forEach(link => {
    link.addEventListener('click', () => {
        fecharMenu();
    });
});

function fecharMenu(){
    menuLateral.classList.remove('ativo');
    menuOverlay.classList.remove('ativo');
}
