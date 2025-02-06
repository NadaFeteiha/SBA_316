const menuItems = [
    { text: 'Trending', href: '/trending' },
    { text: 'News', href: '/news' },
    { text: 'Sports', href: '/sports' },
    { text: 'Entertainment', href: '/entertainment' },
    { text: 'Life', href: '/life' },
    { text: 'Tech', href: '/tech' },
    { text: 'Contact', href: '/contact' }
]

const newsItems = [
    {
        title: "Title 1",
        description: "Description 1",
        image: "https://via.placeholder.com/150",
    },
    {
        title: "Title 2",
        description: "Description 2",
        image: "https://via.placeholder.com/150",
    },
    {
        title: "Title 3",
        description: "Description 3",
        image: "https://via.placeholder.com/150",
    },
    {
        title: "Title 4",
        description: "Description 4",
        image: "https://via.placeholder.com/150",
    },
    {
        title: "Title 5",
        description: "Description 5",
        image: "https://via.placeholder.com/150",
    }
]

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
const main = document.getElementById("main");


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

    // append to card
    newsCard.appendChild(image);
    newsCard.appendChild(title);
    newsCard.appendChild(description);
    return newsCard;
}