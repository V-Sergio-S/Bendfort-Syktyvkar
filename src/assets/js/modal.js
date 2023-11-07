import Swiper from 'swiper/bundle';


const trigger = document.querySelectorAll('[data-mod]');
const btnScroll = document.querySelectorAll('[data-scroll]');
const btnClose = document.querySelectorAll('[data-close]');
const page = document.getElementById('page');
const body = document.body;
let scrollwindow = calcScroll();

function scrollMenu (e) {

    e.preventDefault();

    let scrollId = e.currentTarget.getAttribute('data-scroll');
    let scrollItem = document.getElementById(scrollId);
    scrollItem.scrollIntoView({behavior: 'smooth'});

}

function calcScroll () {
  let div = document.createElement('div')
  div.style.width = '50px'
  div.style.height = '50px'
  div.style.overflowY = 'scroll'
  div.style.visibility = 'hidden'
  document.body.appendChild(div)
  let scrollWidth = div.offsetWidth - div.clientWidth
  div.remove()
  return scrollWidth

}

function showWindow (element) {

    let mask = document.createElement('div');
    let attrElement = element.getAttribute('id')
    mask.classList.add('page__mask');
    mask.setAttribute('data-close', attrElement)
    page.appendChild(mask)
    mask.addEventListener('click', () => {
        hiddenWindow (element)
    } );

    element.classList.add('is-active')
    body.classList.add('no-scroll')
    body.style.marginRight = `${scrollwindow}px`

}

function hiddenWindow (element) {

    document.querySelector('.page__mask').remove();
    element.classList.remove('is-active')
    body.classList.remove('no-scroll');
    body.style.marginRight = `0px`

}

trigger.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        let modalId = event.currentTarget.getAttribute('data-mod');
        let modal = document.getElementById(modalId);

        if (body.classList.contains('is-active') || body.classList.contains('no-scroll')) {

            let currentModal = event.currentTarget.closest('.closest');
            hiddenWindow(currentModal)
            showWindow (modal)
        } else {
            showWindow (modal)
        }


        if (event.currentTarget.hasAttribute('data-numb')) {

            let currentNumbElement = event.currentTarget.getAttribute('data-numb')
            let modalBox = document.getElementById(currentNumbElement);
            let getAttr = modalBox.getAttribute('id')
            const card = new Swiper('.swiper--card', {
                initialSlide: `${getAttr}`,
                speed: 1000,
                effect: "fade",
                fade: { crossFade: true },
                navigation: {
                    nextEl: ".modal__pagination-arrow-click--right",
                    prevEl: ".modal__pagination-arrow-click--left",
                    clickable: true,
                },
            });
        }

    });
});


btnClose.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.currentTarget.closest('.closest');
        hiddenWindow (currentModal)
    });
});

btnScroll.forEach (scroll => {

    scroll.addEventListener('click', event => {

        let modalId = event.currentTarget.getAttribute('data-mod');
        let modal = document.getElementById(modalId);

        if (body.classList.contains('is-active') || body.classList.contains('no-scroll')) {

            let currentModal = event.currentTarget.closest('.closest');
            hiddenWindow(currentModal)
            scrollMenu (event)
        } else {
            scrollMenu (event)
        }
    })

})
