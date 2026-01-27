const articles = [];
const cats = ["Technology", "Finance", "Lifestyle", "Health"];
for (let i = 1; i <= 300; i++) {
    articles.push({
        id: i,
        title: `Smart Guide #${i}: Essential Tips for ${cats[i % 4]}`,
        category: cats[i % 4],
        views: Math.floor(Math.random() * 20000) + 500,
        content: `Discover professional insights in Smart Guide #${i}. Staying updated on ${cats[i % 4]} is the key to personal and financial growth in 2026. This article provides a deep dive into modern solutions and smart strategies.`
    });
}
const sorted = [...articles].sort((a, b) => b.views - a.views);
function createCard(art) {
    const isHot = art.views > 15000 ? '<span class="badge">🔥 HOT</span>' : '';
    return `<a href="article.html?id=${art.id}" class="card"><div class="card-img">GUIDE #${art.id}</div><div class="card-body">${isHot}<span class="tag">${art.category}</span><h3>${art.title}</h3><div style="font-size:0.8rem;color:#888;">👁 ${art.views.toLocaleString()} Readers</div></div></a>`;
}
document.addEventListener("DOMContentLoaded", () => {
    if(document.getElementById("total-count")) document.getElementById("total-count").innerText = articles.length;
    const topGrid = document.getElementById("top-articles");
    const archGrid = document.getElementById("archive-articles");
    if(topGrid) topGrid.innerHTML = sorted.slice(0, 3).map(createCard).join('');
    if(archGrid) archGrid.innerHTML = sorted.slice(3, 15).map(createCard).join('');
});
