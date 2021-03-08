window.onload = () => {
	console.log("loaded script correctly");
	
};

// variables
let showCreateForm = false;
let notes = [];

// eventListeners
document.getElementById('submit-new-form').addEventListener('click', createNote);


// functions
function showHideDisplay() {
	if(showCreateForm) {
		hideCreateNote();
		showCreateForm = false;
	} else {
		displayCreateNote();
		showCreateForm = true;
	}
}
// show create note div and hide notes list
function displayCreateNote() {
	document.getElementById('displayCreateNote').classList.remove('hide');
	document.getElementById('notes-list').classList.add('hide');
}
// hide create note div and shows notes list
function hideCreateNote() {
	document.getElementById('displayCreateNote').classList.add('hide');
	document.getElementById('notes-list').classList.remove('hide');
}
/*
*
*	Simple notes creator as an Object Array
*
*/

function createNote(event) {
	console.log('create note ( FORM )');
	let form = event.srcElement.form;
	
	let note = {};
	note.title = form.title.value;
	note.text = form.content.value;
	note.date = Date.now();
	
	notes.push(note);

	alert('Nota Creada Correctamente');
	form.reset();
	event.preventDefault();

}
/*
function createNote(title, content) {
	let note = {};
	note.title = title;
	note.content = content;
	note.created = Date.now();
	notes.push(note);
}
*/
function showAllNotes(element) {
	console.log('showAllNotes function');
	for(note of notes) {
		element.appendChild(createNoteDiv(note));
	}
}

/*
* createNoteDiv: Creates a div that includes the notes information
*	@params: note(Object);
*	@returns: div HTMLElement
*/

function createNoteDiv(note) {
	// create notes's display div
	let div = document.createElement('div');
	div.classList.add('col-12');
	div.classList.add('col-md-6');
	div.classList.add('col-lg-4');
	// create card div
	let card = document.createElement('div');
	card.classList.add('card');
	// create title element
	let title = document.createElement('h3');
	title.classList.add('card-title');
	title.innerText = note.title;
	// create content element
	let content = document.createElement('p');
	content.classList.add('card-body');
	content.innerText = note.content;
	// create createdAt element
	let createdAt = document.createElement('p');
	createdAt.innerText = note.created;
	// append childs to div
	div.appendChild(title);
	div.appendChild(content);
	div.appendChild(createdAt);
	// return the element ready to be appended
	return div;
}

/*
*
*	showNote: displays the note that corresponds to the index passed
*	@params: index
*	Only works in the show-note.html
*
*/

function showNote(index) {
	document.getElementById('showed-note').appendChild(createNoteDiv(notes[index]));	
}

/*
*
*
*
*
*/

function updateNote(note) {

}