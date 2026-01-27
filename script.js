const articles = [
  {
    id: 1,
    title: "10 Daily Habits That Can Change Your Life",
    link: "articles/article1.html",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    views: 150
  },
  {
    id: 2,
    title: "How Successful People Think Differently",
    link: "articles/article2.html",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    views: 130
  },
  {
    id: 3,
    title: "Simple Ways to Stay Focused in a Distracted World",
    link: "articles/article3.html",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    views: 110
  },
  {
    id: 4,
    title: "Why Consistency Beats Motivation",
    link: "articles/article4.html",
    image: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d",
    views: 90
  },
  {
    id: 5,
    title: "Morning Routines of Highly Productive People",
    link: "articles/article5.html",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    views: 70
  }
  // keep adding till 50
];

document.getElementById("totalArticles").innerText = articles.length;

articles.sort((a, b) => b.views - a.views);

const topArticles = articles.slice(0, 5);
const otherArticles = articles.slice(5);

function render(list, elementId) {
  const container = document.getElementById(elementId);
  container.innerHTML = "";
  list.forEach(article => {
    container.innerHTML += `
      <div class="card">
        <img src="${article.image}">
        <div class="card-content">
          <h3>${article.title}</h3>
          <a href="${article.link}">Read More →</a>
        </div>
      </div>
    `;
  });
}

render(topArticles, "topArticles");
render(otherArticles, "otherArticles");
    
