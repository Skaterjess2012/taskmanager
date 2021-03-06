let priority = 'p4'; //sets the defualt priority to p4
let pColor = {p1:'red', p2:'yellow', p3:'lightblue', p4:'grey', comp:'',};

$('.priority-button').on('click', function(){
	$('.priority').slideToggle();
	$('.calendar').slideUp();
});

$('.fa-calendar-alt').on('click', function(){
	$('.calendar').slideToggle();
	$('.priority').slideUp();
});

$('.priority-item').on('click', function(){
	let color;
	if ($(this).hasClass('priority-level-1')){sP('p1', pColor.p1);}
	if ($(this).hasClass('priority-level-2')){sP('p2', pColor.p2);}
	if ($(this).hasClass('priority-level-3')){sP('p3', pColor.p3);}
	if ($(this).hasClass('priority-level-4')){sP('p4', pColor.p4);}
	function sP(level, colorType){ //set priotrity
		priority = level;
		color = colorType;
	}
	$('.priority-button i').css('color', color);
	//console.log($('.priority-button'));
	console.log($('.priority-button').children().find('i').toArray());
	$('.priority').slideToggle();
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
	let di = $(this).parent();
	di.slideUp('fast', function(){
		this.remove();
	})
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
		let prio = {p1:$('.p1'), p2:$('.p2'), p3:$('.p3'), p4:$('.p4'), comp:$('.completed')}
		let listItem = $('<li class="listItem"><div class="check"><i class="fas fa-check"></i></div><div class="text-container"><p>' + this.text + '</p></div><div class="delete"><i class="fas fa-minus-square"></i></div></input></li>');
		switch(p) {
			case 'p1':
				pi(prio.p1, pColor.p1);
				break;
			case 'p2':
				pi(prio.p2, pColor.p2);
				break;
			case 'p3':
				pi(prio.p3, pColor.p3);
				break;
			case 'p4':
				pi(prio.p4, pColor.p4);
				break;
			case 'comp':
				pi(prio.comp, pColor.comp);
		}
		function pi(pi, color){
			listItem.appendTo(pi);
			let checkbox = pi.children().last().find('.check');
			checkbox.css('border-color', color);
			pi.children().last().slideDown('fast');
			pi.children().last().css('display', 'flex');
		}
	}
}