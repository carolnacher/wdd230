const baseURL = "https://carolnacher.github.io/wdd230/";
const linksURL = "https://carolnacher.github.io/wdd230/data/links.json";
const cards = document.querySelector('#cards');

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
  } catch (error) {
    console.error('Error fetching links data:', error);
  }
}

function displayLinks(weeks) {
  const activitiesList = document.createElement('ul');

  weeks.forEach((week, index) => {
    const weekTitle = document.createElement('h4');
    weekTitle.textContent = `Week ${index + 1} Activities:`;

    const weekList = document.createElement('ul');

    week.activities.forEach((activity, activityIndex) => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = `${baseURL}${activity.link}`;
      link.textContent = `${activityIndex + 1}. ${activity.title}`;

      listItem.appendChild(link);
      weekList.appendChild(listItem);
    });

    activitiesList.appendChild(weekTitle);
    activitiesList.appendChild(weekList);
  });

  cards.appendChild(activitiesList);
}

getLinks();
