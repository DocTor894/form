let title = document.querySelectorAll('[data-title]');
let inputs = document.querySelectorAll('[data-rule]');
let status = document.querySelectorAll('[data-status]');
let name;
let phone;
let mail;
let massege;

function openModal() {
    document.querySelector('.form').style.display = 'flex';
};

function closeModal() {
    document.querySelector('.form').style.display = 'none';
}

document.querySelector('[data-rule="phone"]').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    e.target.value = (x[1] === '7' ? '+' + x[1] : x[1]) + (!x[3] ? x[2] : '(' + x[2] + ') ') + x[3] + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
});

for (let input of inputs) {
    input.addEventListener('blur', () => {
        let rule = input.dataset.rule;
        let value = input.value;
        
        switch (rule) {
            case 'name':
                if(value) {
                    name = value;
                    input.style.borderColor = '#58c52e';
                    status[0].innerHTML = null;
                    title[0].style.color = '#A5A5A5';
                } else {
                    name = null;
                    input.style.borderColor = '#F36363';
                    status[0].innerHTML = 'Введите имя';
                    title[0].style.color = '#F36363';
                }
                break;
            case 'phone':
                if ((value[0] === '+' && value.length === 17) || (value[0] === '8' && value.length === 16) ) {
                    phone = value;
                } else {
                    phone = null;
                };
                if (!phone && !mail) {
                    input.style.borderColor = '#F36363';
                    status[1].innerHTML = 'Проверьте введённый номер';
                    title[1].style.color = '#F36363';
                } else if (!phone && mail) {
                    input.style.borderColor = '#A5A5A5';
                    status[1].innerHTML = null;
                    title[1].style.color = '#A5A5A5';
                } else if (phone) {
                    input.style.borderColor = '#58c52e';
                    status[1].innerHTML = null;
                    title[1].style.color = '#A5A5A5';
                };
                break; 
            case 'mail':
                if (/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value) ) {
                    mail = value;
                } else {
                    mail = null;
                };
                if (!mail && !phone) {
                    input.style.borderColor = '#F36363';
                    status[2].innerHTML = 'Проверьте введённый email';
                    title[2].style.color = '#F36363';
                } else if (!value && phone) {
                    input.style.borderColor = '#A5A5A5';
                    status[2].innerHTML = null;
                    title[2].style.color = '#A5A5A5';
                } else if (mail) {
                    input.style.borderColor = '#58c52e';
                    status[2].innerHTML = null;
                    title[2].style.color = '#A5A5A5';
                };
                break;
            case 'message':
                if(value) {
                    message = value;
                    input.style.borderColor = '#58c52e';
                    status[3].innerHTML = null;
                    title[3].style.color = '#A5A5A5';
                } else {
                    message = null;
                    input.style.borderColor = '#F36363';
                    status[3].innerHTML = 'Введите сообщение';
                    title[3].style.color = '#F36363';
                }
                break;
            }   
    })
};

function send() {
    if (name && (phone || mail) && message) {
       alert(`Hi ${name}, ${ phone ? 'phone: ' + phone + ', ' : ''}` + 
       `${ mail ? 'mail: ' + mail + ', ' : ''}message: ${message}`);        
    }
}
