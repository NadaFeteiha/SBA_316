const menuItems = [
    { text: 'Trending', href: '/trending' },
    { text: 'News', href: '/news' },
    { text: 'Sports', href: '/sports' },
    { text: 'Entertainment', href: '/entertainment' },
    { text: 'Life', href: '/life' },
    { text: 'Tech', href: '/tech' },
    { text: 'Contact', href: '/contact' }
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
// last news 
const lastNews = document.createElement("div");

const lastNewsTitle = document.createElement("h2");
lastNewsTitle.textContent = "Last News";
lastNews.appendChild(lastNewsTitle);

main.appendChild(lastNews);
