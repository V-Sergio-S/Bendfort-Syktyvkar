(function () {

    const forms = document.querySelectorAll('[data-form]')

    let body = document.body,
    thanks = document.getElementById('popup'),
    popupTittle = document.querySelector('[data-title]'),
    popupText = document.querySelector('[data-text]'),
    popupPhone = document.querySelector('[data-tell-phone]');


    if (forms.length === 0) {
        return
    }

    function addClass (item) {

        item.classList.add('form__input--error')
    }

    function removeClass (item) {
        item.classList.remove('form__input--error')
    }

    function checkPhone (phoneItem) {

        let eventPhoneInput = function (e) {
            let target = e.target,
                clearVal = target.dataset.phoneClear,
                pattern = target.dataset.phonePattern,
                matrix_def = "+7 ___-___-__-__",
                matrix = pattern ? pattern : matrix_def,
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = e.target.value.replace(/\D/g, "");
            if (clearVal !== 'false' && e.type === 'blur') {
                if (val.length < matrix.match(/([_\d])/g).length) {
                    e.target.value = '';
                    return;
                }
            }
            if (def.length >= val.length) val = def;
            e.target.value = matrix.replace(/./g, function (a) {
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
            });
        }

        phoneItem.addEventListener('input', eventPhoneInput, (e) => {
            e.target.value = e.target.value.replace(/^[A-ZА-ЯЁ]+$/i, '')

        })
    }

    function checkFullName (nameItem) {

        nameItem.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[0-9.,=+:;?!_/]/g, '')

        })
    }

    function checkEmail (emailItem) {

        const emailRegexp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu

        function isEmailValid(value) {
            return emailRegexp.test(value)
        }

        function onInput() {
            if (isEmailValid(emailItem.value)) {
                removeClass(emailItem)
            } else {
                addClass(emailItem)
            }
        }

        emailItem.addEventListener('input', onInput)
    }


    for (let i = 0; i < forms.length; i += 1) {

        let serialize = function(form) {
            let items = form.querySelectorAll('input, select, textarea');
            let str = '';
            for (let i = 0; i < items.length; i += 1) {
                let item = items[i];
                let name = item.name;
                let value = item.value;
                let separator = i === 0 ? '' : '&';

                if (value) {
                    str += separator + name + '=' + value;
                }
            }
            return str;
        }
        let formSend = function(form) {
            let data = serialize(form);
            let xhr = new XMLHttpRequest();
            let url = 'mail/mail.php';

            xhr.open('POST', url);
            xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');

            xhr.onload = function() {

                   function close () {
                       thanks.classList.remove('popup--show')
                       mask.removeChild(thanks)
                       document.querySelector('.page__mask').remove();
                       body.classList.remove('no-scroll');
                   }

                if (xhr.response === 'success') {
                    mask = document.createElement('div')
                    mask.className = 'page__mask'
                    mask.appendChild(thanks)

                    thanks.classList.add('popup--show')
                    page.appendChild(mask);
                    body.classList.add('no-scroll');

                } else {
                    mask = document.createElement('div')
                    mask.className = 'page__mask'
                    mask.appendChild(thanks)

                    thanks.classList.add('popup--show')
                    popupTittle.innerText = 'что-то пошло не так!!!'
                    popupText.innerText = 'Попробуйте еще раз'
                    popupPhone.innerText = ''
                    page.appendChild(mask);
                    body.classList.add('no-scroll');
                }

                mask.addEventListener('click', close);

                form.reset();
            };

            xhr.send(data);
        }

        forms[i].addEventListener('input', function (e) {

            let form = e.currentTarget
            let fullName = form.elements.Имя,
                phone = form.elements.Телефон,
                email = form.elements.Email

            checkFullName (fullName)
            checkPhone (phone)
                try {
                    checkEmail (email)
                } catch{}
        })


        forms[i].addEventListener('submit', function(e) {
            e.preventDefault()
            let hasError = false
            let form = e.currentTarget

            let fullName = form.elements.Имя,
                phone = form.elements.Телефон,
                email = form.elements.Email


            if (!fullName.value  || fullName.value.length < 3) {
                hasError = true
                addClass(fullName)
            } else {
                removeClass(fullName)
            }

            try {
                if (!email.value) {
                    hasError = true
                    addClass(email)
                } else {
                    removeClass(email)
                }
            } catch{}

            if (!phone.value || phone.value.length === 11) {
                hasError = true
                addClass(phone)
            } else {
                removeClass(phone)
            }

            if (!hasError) {
                formSend(form)
            }

        })
    }


})();