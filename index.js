import { newsItems, menuItems } from "./data.js";
import card from "./card.js";
import contactCard from "./contact_us.js";

const menu = document.getElementById("menu");
const menuList = document.createElement("ul");

menuItems.forEach(item => {
    const mItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = item.href;
    link.textContent = item.text;
    mItem.appendChild(link);
    menuList.appendChild(mItem);
});

menu.appendChild(menuList);

// ****************************************************\\
// main part
const main = document.querySelector("main");

// ****************************************************\\
// latest news 
//title
const lastNewsTitle = document.createElement("h2");
lastNewsTitle.textContent = "Latest News";
main.appendChild(lastNewsTitle);

const latestNews = document.createElement("div");
latestNews.classList.add("div-Horizontal");

main.appendChild(latestNews);


newsItems.forEach(news => {
    const newsCard = card(news);

    newsCard.addEventListener('mouseover', () => {
        newsCard.style.backgroundColor = 'lightblue';
    });

    newsCard.addEventListener("mouseout", () => {
        newsCard.style.backgroundColor = "white";
    });

    latestNews.appendChild(newsCard);
});

const contactUs = contactCard();
main.appendChild(contactUs);

