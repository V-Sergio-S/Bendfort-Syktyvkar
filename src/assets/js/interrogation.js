(function () {

    const test = {
        interrogation: null,
        testOfQuestions: null,
        questionId: null,
        currentBoxQuestion: null,
        formQuiz: null,
        fields: [
            {
                id: 'one',
                question: 'Какой язык Вы рассматриваете для изучения?',
                interrogationAnswer: [
                    {
                        id: '1',
                        answer: 'Английский'
                    },
                    {
                        id: '2',
                        answer: 'Немецкий'
                    },
                    {
                        id: '3',
                        answer: 'Французский'
                    },
                    {
                        id: '4',
                        answer: 'Итальянский'
                    },
                    {
                        id: '5',
                        answer: 'Японский'
                    },
                    {
                        id: '6',
                        answer: 'Китайский'
                    },
                    {
                        id: '7',
                        answer: 'Корейский'
                    },
                    {
                        id: '8',
                        answer: 'Греческий'
                    },
                ]
            },
            {
                id: 'two',
                question: 'Для кого рассматриваете возможность обучения?',
                interrogationAnswer: [
                    {
                        id: '9',
                        answer: 'Для себя'
                    },
                    {
                        id: '10',
                        answer: 'Для ребенка'
                    },
                ]
            },
            {
                id: 'three',
                question: 'Был ли у Вас опыт изучения желаемого языка?',
                interrogationAnswer: [
                    {
                        id: '11',
                        answer: 'Да, занимаюсь им уже продолжительное время'
                    },
                    {
                        id: '12',
                        answer: 'Да, ходил в языковую школу, помню базу'
                    },
                    {
                        id: '13',
                        answer: 'Да, но только в школе, мало что помню'
                    },
                    {
                        id: '14',
                        answer: 'Да, но совсем ничего не помню'
                    },
                    {
                        id: '15',
                        answer: 'Нет, не было'
                    },
                    {
                        id: '16',
                        answer: 'Другое'
                    },
                ]
            },
            {
                id: 'four',
                question: 'Для чего вы хотели бы изучать иностранный язык?',
                interrogationAnswer: [
                    {
                        id: '21',
                        answer: 'Нет определенной цели, для саморазвития'
                    },
                    {
                        id: '22',
                        answer: 'Для путешествий'
                    },
                    {
                        id: '23',
                        answer: 'Для переезда в другую страну'
                    },
                    {
                        id: '24',
                        answer: 'Для работы'
                    },
                    {
                        id: '25',
                        answer: 'Другое'
                    },
                ]
            },
            {
                id: 'five',
                question: 'Был ли опыт изучения языка у Вашего ребенка?',
                interrogationAnswer: [
                    {
                        id: '17',
                        answer: 'Да, занимались в школе и на курсах есть база'
                    },
                    {
                        id: '18',
                        answer: 'Да, учили только в школе, но требуется помощь'
                    },
                    {
                        id: '19',
                        answer: 'Нет, не было'
                    },
                    {
                        id: '20',
                        answer: 'Другое'
                    },
                ]
            },
            {
                id: 'six',
                question: 'Для чего Вы хотели бы чтобы Ваш ребенок изучал иностранный язык?',
                interrogationAnswer: [
                    {
                        id: '26',
                        answer: 'Заложить хорошую языковую базу для будущего'
                    },
                    {
                        id: '27',
                        answer: 'Улучшить школьную успеваемость'
                    },
                    {
                        id: '28',
                        answer: 'Подготовить ребенка к занятиям в школе'
                    },
                    {
                        id: '29',
                        answer: 'Другое'
                    },
                ]
            },
            {
                id: 'seven',
                question: 'Для чего Вы хотели бы чтобы Ваш ребенок изучал иностранный язык?',
                interrogationAnswer: [
                    {
                        id: '30',
                        answer: 'Заложить хорошую языковую базу для будущего'
                    },
                    {
                        id: '31',
                        answer: 'Улучшить школьную успеваемость'
                    },
                    {
                        id: '32',
                        answer: 'Подготовить ребенка к занятиям в школе'
                    },
                    {
                        id: '33',
                        answer: 'Другое'
                    },
                ]
            },

        ],
        init() {
            const that = this;
            this.fields.forEach(fieldsElement => {

                this.createQuiz.call(that, fieldsElement, this)

                let interrogationFirstElement = document.getElementById('one')
                interrogationFirstElement.classList.add('form__choice--quiz')

                this.changeInterrogation.call(that, fieldsElement, this)

            })
        },
        createQuiz(field, element) {

            this.interrogation = document.getElementById('questions-interrogation')

            this.questionId = field.id;

            this.testOfQuestions = document.createElement('div');
            this.testOfQuestions.className = 'form__choice';
            this.testOfQuestions.setAttribute('id', this.questionId);

            const testOfInfoQuestions = document.createElement('div');
            testOfInfoQuestions.className = 'form__info';
            const testOfTitleQuestions = document.createElement('p');
            testOfTitleQuestions.className = 'title  title--interrogation';
            testOfTitleQuestions.textContent = field.question;

            testOfInfoQuestions.appendChild(testOfTitleQuestions);
            this.testOfQuestions.appendChild(testOfInfoQuestions);

            field.interrogationAnswer.forEach(answerCurrent => {

                const testWrapQuestions = document.createElement('div');
                testWrapQuestions.className = 'form__wrap-choice';

                const inputTestRadioQuestion = document.createElement('input');
                inputTestRadioQuestion.setAttribute('id', answerCurrent.id);
                inputTestRadioQuestion.setAttribute('type', 'radio');
                inputTestRadioQuestion.setAttribute('name', field.question);
                inputTestRadioQuestion.setAttribute('value', answerCurrent.answer);
                inputTestRadioQuestion.className = 'form__input-interrogation';

                const labelTestLabelQuestion = document.createElement('label');
                labelTestLabelQuestion.setAttribute('for', answerCurrent.id);
                labelTestLabelQuestion.className = 'form__label-interrogation';
                labelTestLabelQuestion.innerText = answerCurrent.answer;

                testWrapQuestions.appendChild(inputTestRadioQuestion);
                testWrapQuestions.appendChild(inputTestRadioQuestion);
                testWrapQuestions.appendChild(labelTestLabelQuestion);

                this.testOfQuestions.appendChild(testWrapQuestions);
                element.interrogation.appendChild(this.testOfQuestions);
            })
        },
        changeInterrogation(field) {
            let interrogationOneElement = document.querySelectorAll('#' + this.questionId)

            let interrogationFinishElement = document.getElementById('finish')
            let interrogationFormQuizElement = document.getElementById('form-quiz')

            for (let currentElementQuiz of interrogationOneElement) {

                currentElementQuiz.addEventListener('change', event => {
                    let eventClick = event.currentTarget
                    let targetElement = event.target
                    let targetElementAttribute = targetElement.getAttribute('id')
                    let $elementThat = eventClick.nextElementSibling
                    let interrogationQuizInputTarget = document.getElementById(targetElementAttribute)

                    if (field.id === this.testOfQuestions.id || field.id === 'one') {
                        this.hiddenInterrogation.call(this, eventClick)
                        this.showInterrogation.call(this, $elementThat)
                        interrogationFormQuizElement.appendChild(interrogationQuizInputTarget)
                    }

                    if (field.id === this.testOfQuestions.id || field.id === 'two' && interrogationQuizInputTarget.checked === true && targetElementAttribute === field.interrogationAnswer[0].id) {
                        this.hiddenInterrogation.call(this, eventClick)
                        this.showInterrogation.call(this, $elementThat)
                        interrogationFormQuizElement.appendChild(interrogationQuizInputTarget)
                    }

                    if (field.id === this.testOfQuestions.id || field.id === 'two' && interrogationQuizInputTarget.checked === true && targetElementAttribute === field.interrogationAnswer[1].id) {
                        this.hiddenInterrogation.call(this, eventClick)
                        this.showInterrogation.call(this, $elementThat.nextElementSibling.nextElementSibling)
                        interrogationFormQuizElement.appendChild(interrogationQuizInputTarget)
                    }

                    if (field.id === this.testOfQuestions.id || field.id === 'three' && interrogationQuizInputTarget.checked === true) {
                        this.hiddenInterrogation.call(this, eventClick)
                        this.showInterrogation.call(this, $elementThat)
                        interrogationFormQuizElement.appendChild(interrogationQuizInputTarget)
                    }

                    if (field.id === this.testOfQuestions.id || field.id === 'four' && interrogationQuizInputTarget.checked === true) {
                        this.hiddenInterrogation.call(this, eventClick)
                        interrogationFinishElement.classList.add('form__choice--quiz')
                        interrogationFormQuizElement.appendChild(interrogationQuizInputTarget)
                    }

                    if (field.id === this.testOfQuestions.id || field.id === 'five' && interrogationQuizInputTarget.checked === true) {
                        this.hiddenInterrogation.call(this, eventClick)
                        this.showInterrogation.call(this, $elementThat)
                        interrogationFormQuizElement.appendChild(interrogationQuizInputTarget)
                    }

                    if (field.id === this.testOfQuestions.id || field.id === 'six' && interrogationQuizInputTarget.checked === true) {
                        this.hiddenInterrogation.call(this, eventClick)
                        interrogationFinishElement.classList.add('form__choice--quiz')
                        interrogationFormQuizElement.appendChild(interrogationQuizInputTarget)
                    }
                })
            }

        },
        showInterrogation(currentQuestion) {
            this.currentBoxQuestion = document.getElementById(currentQuestion.id)
            this.currentBoxQuestion.classList.add('form__choice--quiz')
        },
        hiddenInterrogation(currentQuestion) {
            this.currentBoxQuestion = document.getElementById(currentQuestion.id)
            this.currentBoxQuestion.classList.remove('form__choice--quiz')
        },
    }
    test.init();
})()