const cats = ["Technology", "Finance", "Lifestyle", "Health"];
const articles = [];

// Content blocks for long articles
const blocks = [
    "In 2026, the digital landscape is shifting faster than ever. Understanding the core drivers behind these changes is essential for anyone looking to stay competitive. From AI advancements to shifts in global markets, the data points to a more decentralized and automated future.",
    "Mental resilience and physical health are becoming the primary currencies of success. As we integrate more technology into our lives, the ability to disconnect and focus on biological wellness is a high-performance trait. Science shows that small, consistent habits lead to exponential gains over time.",
    "Financial systems are undergoing a massive transformation. Traditional banking is merging with decentralized finance, creating opportunities for passive income that didn't exist a decade ago. Mastering your personal economy requires a mix of technical knowledge and psychological discipline."
];

for (let i = 1; i <= 300; i++) {
    const category = cats[i % 4];
    articles.push({
        id: i,
        title: `${category} Strategy: Guide #${i} for 2026`,
        category: category,
        image: `https://picsum.photos/seed/${i+100}/800/500`,
        bodyImage1: `https://picsum.photos/seed/${i+500}/800/450`,
        bodyImage2: `https://picsum.photos/seed/${i+900}/800/450`,
        views: Math.floor(Math.random() * 20000) + 1000,
        content: Array(10).fill(blocks[i % 3]).join("\n\n") // Generates ~1000 words
    });
}

function createCard(art) {
    return `
    <a href="article.html?id=${art.id}" class="card">
        <div class="card-img-container"><img src="${art.image}" class="card-img"></div>
        <div class="card-body">
            <span class="tag">${art.category}</span>
            <h3 style="margin:10px 0">${art.title}</h3>
            <div style="font-size:0.8rem;color:#888">👁 ${art.views.toLocaleString()} Readers</div>
        </div>
    </a>`;
}

function searchArticles() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const results = articles.filter(a => a.title.toLowerCase().includes(query) || a.category.toLowerCase().includes(query));
    const archGrid = document.getElementById("archive-articles");
    const archTitle = document.getElementById("archive-title");
    
    if(results.length > 0) {
        archTitle.innerText = `Search Results (${results.length})`;
        archGrid.innerHTML = results.slice(0, 15).map(createCard).join('');
        archGrid.scrollIntoView({ behavior: 'smooth' });
    } else {
        archGrid.innerHTML = "<p style='grid-column:1/-1;text-align:center;padding:50px'>No guides match your search.</p>";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if(document.getElementById("total-count")) document.getElementById("total-count").innerText = articles.length;
    const sorted = [...articles].sort((a, b) => b.views - a.views);
    const topGrid = document.getElementById("top-articles");
    const archGrid = document.getElementById("archive-articles");
    if(topGrid) topGrid.innerHTML = sorted.slice(0, 3).map(createCard).join('');
    if(archGrid) archGrid.innerHTML = sorted.slice(3, 15).map(createCard).join('');
});
