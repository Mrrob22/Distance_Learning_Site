let autorizationButton = () => {
    let form = document.forms.login_form;
    let pass = form.elements.pass.value;
    let email = form.elements.email.value;

    let user = users.find(user => user.email === email);
    if (user && user.password === pass){
        globalUser = {...user}
        localStorage.setItem("user", JSON.stringify(user))
    } else {
        localStorage.removeItem("user")
    }
};
let sendEmailFormWithNumber = [];
for (let i = 1; i <= 35; i++){sendEmailFormWithNumber.push(document.forms[`send_email_form_${i}`])
}
let user = JSON.parse(localStorage.getItem('user'));
sendEmailFormWithNumber.length && sendEmailFormWithNumber.forEach(form=>{
        if (form !== undefined && !!(+user.roleId !== 2) && !!user){
            form.email.value = user.email;
        }
})
let sendEmailFormButtons = document.getElementsByClassName('send_email_form')
let copySendEmailFormButtons = [...sendEmailFormButtons]

if (user && +user.roleId === 2 && copySendEmailFormButtons.length) {
    copySendEmailFormButtons.forEach(button => {
        button.style.display = 'initial'
    })
}

const users = [
    {
        id: 1,
        firstName: 'Lector',
        surName: '',
        birthday: '',
        email: 'group37bsgt@gmail.com',
        roleId: 2,
        password: 'qwerty',
    },
    {
        id: 2,
        firstName: 'Evgenya',
        surName: 'Kiriyak',
        birthday: '',
        email: 'khpi.sgt@gmail.com',
        roleId: 3,
        password: '123456',
    }
]
const roles = [
    {
        id: 1,
        name: 'admin',
    },
    {
      id: 3,
      name: 'student',
    },
    {
        id: 2,
        name: 'teacher',
    }
]

let globalUser = null;