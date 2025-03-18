const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.cloud');

/* Função para fazer o Mario pular */
const jump = () => {
    if (!mario.classList.contains('jump')) {
        mario.classList.add('jump');

        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500); 
    }
};

/* Loop para verificar colisão */
const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft; // Posição do tubo
    const cloudPosition = cloud.offsetLeft; // Corrigido de 'loud' para 'cloud'
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); // Posição do Mario

    /* Verifica colisão do Mario com o tubo e com a nuvem */
    if (
        pipePosition <= 120 && pipePosition > 0 && 
        marioPosition < 80 && // Mario está na altura de colisão
        (pipePosition <= 120 && pipePosition > 0 || cloudPosition <= 120 && cloudPosition > 0)
    ) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        cloud.style.animation = 'none';
        cloud.style.left = `${cloudPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imagens/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop); // Para o loop quando ocorre colisão
    }
}, 10);

/* Evento para detectar a tecla pressionada */
document.addEventListener('keydown', jump);
