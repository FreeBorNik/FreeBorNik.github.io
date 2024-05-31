let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 
let answer_message = ""

tg.expand(); //расширяем на все окно  

tg.MainButton.text = "Changed Text"; //изменяем текст кнопки 
tg.MainButton.setText("Отправить данные"); //изменяем текст кнопки иначе
tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
tg.MainButton.setParams({"color": "#143F6B"}); //так изменяются все параметры 
// tg.MainButton.show()


btn_close.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
	
	answer_message = "ФИО:"+document.getElementById('fname').value; 
	answer_message = answer_message+'\n'+'e-mail:'document.getElementById('email').value; 
	answer_message = answer_message+'\n'+'Страна:'document.getElementById('country').value; 
	answer_message = answer_message+'\n'+'Страна:'document.getElementById('subject').value;
	answer_message = 'Ваши данные:\n'+answer_message;
	tg.sendData(answer_message); 
});

