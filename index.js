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
        title: "Apple Unveils New M3 Chip for MacBook Pro and iMac",
        description: "Apple's latest M3 chip promises 2x faster performance and improved energy efficiency for the next generation of Mac devices.",
        image: "https://www.apple.com/newsroom/images/2023/10/Apple-unveils-M3-M3-Pro-and-M3-Max/tile/Apple-M3-chip-series-231030.jpg.news_app_ed.jpg"
    },
    {
        title: "SpaceX Successfully Launches Starship on Second Test Flight",
        description: "SpaceX's Starship achieves a milestone in its second test flight, bringing humanity closer to Mars colonization.",
        image: "https://i.abcnewsfe.com/a/2fba6849-4d9f-4b3e-8109-2bb19f2d4077/spacex-ht-jt-231118_1700324325343_hpMain_16x9.jpg"
    },
    {
        title: "Tesla Releases Full Self-Driving Beta Version 12",
        description: "Tesla's latest FSD update introduces city street navigation and improved safety features.",
        image: "https://www.notateslaapp.com/img/containers/article_images/2022/fsd-beta-inside.jpg/e7a88a663b2410530a32a2106fd03aec.jpg"
    },
    {
        title: "OpenAI Releases GPT-4.5 with Enhanced Multimodal Capabilities",
        description: "GPT-4.5 can now process text, images, and audio, making it a powerful tool for creative and professional tasks.",
        image: "https://cdn.wccftech.com/wp-content/uploads/2024/04/OpenAI-GPT-5-GPT-4.jpg"
    },
    {
        title: "NVIDIA Unveils RTX 4090 Ti, the Most Powerful GPU Ever Made",
        description: "The RTX 4090 Ti offers unparalleled performance for gaming, AI, and 3D rendering.",
        image: "https://nvidianews.nvidia.com/_gallery/get_file/?file_id=63294addb3aed312805e78b4"
    }
];


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
    image.classList.add("card-image");


    // append to card
    newsCard.appendChild(image);
    newsCard.appendChild(title);
    newsCard.appendChild(description);
    return newsCard;
}