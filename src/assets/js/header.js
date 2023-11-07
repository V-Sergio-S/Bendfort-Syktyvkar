(function () {

    window.addEventListener('scroll', function() {
        const header = document.getElementById('header')
        const headerScroll = document.getElementById('header-scroll')

        if (pageYOffset > 850) {
            header.classList.add('header__container--transform')
            headerScroll.classList.add('header__container-scroll--transform')

        } else {
            header.classList.remove('header__container--transform')
            headerScroll.classList.remove('header__container-scroll--transform')
        }
    })
})();