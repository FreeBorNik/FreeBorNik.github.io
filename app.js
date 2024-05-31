let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 
let answer_message = ""

tg.expand(); //расширяем на все окно  

tg.MainButton.text = "Changed Text"; //изменяем текст кнопки 
tg.MainButton.setText("Отправить данные"); //изменяем текст кнопки иначе
tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
tg.MainButton.setParams({"color": "#143F6B"}); //так изменяются все параметры 
tg.MainButton.show()


btn_close.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
	if (tg.MainButton.isVisible){ //если кнопка показана 
		tg.MainButton.hide() //скрываем кнопку 
	}
  else{ //иначе
	answer_message = 'Нажали кнопку "Подтвердить"'  
  	tg.MainButton.show() //показываем 
  }
});

Telegram.WebApp.onEvent('mainButtonClicked', function(){
	tg.sendData(answer_message); 
	// при клике на основную кнопку отправляем данные в строковом виде
});
