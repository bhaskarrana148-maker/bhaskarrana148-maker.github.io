const categories = ["Technology", "Finance", "Lifestyle", "Health"];
const tech = ["AI Strategy", "Quantum Future", "Cyber Shield", "Web 3.0", "Cloud Flow"];
const fin = ["Stock Mastery", "Crypto Growth", "Real Estate", "Passive Income", "Wealth Prep"];
const life = ["Productivity", "Minimalism", "Digital Nomad", "Time Hacks", "Travel Luxe"];
const heal = ["Mental Flow", "Biohacking", "Nutrition Hub", "Sleep Science", "Fitness Pro"];

const articles = [];
for (let i = 1; i <= 300; i++) {
    const cat = categories[i % 4];
    const pool = cat === "Technology" ? tech : cat === "Finance" ? fin : cat === "Lifestyle" ? life : heal;
    const title = `${pool[i % 5]} Mastery: Guide ${i}`;
    articles.push({
        id: i, title: title, category: cat,
        image: `https://picsum.photos/seed/${i + 200}/800/500`,
        bodyImage1: `https://picsum.photos/seed/${i + 600}/800/450`,
        bodyImage2: `https://picsum.photos/seed/${i + 800}/800/450`,
        views: Math.floor(Math.random() * 20000) + 5000,
        content: `Master ${title} in 2026. This guide explores core principles, strategic advantages, and future trends of ${cat}.`
    });
}

const themeBtn = document.getElementById('theme-toggle');
themeBtn?.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    themeBtn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

function showRecommendations() {
    const q = document.getElementById('searchInput').value.toLowerCase();
    const box = document.getElementById('recommendations');
    if (q.length < 2) { box.style.display = 'none'; return; }
    const matches = articles.filter(a => a.title.toLowerCase().includes(q)).slice(0, 5);
    box.innerHTML = matches.map(m => `<div class="rec-item" onclick="selectArticle('${m.title}')">${m.title}</div>`).join('');
    box.style.display = matches.length ? 'block' : 'none';
}

function selectArticle(t) {
    document.getElementById('searchInput').value = t;
    document.getElementById('recommendations').style.display = 'none';
    searchArticles();
}

function searchArticles() {
    const q = document.getElementById('searchInput').value.toLowerCase();
    renderGrid(articles.filter(a => a.title.toLowerCase().includes(q)));
}

function filterByCategory(cat) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.toggle('active', btn.innerText === cat));
    renderGrid(cat === 'All' ? articles : articles.filter(a => a.category === cat));
    document.getElementById('top-section').style.display = cat === 'All' ? 'block' : 'none';
}

function renderGrid(data) {
    document.getElementById("archive-articles").innerHTML = data.slice(0, 15).map(createCard).join('');
}

function createCard(art) {
    return `<a href="article.html?id=${art.id}" class="card">
        <img src="${art.image}" loading="lazy">
        <div class="card-body">
            <span class="tag">${art.category}</span>
            <h3 style="margin:10px 0; font-size:1.1rem;">${art.title}</h3>
        </div>
    </a>`;
}

document.addEventListener("DOMContentLoaded", () => {
    const sorted = [...articles].sort((a,b) => b.views - a.views);
    document.getElementById("top-articles").innerHTML = sorted.slice(0, 3).map(createCard).join('');
    renderGrid(articles);
});
