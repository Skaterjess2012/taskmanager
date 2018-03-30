$('.taskinput').on('keyup', function(e){
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
console.log($('input:radio'));
let radioArray = $('input:radio');
radioArray.each(function(i, val){
	console.log($(val).val());
});

function addTask(text) {
	let list = $('.list');
	let listItem = $('<li class="listItem"><input class="checkbox" type="checkbox"><p contenteditable="true">' + text + '</p></input></li>');
	listItem.appendTo(list);
	$('.list').children().last().slideDown('fast');
	$('.list').children().last().css('display', 'flex');
}