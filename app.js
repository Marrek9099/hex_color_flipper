const colorValues = '123456789ABCDEF';

const button = document.querySelector('.button');

const span = document.querySelector('span');

const content = document.querySelector('.content');

button.addEventListener( 'click', () => {
    let newColor = '#'

    for(let i = 0; i < 6; i++){
        const colorInd = Math.floor(Math.random() * 15);
        newColor += colorValues[colorInd];
    }

    span.innerText = newColor;
    content.style.backgroundColor = newColor;

});







