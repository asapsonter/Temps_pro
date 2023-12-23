const items = document.querySelector('.button');
button.animate([
    { transform: 'translateX(0px)' },
    { transform: 'translateX(20px)' }
    ], {
    duration: 2000,
    easing: 'ease-in-out',
    direction: 'alternate',
    iterations: Infinity
    });
