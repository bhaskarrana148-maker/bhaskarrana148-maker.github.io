// Article Data
let articleData = [
  {id:1, title:"How Small Daily Habits Can Change Your Life", desc:"Tiny habits build a better life.", img:"https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=800", views:250},
  {id:2, title:"Morning Routine That Boosts Focus", desc:"Start your day with energy.", img:"https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800", views:180},
  {id:3, title:"Why Consistency Matters More Than Motivation", desc:"Consistency beats motivation.", img:"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800", views:320},
  {id:4, title:"Simple Ways to Reduce Stress Daily", desc:"Easy daily steps to keep stress away.", img:"https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800", views:200},
  {id:5, title:"How Reading 10 Minutes a Day Improves Life", desc:"Small reading habits grow knowledge.", img:"https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800", views:150},
  // Add more articles here
];

const articlesContainer = document.getElementById("articlesContainer");
const topArticlesContainer = document.getElementById("topArticlesContainer");
const searchInput = document.getElementById("searchInput");
const articleCount = document.getElementById("articleCount");

// Render Articles
function renderArticles(filter="") {
  articlesContainer.innerHTML = "";
  topArticlesContainer.innerHTML = "";

  // Filter articles
  let filtered = articleData.filter(a => a.title.toLowerCase().includes(filter));
  articleCount.textContent = `Total Articles: ${filtered.length}`;

  // Top 5 most viewed
  let top5 = [...articleData].sort((a,b)=>b.views - a.views).slice(0,5);
  top5.forEach(a=>{
    const div = document.createElement("div");
    div.className="article-card";
    div.innerHTML = `<img src="${a.img}" alt="${a.title}"><h2><a href="articles/article${a.id}.html">${a.title}</a></h2><p>${a.desc}</p>`;
    topArticlesContainer.appendChild(div);
  });

  // Other articles
  filtered.forEach(a=>{
    const div = document.createElement("div");
    div.className="article-card";
    div.innerHTML = `<img src="${a.img}" alt="${a.title}"><h2><a href="articles/article${a.id}.html">${a.title}</a></h2><p>${a.desc}</p>`;
    articlesContainer.appendChild(div);
  });
}

// Search
searchInput.addEventListener("input", e => renderArticles(e.target.value.toLowerCase()));

// Initial render
renderArticles();
