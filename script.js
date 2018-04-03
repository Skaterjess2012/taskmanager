/*$('.taskinput').on('keyup', function(e){
	let keypressed = e.keyCode;
	let inputText = $(this);
	switch(keypressed) {
		case 13:
			if (inputText.val() === "") {
				break;
			}
			addTask(inputText.val());
			inputText.val('');
			break;
	}
});
$('.fa-calendar-alt').on('click', function(){
	$('.priority').slideUp();
	$('.calendar').slideToggle();
});
$('.fa-exclamation').on('click', function(){
	$('.calendar').slideUp();
	$('.priority').slideToggle();
});

function addTask(text) {
	let list = $('.list');
	let listItem = $('<li class="listItem"><p>' + text + '</p></input></li>');
	listItem.appendTo(list);
	list.children().last().slideDown('fast');
	list.children().last().css('display', 'flex');
}

function deleteTask(){}
*/

$('.priority-button').on('click', function(){
	$('.priority').slideToggle();
	$('.calendar').slideUp();
});

$('.fa-calendar-alt').on('click', function(){
	$('.calendar').slideToggle();
	$('.priority').slideUp();
});

$('.priority-item').on('click', function(){
	console.log(this.className());
});

$('.taskinput').on('keyup', function(e){
	let keypressed = e.keyCode;
	let inputText = $(this);
	if (keypressed === 15) {}
});

class addTask {
	constructor(priority, text){
		this.priority = priority;
		this.text = text;
		this.addToList(this.priority, this.text);
	}
	addToList(p, t){
		let p1 = $('.p1'), p2 = $('.p2'), p3 = $('.p3');
		let listItem = $('<li class="listItem"><p>' + this.text + '</p></input></li>');
		switch(p) {
			case 'p1':
				pi(p1);
				break;
			case 'p2':
				pi(p2);
				break;
			case 'p3':
				pi(p3);
				break;
		}
		function pi(pi){
			listItem.appendTo(pi);
			pi.children().last().slideDown('fast');
			pi.children().last().css('display', 'flex');
		}
	}
}
let item = new addTask('p1', 'test');