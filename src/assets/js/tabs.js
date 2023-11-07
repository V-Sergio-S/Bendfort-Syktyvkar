(function () {

    const tabsButton = document.querySelectorAll('[data-tabs]')

    tabsButton.forEach(button => {

        button.onclick = function (e) {
            e.stopPropagation()

            let buttonCurrent = e.currentTarget
            let currentIdElement = buttonCurrent.getAttribute('data-tabs')
            let tabsInfo = document.getElementById(currentIdElement)
            tabsInfo.classList.toggle('always-question__info--block')
            buttonCurrent.firstElementChild.classList.toggle('title--always-question--active')
            buttonCurrent.firstElementChild.nextElementSibling.firstElementChild.classList.toggle('always-question__button--active')

        }

    })
})();