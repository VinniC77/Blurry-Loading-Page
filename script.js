const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30); // Execute the func (1º parameter) on this time (30ms).

function blurring(){
    load++;

    if(load > 99) { // se o load estiver maior que 99
        clearInterval(int); // pare a variavel int que contém a função de contar a cada 30ms
    }

    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

// Essa função faz uma relação de range de um intervalo de números com outro.
// Uma escala de 0 a 30 relacionada com uma escala de 0 a 50, por exemplo.
// E é ela que precisamos usar para que o loading da página tenha uma relação coesa com o embaçado da imagem.
// Ou seja, conforme o loading "carrega"(de 0 a 100), menos embaçada fica a imagem de background (filter de 30 a 0).