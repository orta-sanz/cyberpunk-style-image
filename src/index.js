require('./style.styl');

const cyberImage = (element, imageUrl) => {
    element.style.backgroundImage = `url(${imageUrl})`;

    for (let i = 0; i <= 4; i++) {
        let span = document.createElement('span');
        element.appendChild(span);
    };

    element.classList.add('future-image-cover');
};

export default cyberImage;
