

const startBtn = document.querySelector('#start-btn');
const pauseBtn = document.querySelector('#pause-btn');
const stopBtn = document.querySelector('#stop-btn');


const animationDivOne = anime({

    autoplay: false,
    targets: '#divOne',
    translateY: '-5rem',
    easing: 'linear',
    duration: 3000,
})

const animationDivTwo = anime({

    autoplay: false,
    targets: '#divTwo',
    translateY: '5rem',
    translateX: '-5rem',
    easing: 'linear',
    duration: 3000,
})

const animationDivThree = anime({

    autoplay: false,
    targets: '#divThree',
    scale: 4,
    easing: 'linear',
    delay: 2000,
    duration: 3000
})

const animationDivCenter = anime({

    autoplay: false,
    targets: '#divCenter',
    keyframes: [
        {backgroundColor: 'hsl(0, 0%, 0%)'},
        {scale: 0.5}
    ],
    easing: 'linear',
    delay: 2000,
    duration: 3000
})

const animationDivFour = anime({

    autoplay: false,
    targets: '#divFour',
    translateY: '5rem',
    translateX: '5rem',
    easing: 'linear',
    duration: 3000,
})

const animationDivFive = anime({

    autoplay: false,
    targets: '#divFive',
    translateY: '-5rem',
    easing: 'linear',
    duration: 3000,
})

const animationDivTop = anime({

    autoplay: false,
    targets: '#divTop',
    keyframes:
    [
        {translateY: '-5rem', translateX: '10rem', duration: 3000},
        {rotate: '45deg', delay: 2000}
    ],
    easing: 'linear',
})

const animationDivBottom = anime({

    autoplay: false,
    targets: '#divBottom',
    keyframes:
    [
        {translateY: '5rem', translateX: '-10rem', duration: 3000},
        {rotate: '45deg', delay: 2000},
    ],
    easing: 'linear',
})

const animationCubes = anime({

    autoplay: false,
    targets: '.cubes',
    borderRadius: '0',
    easing: 'linear',
    delay: 4000,
})



startBtn.addEventListener('click', (event) => {
    event.preventDefault();

    animationDivOne.play();
    animationDivTwo.play();
    animationDivThree.play();
    animationDivFour.play();
    animationDivFive.play();

    animationDivCenter.play();
    animationDivTop.play();
    animationDivBottom.play();

    animationCubes.play();

});

pauseBtn.addEventListener('click', (event) => {
    event.preventDefault();

    animationDivOne.pause();
    animationDivTwo.pause();
    animationDivThree.pause();
    animationDivFour.pause();
    animationDivFive.pause();

    animationDivCenter.pause();
    animationDivTop.pause();
    animationDivBottom.pause();

    animationCubes.pause();

});

stopBtn.addEventListener('click', (event) => {
    event.preventDefault();

    animationDivOne.restart();
    animationDivOne.pause();
    animationDivTwo.restart();
    animationDivTwo.pause();
    animationDivThree.restart();
    animationDivThree.pause();
    animationDivFour.restart();
    animationDivFour.pause();
    animationDivFive.restart();
    animationDivFive.pause();

    animationDivCenter.restart();
    animationDivCenter.pause();
    animationDivTop.restart();
    animationDivTop.pause();
    animationDivBottom.restart();
    animationDivBottom.pause();

    animationCubes.restart();
    animationCubes.pause();
});

