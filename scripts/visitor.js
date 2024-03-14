
const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;


if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}


numVisits++;


localStorage.setItem("numVisits-ls", numVisits);


chaptersArray.forEach(chapter => {
	displayList(chapter);
  });

  button.addEventListener('click', () => {
	if (input.value != '') {  
	  displayList(input.value); 
	  chaptersArray.push(input.value);  
	  setChapterList(); 
	  input.value = ''; 
	  input.focus(); 
	}
  });

  function displayList(item) {
	let li = document.createElement('li');
	let deletebutton = document.createElement('button');
	li.textContent = item; 
	deletebutton.textContent = '❌';
	deletebutton.classList.add('delete'); 
	li.append(deletebutton);
	list.append(li);
	deletebutton.addEventListener('click', function () {
	  list.removeChild(li);
	  deleteChapter(li.textContent); 
	  input.focus();
	});
	console.log('I like to copy code instead of typing it out myself and trying to understand it.');
  }