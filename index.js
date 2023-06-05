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

  menu.querySelectorAll('.header__link') .forEach(link => {
    link.addEventListener('click', () => {
        header.classList.remove('open')
    })
  })



 // map
 
 let center = [7.823194313194592,98.3327561835777];

    function init() {
        let map = new ymaps.Map('footer__map', {
            center: center,
            zoom: 16,
        });

        let placemark = new ymaps.Placemark(center, {}, {

        })
    
    
        map.controls.remove('searchControl');
        map.controls.remove('zoomControl');
        map.controls.remove('rulerControl');
        map.controls.remove('trafficControl');

        map.geoObjects.add(placemark);
    }
    
    ymaps.ready(init);
