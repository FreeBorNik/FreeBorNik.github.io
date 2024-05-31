let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 
let answer_message = ""
let flag = true;
let errors = document.getElementsByClassName('help-block with-errors')

tg.expand(); //расширяем на все окно  

tg.MainButton.text = "Changed Text"; //изменяем текст кнопки 
tg.MainButton.setText("Отправить данные"); //изменяем текст кнопки иначе
tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
tg.MainButton.setParams({"color": "#143F6B"}); //так изменяются все параметры 
// tg.MainButton.show()

elem_fio = document.getElementById('fname')
elem_email = document.getElementById('email')
elem_subject = document.getElementById('subject')


btn_close.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
	flag = true;
    if (elem_fio.value.trim() !== "") {
		answer_message = elem_fio.value.trim(); 
		Object.assign(elem_fio.style, {
                    borderColor: 'green',
                    padding: '12px'
                    });
		} else {
      		Object.assign(elem_fio.style, {
                    borderColor: 'red',
                    padding: '12px'
                    });
      		  elem_fio.placeholder = 'Укажите свои ФИО';
		flag = false;
    }
    if (elem_email.value.trim() !== "") {
		answer_message = elem_email.value.trim(); 
	    	Object.assign(elem_email.style, {
                    borderColor: 'green',
                    padding: '12px'
                    });
    		} else {
      		Object.assign(elem_email.style, {
                    borderColor: 'red',
                    padding: '12px'
                    });
      		  elem_email.placeholder = 'Укажите свой e-mail';
		flag = false;
    }
    if (elem_subject.value.trim() !== "") {
		answer_message = elem_subject.value.trim(); 
		Object.assign(elem_subject.style, {
                    borderColor: 'green',
                    padding: '12px'
                    });
		} else {
		Object.assign(elem_subject.style, {
                    borderColor: 'red',
                    padding: '12px'
                    });
      		  elem_subject.placeholder = 'Укажите хотя бы один навык';
		flag = false;
    }    
	answer_message = answer_message+'\n'+'Страна:'+document.getElementById('country').value; 
	answer_message = 'Ваши данные:\n'+answer_message;
	if (flag) {
	tg.sendData(answer_message); }
});
