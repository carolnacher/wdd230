// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.
chaptersArray.forEach(chapter => {
	displayList(chapter);
  });

  button.addEventListener('click', () => {
	if (input.value != '') {  // make sure the input is not empty
	  displayList(input.value); // call the function that outputs the submitted chapter
	  chaptersArray.push(input.value);  // add the chapter to the array
	  setChapterList(); // update the localStorage with the new array
	  input.value = ''; // clear the input
	  input.focus(); // set the focus back to the input
	}
  });

  function displayList(item) {
	let li = document.createElement('li');
	let deletebutton = document.createElement('button');
	li.textContent = item; // note the use of the displayList parameter 'item'
	deletebutton.textContent = '❌';
	deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
	li.append(deletebutton);
	list.append(li);
	deletebutton.addEventListener('click', function () {
	  list.removeChild(li);
	  deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
	  input.focus(); // set the focus back to the input
	});
	console.log('I like to copy code instead of typing it out myself and trying to understand it.');
  }