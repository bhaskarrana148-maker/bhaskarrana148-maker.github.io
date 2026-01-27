const articles = [];
const cats = ["Technology", "Finance", "Lifestyle", "Health"];

const catImages = {
    "Technology": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    "Finance": "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80",
    "Lifestyle": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    "Health": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
};

for (let i = 1; i <= 300; i++) {
    const category = cats[i % 4];
    articles.push({
        id: i,
        title: `Smart Guide #${i}: Essential Tips for ${category}`,
        category: category,
        image: catImages[category],
        views: Math.floor(Math.random() * 20000) + 500,
        content: `Expert insights for Smart Guide #${i}. In 2026, staying ahead in ${category} requires the right information. This guide provides actionable steps to master your daily routine and achieve your goals.`
    });
}

const sorted = [...articles].sort((a, b) => b.views - a.views);

function createCard(art) {
    const isHot = art.views > 15000 ? '<span class="badge">🔥 HOT</span>' : '';
    return `
    <a href="article.html?id=${art.id}" class="card">
        <div class="card-img-container">
            <img src="${art.image}" alt="${art.category}" class="card-img">
            ${isHot}
        </div>
        <div class="card-body">
            <span class="tag">${art.category}</span>
            <h3>${art.title}</h3>
            <div class="card-meta">
                <span>👁 ${art.views.toLocaleString()} Readers</span>
                <span style="color:var(--primary); font-weight:bold;">Read More →</span>
            </div>
        </div>
    </a>`;
}

document.addEventListener("DOMContentLoaded", () => {
    if(document.getElementById("total-count")) document.getElementById("total-count").innerText = articles.length;
    const topGrid = document.getElementById("top-articles");
    const archGrid = document.getElementById("archive-articles");
    if(topGrid) topGrid.innerHTML = sorted.slice(0, 3).map(createCard).join('');
    if(archGrid) archGrid.innerHTML = sorted.slice(3, 15).map(createCard).join('');
});
