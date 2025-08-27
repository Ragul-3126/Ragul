var typed = new Typed('.text', {
    strings: ['GOOD COMMUNICATOR', 'FRONTEND DEVELOPER', 'SOFTWARE DEVELOPER'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.querySelectorAll('.radial-bars').forEach((bar, index) => {
    const circle = bar.querySelector('.path-1');
    const percentageElem = bar.querySelector('.percentage');

    // Set target percentage
    const targetPercent = parseInt(percentageElem.textContent);

    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference;

    const offset = circumference - (targetPercent / 100) * circumference;

    setTimeout(() => {
        circle.style.strokeDashoffset = offset;
    }, 300);

    // Animate percentage number
    let count = 0;
    const interval = setInterval(() => {
        if(count < targetPercent){
            count++;
            percentageElem.textContent = count + '%';
        } else {
            clearInterval(interval);
        }
    }, 15);
});

