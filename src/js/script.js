const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

//parse 15.07.2024
window.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    let textNodes = [];

    function recursy (element) {
        element.childNodes.forEach(node => {
            if (node.nodeName.match(/^H\d/)) {
                const obj = {
                    header: node.nodeName,
                    content: node.textContent
                };
                textNodes.push(obj);
            } else {
                recursy(node);
            }
        });
    }

    recursy(body);
   
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(textNodes)
    })
    .then(response => response.json())
    .then(json => console.log(json));
   
})