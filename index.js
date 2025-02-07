import { newsItems, menuItems } from "./data.js";

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
    const newsCard = createNewsCard(news);

    newsCard.addEventListener('mouseover', () => {
        newsCard.style.backgroundColor = 'lightblue';
    });

    newsCard.addEventListener("mouseout", () => {
        newsCard.style.backgroundColor = "white";
    });

    latestNews.appendChild(newsCard);
});


function createNewsCard(news) {
    const newsCard = document.createElement("div");

    const image = document.createElement("img");
    const title = document.createElement("h3");
    const description = document.createElement("p");

    // add data
    image.src = news.image;
    title.textContent = news.title;
    description.textContent = news.description

    //style
    newsCard.classList.add("card");
    image.classList.add("card-image");


    // append to card
    newsCard.appendChild(image);
    newsCard.appendChild(title);
    newsCard.appendChild(description);
    return newsCard;
}