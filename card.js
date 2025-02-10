export default function createNewsCard(news) {
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