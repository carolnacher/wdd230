const baseURL = "https://carolnacher.github.io/wdd230/";
const linksURL = "https://carolnacher.github.io/wdd230/data/links.json";
const cards = document.querySelector('#cards');

async function getLinks() {

  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.lessons);

}

function displayLinks(lessons) {
  const lessonsList = document.createElement('ul');

  lessons.forEach((lesson, index) => {
    const lessonItem = document.createElement('li');
    const lessonTitle = document.createElement('h4');
    const lessonLinks = document.createElement('ul');

    lessonTitle.textContent = `Lesson ${lesson.lesson} Links:`;

    lesson.links.forEach((link, linkIndex) => {
      const linkItem = document.createElement('li');
      const linkElement = document.createElement('a');
      linkElement.href = link.url;
      linkElement.textContent = `${linkIndex + 1}. ${link.title}`;

      linkItem.appendChild(linkElement);
      lessonLinks.appendChild(linkItem);
    });

    lessonItem.appendChild(lessonTitle);
    lessonItem.appendChild(lessonLinks);
    lessonsList.appendChild(lessonItem);
  });

  cards.appendChild(lessonsList);
}

getLinks();
