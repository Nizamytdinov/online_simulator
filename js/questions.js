let questions = [
    {
        question: "В чём можно входить в компьютерный класс?",
        alternate1: 'В верхней одежде',
        alternate2: 'В грязной обуви',
        alternate3: 'В школьной форме',
        alternate4: 'В головных уборах',
        true_alternate: 3
    },
    {
        question: "Как нужно заходить в компьютерный класс?",
        alternate1: 'Спросить у директора школы разрешение',
        alternate2: 'По настроению: если плохое, то спокойно, если весёлое, то вприпрыжку',
        alternate3: 'Можно хоть на ушах, если на то моя воля',
        alternate4: 'Спокойно, не вбегая и не нарушая порядка',
        true_alternate: 4
    },
    {
        question: "Когда можно входить в компьютерный кабинет?",
        alternate1: 'Когда начался урок',
        alternate2: 'Когда закончится урок',
        alternate3: 'Когда разрешит учитель',
        alternate4: 'Это школьный кабинет, в него можно заходить по мере необходимости',
        true_alternate: 3
    },
    {
        question: "Что обязательно должен сделать каждый ученик перед началом работы на рабочем месте?",
        alternate1: 'убедиться в отсутствии видимых повреждений оборудования на рабочем месте',
        alternate2: 'Сразу запустить ПК',
        alternate3: 'Достать тетрадь, ручку',
        alternate4: 'Перекусить',
        true_alternate: 1
    },
    {
        question: "Укажите, кто должен включать и выключать напряжение в сети кабинета.",
        alternate1: 'Директор школы',
        alternate2: 'Преподаватель',
        alternate3: 'Дежурный ученик',
        alternate4: 'Электрик',
        true_alternate: 2
    },
    {
        question: "Если в кабинете информатики стало недостаточное освещение, то ...",
        alternate1: 'Работать запрещается',
        alternate2: 'Лечь спать',
        alternate3: 'Работать разрешается',
        alternate4: 'Сидеть в телефоне',
        true_alternate: 1
    },
    // {
    //     question: "Куда запрещается в кабинете информатики ставить сумки и портфели?",
    //     alternate1: 'На рабочее место у компьютера!',
    //     alternate2: 'В проходы между партами!',
    //     alternate3: 'На рабочее место',
    //     alternate4: 'На рабочий стол учителя!',
    //     true_alternate: [1,2,3]
    // },
    {
        question: "Что нужно сделать, если не работает клавиатура или мышка?",
        alternate1: 'Нажимать на кнопки сильнее',
        alternate2: 'Сообщать преподавателю',
        alternate3: 'Перезагружать компьютер',
        alternate4: 'Пробовать крутить провода, вдруг заработает',
        true_alternate: 2
    },
    {
        question: "Если вы сделали задание на домашнем компьютере и сохранили его на флешку, что вы сделаете, когда придёте на урок информатики?",
        alternate1: 'Вставите флешку в школьный компьютер и скопируете задание',
        alternate2: 'Ничего не будете делать',
        alternate3: 'Отдадите флешку преподавателю и скажете, где находится задание',
        alternate4: 'Попросите одноклассника, чтобы он скопировал задание на ваш компьютер',
        true_alternate: 3
    },
    {
        question: "Вставьте пропущенные слова. Допустимое время работы за компьютером для учащихся 5–7 классов – …, потом следует сделать перерыв. Во время перерыва рекомендуется …",
        alternate1: '15-20 мин, :отдохнуть от компьютера.',
        alternate2: '20–25 мин, ;сделать упражнения для глаз.',
        alternate3: '15-20 мин, ;сделать упражнения для глаз.',
        alternate4: '20–25 мин, ;отдохнуть от компьютера.',
        true_alternate: 2
    },
    // {
    //     question: "На каких функциях нашего организма негативно сказывается длительная работа за компьютером?",
    //     alternate1: 'Зрение',
    //     alternate2: 'Нервная деятельность',
    //     alternate3: 'Костно-мышечный аппарат',
    //     alternate4: 'Обмен веществ',
    //     true_alternate: [1,2,3,4]
    // },
    {
        question: "Какие устройства ввода-вывода наносят наибольший вред здоровью пользователя?",
        alternate1: 'Монитор',
        alternate2: 'Модем',
        alternate3: 'Принтер',
        alternate4: 'Системный блок',
        true_alternate: 1
    },
    {
        question: "Источником каких излучений является компьютер?",
        alternate1: 'Электростатического поля',
        alternate2: 'Радио волн',
        alternate3: 'Химического излучений',
        alternate4: 'Термического излучений',
        true_alternate: 1
    },
    {
        question: "Где вызывает болевые ощущения интенсивная работа с клавиатурой?",
        alternate1: 'В коленной чашечке',
        alternate2: 'В грудной клетке',
        alternate3: 'В ногах',
        alternate4: 'В запястьях',
        true_alternate: 4
    },
    {
        question: "Что необходимо сделать, если компьютер самопроизвольно отключился?        ",
        alternate1: 'Сообщить директору школы',
        alternate2: 'Сорваться с места и бежать к завхозу',
        alternate3: 'Прекратить работу и сообщить преподавателю',
        alternate4: 'Включить компьютер и продолжить работу',
        true_alternate: 3
    },
    {
        question: "Что должны сделать ученики, сидящие за компьютерами, если в кабинет вошли посетители?",
        alternate1: 'Встать',
        alternate2: 'Остаться на месте',
        alternate3: 'Прекратить работу и предложить своё место',
        alternate4: 'Выключить компьютер',
        true_alternate: 2
    },
    {
        question: "Что должны взять ученики, когда идут работать за компьютером?",
        alternate1: 'Портфель',
        alternate2: 'Тетрадь, учебник, ручку',
        alternate3: 'Бутерброд',
        alternate4: 'Телефон',
        true_alternate: 2
    },
    {
        question: "Что должно обязательно находиться в кабинете информатики?        ",
        alternate1: 'Часы',
        alternate2: 'Огнетушитель',
        alternate3: 'Тач-доска',
        alternate4: 'Видеопроектор',
        true_alternate: 2
    },
    {
        question: "По какому номеру необходимо звонить в случае пожара?",
        alternate1: '102',
        alternate2: '103',
        alternate3: '911',
        alternate4: '101',
        true_alternate: 4
    },

]


let game_start = false
let question_content = document.getElementById('question_content')
let start_button = document.getElementById('start_button')
let menu = document.getElementById('menu')

let results_modal = document.getElementById('results_modal')


start_button.addEventListener('click', () => {
    if (game_start){
        game_start = false
    }
    
    else { 
        game_start = true
        question_content.style.display = "flex"
        menu.style.display = "  none"
    }
})




let ques_num = -1;
let score = 0

let getQuestion = () => {
    
    ques_num +=1

    if (ques_num == questions.length -1) {
        document.getElementById('result').innerHTML = `Ваш результат: ${score} из 16`
        results_modal.style.display = 'flex';
    }
    else {
        
    }

    question.innerHTML = questions[ques_num].question

    alt1.innerHTML = questions[ques_num].alternate1
    alt2.innerHTML = questions[ques_num].alternate2
    alt3.innerHTML = questions[ques_num].alternate3
    alt4.innerHTML = questions[ques_num].alternate4
}

alt1.addEventListener('click', () => {
    if (questions[ques_num].true_alternate == 1) {
        score += 1
        console.log(score)
        getQuestion()
    }
    else {
        getQuestion()
        
    }
})
alt2.addEventListener('click', () => {
    if (questions[ques_num].true_alternate == 2) {
        score += 1
        console.log(score)
        getQuestion()
    }
    else {
        getQuestion()
        
    }
})
alt3.addEventListener('click', () => {
    if (questions[ques_num].true_alternate == 3) {
        score += 1
        console.log(score)
        getQuestion()
    }
    else {
        getQuestion()
        

    }
})
alt4.addEventListener('click', () => {
    if (questions[ques_num].true_alternate == 4) {
        score += 1
        console.log(score)
        getQuestion()
    }
    else {
        getQuestion()

    }
})

getQuestion()
