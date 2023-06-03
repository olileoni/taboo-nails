// burger


const header = document.querySelector('.header')
const menu = document.querySelector('.header__nav')
const burgerIcon = document.querySelector('.header__burger')

    
burgerIcon.addEventListener('click', () => {
        header.classList.toggle('open')
    })

menu.addEventListener('click', e => {
        if (e.target.classList.contains('header__nav')) {
            header.classList.remove('open')
        }
    })


 // map
 
 let center = [7.767106341516096,98.31170571163928];

    function init() {
        let map = new ymaps.Map('footer__map', {
            center: center,
            zoom: 16,
        });
    
    
        map.controls.remove('searchControl');
        map.controls.remove('zoomControl');
        map.controls.remove('rulerControl');
        map.controls.remove('trafficControl');
    }
    
    ymaps.ready(init);
