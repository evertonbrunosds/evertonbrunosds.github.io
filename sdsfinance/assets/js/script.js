let MIN_SCROLL_DISTANCE = 150;
let MAX_SCROLL_DISTANCE = 400;
const MIN_VIEW_WIDTH = 960;

const adaptarATela = () => {
	let viewWidth = document.body.clientWidth;

    if (viewWidth <= MIN_VIEW_WIDTH) {
        MIN_SCROLL_DISTANCE = 300;
        MAX_SCROLL_DISTANCE = 600;
    }
};

adaptarATela();

window.onresize = event => {
    adaptarATela();
};

document.addEventListener('scroll', event => {
    let scrollY = window.scrollY;
    const cabecalho = document.getElementById('cabecalho');
    const showcase = document.getElementById('showcase-container');

    //Altera opacidade do showcase

    let showCaseOpacity = Math.max(0, (((scrollY - MIN_SCROLL_DISTANCE) - MAX_SCROLL_DISTANCE) / (0 - 1)) / MAX_SCROLL_DISTANCE);
    showcase.style.opacity = showCaseOpacity;

    if (showCaseOpacity === 0) {
        showcase.style.visibility = 'hidden';
    } else {
        showcase.style.visibility = 'visible';
    }

    //Altera tema do cabecalho

    if (scrollY >= MAX_SCROLL_DISTANCE) {
        cabecalho.classList.remove('cabecalho-transparent');
        cabecalho.classList.add('cabecalho-light');
    } else {
        cabecalho.classList.remove('cabecalho-light');
        cabecalho.classList.add('cabecalho-transparent');
    }
});

const btnDownload = document.getElementById('btn-download');
const modal = document.getElementById(btnDownload.getAttribute('data-target').substring(1));
const btnFechar = document.getElementsByClassName('modal-btn-fechar');

//Mostrar modal

btnDownload.addEventListener('click', e => {
    modal.style.display = 'flex';
    e.preventDefault();
});

//Esconder modal

for (let i = 0; i < btnFechar.length; i++) {
    btnFechar[i].addEventListener('click', e => {
        let alvo  = document.getElementById(btnFechar[i].getAttribute('data-target').substring(1));
        alvo.style.display = 'none';

        e.preventDefault();
    });
}

/* Configuração do slick */

$(document).ready(() => {
    $('.carousel').slick({
        autoplaySpeed: 3000,
        autoplay: true,
        rt1: true,
        arrows: true,
        dots: true
    });
});
