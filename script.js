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
let priority = 'p4'; //sets the defualt priority to p4

$('.priority-button').on('click', function(){
	$('.priority').slideToggle();
	$('.calendar').slideUp();
});

$('.fa-calendar-alt').on('click', function(){
	$('.calendar').slideToggle();
	$('.priority').slideUp();
});

$('.priority-item').on('click', function(){
	//something with priotirty (i dont really want to do it now)
	
});

$(document).on('click', '.listItem p', function(){
	let curItem = $(this).parent();
	let text = $(this).text();
	let inputPlace = $('<input type="text" value="' + text + '">');
	inputPlace.appendTo(curItem);
	curItem.find('input').focus();
	$(this).remove();
});

$(document).on('keyup', '.listItem input', function(e){
	let keypressed = e.keyCode;
	let inputText = $(this);
	let curItem = $(this).parent();
	if (keypressed === 13 && inputText.val() !== ""){
		$('<p>' + inputText.val() + '</p>').appendTo(curItem);
		$(this).remove();
	}
});

$(document).on('click', '.listItem .delete', function(){
	let di = $(this).parent();
	di.slideUp('fast', function(){
		this.remove();
	});
});

$(document).on('click', '.check', function(){
	let itemText = $(this).parent().children().find('p').text();
	let itemCheck = $(this).children('.fa-check');
	itemCheck.css('display', 'block');
	$(this).css('background', 'lightgreen');
	itemCheck.css('color', 'green');
	$(this).parent().slideUp('fast', function(){
		this.remove();
	});
	let item = new task(priority, itemText);
});

$('.taskinput').on('keyup', function(e){
	let keypressed = e.keyCode;
	let inputText = $(this);
	if (keypressed === 13 && inputText.val() !== "") {
		let item = new task(priority, inputText.val());
		inputText.val('');
	}
});

class task {
	constructor(priority, text){
		this.priority = priority;
		this.text = text;
		this.addToList(this.priority, this.text);
	}
	addToList(p, t){
		let prio = $('.p1'), p2 = $('.p2'), p3 = $('.p3'), p4 = $('.p4');
		let listItem = $('<li class="listItem"><div class="check"><i class="fas fa-check"></i></div><div class="text-container"><p>' + this.text + '</p></div><div class="delete"><i class="fas fa-minus-square"></i></div></input></li>');
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
			case 'p4':
				pi(p4);
				break;
		}
		function pi(pi){
			listItem.appendTo(pi);
			pi.children().last().slideDown('fast');
			pi.children().last().css('display', 'flex');
		}
	}
}