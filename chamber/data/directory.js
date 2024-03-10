
const url = "https://carolnacher.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector('#cards');
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

async function getMembers() {

  const response = await fetch(linksURL);
  const data = await response.json();
  displayMembers(data.members);

}
getMembers();

const displayMembers = (members) => {
  const membersList = document.createElement('ul');

  members.forEach((member, index) => {
    let memberItem = document.createElement('li');
    let memberTitle = document.createElement('h4');
    let memberInfo = document.createElement('ul');

    memberTitle.textContent = `${member.name} - Membership Level ${member["membership level"]}`;

    const memberDetails = [
      `Address: ${member.address}`,
      `Phone Number: ${member["phone number"]}`,
      `Website: ${member.url}`
    ];

    memberDetails.forEach((detail) => {
      const detailItem = document.createElement('li');
      detailItem.textContent = detail;
      memberInfo.appendChild(detailItem);
    });

    memberItem.appendChild(memberTitle);
    memberItem.appendChild(memberInfo);
    membersList.appendChild(memberItem);
  });

  cards.innerHTML = '';
  cards.appendChild(membersList);
}

gridButton.addEventListener("click", () => {
  display.classList.add("grid");
  display.classList.remove("list");
});

listButton.addEventListener("click", showList);

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}

getMembers();
