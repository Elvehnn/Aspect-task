## Задача

Используя React + Redux создайте компонент, в котором будут два поля для ввода, кнопка и область для отображения контента:
![1](https://user-images.githubusercontent.com/70837634/176163539-d1241836-587e-434d-a4c3-b5364fc6b1fe.png)

Область «контент» задается объектом content, который может включать в себя несколько типов элементов:

1. panel со свойствами: width, height, visible
2. label со свойствами: caption, visible
3. button со свойствами: caption, width, height, visible

width, height – число
caption – текст
visible – true/false

пример:
content = [
	{
		type: 'panel',
		props: {
			width: 500,
			height: 200,
			visible: true
		},
	},
	{
		type: 'label',
		props: {
			caption: 'test',
			visible: false
		},
	},
	{
		type: 'button',
		props: {
			width: 100,
			height: 50,
			visible: true
		},
	}
]

Элемент 'panel' может включать в себя любые другие элементы в том числе другие 'panel'. Например:
content = [{
	type: 'panel',
	props: {
		width: 500,
		height: 200,
		visible: true
	},
	content: [{
		type: 'label',
		props: {
			caption: 'test',
			visible: false
		}
	}]
}]

### Что надо сделать:
1. Задать начальный content, который будет включать в себя весь перечень элементов (включая вложенные) и отобразить его на экране.
(panel - div с рамкой, label - span c текстом, button - button с надписью ) соответственно с учетом размеров и видимости

2. в поле «Путь» вводим строку, в которой задаем путь внутри content. Например: 'content[2].props.caption'
в поле «Новое значение» указываем новое значение данного свойства. Например: 'test2'/ 
По клику на кнопке «применить» объект должен измениться и на экране должен отобразиться новое содержимое content. 
В поле «Новое значение» можно внести в том числе и такое значение: {type: 'label', props: {caption: 'test', visible: false}}. В этом случае, если путь существует, то объект заменится, иначе - добавится в конец массива content.
На примере, описанном выше:
Если путь: content[0].content[0], то объект заменится на новый.
Если путь: content[0].content[1], то объект добавится.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.


