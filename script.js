const articleData = [
  {
    id: 1,
    title: "How Small Daily Habits Can Change Your Life",
    desc: "Simple daily actions that slowly but surely transform your mindset and lifestyle.",
    img: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=800"
  },
  {
    id: 2,
    title: "Morning Routine That Increases Focus and Energy",
    desc: "A realistic morning routine anyone can follow for better productivity.",
    img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800"
  },
  {
    id: 3,
    title: "How to Stay Motivated Even When Life Feels Hard",
    desc: "Practical mindset shifts to stay strong during tough days.",
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800"
  }
];

const container = document.getElementById("articles");
const searchInput = document.getElementById("searchInput");

function renderArticles(filter = "") {
  container.innerHTML = "";
  articleData
    .filter(a => a.title.toLowerCase().includes(filter))
    .forEach(a => {
      const div = document.createElement("div");
      div.className = "article-card";
      div.innerHTML = `
        <img src="${a.img}" alt="${a.title}">
        <h2><a href="articles/article${a.id}.html">${a.title}</a></h2>
        <p>${a.desc}</p>
      `;
      container.appendChild(div);
    });
}

searchInput.addEventListener("input", e => {
  renderArticles(e.target.value.toLowerCase());
});

renderArticles();
