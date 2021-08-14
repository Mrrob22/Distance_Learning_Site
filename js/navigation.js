let navigationButtonsPattern = [
    {
        id: 'main_button',
        routerArg: 'index',
        buttonName: 'Головна'
    },
    {
        id: 'main_info_button',
        routerArg: 'teachers',
        buttonName: 'Наші викладачі'
    },
    {
        id: 'lectures',
        routerArg: 'lectures',
        buttonName: 'Лекції'
    },
    {
        id: 'PZ',
        routerArg: 'pz',
        buttonName: 'Практичні заняття'
    },
    {
        id: 'tests',
        routerArg: 'tests',
        buttonName: 'Тести'
    },
    {
        id: 'second_info_button',
        routerArg: 'info',
        buttonName: 'Корисні матеріали'
    },
    {
        id: 'student',
        routerArg: 'student',
        buttonName: 'Вхід'
    },
    {
        id: 'contacts',
        routerArg: 'contacts',
        buttonName: 'Контакти'
    },
]

let currentPath = window.location.pathname.split('/').reverse()[0].split('.')[0]
let navigation = document.getElementById('navigation')
let navigationListDiv = document.createElement('div')
navigationListDiv.classList.add('navigation_list')
navigationButtonsPattern.forEach(buttonPattern => {
    let button = document.createElement('div')
    button.classList.add('nav_button')
    currentPath === buttonPattern.routerArg
        ? button.classList.add('clicked')
        : button.classList.remove('clicked')
    button.innerText = buttonPattern.buttonName
    let router = () => {
        window.location.href = `./${buttonPattern.routerArg}.html`
    }

    button.onclick = router
    navigationListDiv.appendChild(button)
})
navigation.appendChild(navigationListDiv)