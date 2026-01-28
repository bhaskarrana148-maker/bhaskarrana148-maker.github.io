const categories = ["Technology", "Finance", "Lifestyle", "Health"];
const topics = {
    Technology: ["AI Revolution", "Quantum Logic", "Cloud Strategy", "Cyber Defense", "Web3 Future", "Metaverse Tech", "SaaS Growth"],
    Finance: ["Value Stocks", "Crypto Yields", "Passive Income", "Tax Efficiency", "Wealth Building", "Real Estate", "Gold Strategy"],
    Lifestyle: ["Habit Mastery", "Time Design", "Remote Success", "Minimalist Living", "Digital Detox", "Mindful Work", "Travel Hacks"],
    Health: ["Biohacking 101", "Gut Wellness", "Sleep Science", "Longevity Secrets", "Functional Health", "Yoga Breath", "Mental Flow"]
};

function generateHighValueContent(title, cat) {
    let html = `<h2>The Definitive Guide to ${title}</h2>
    <p>In the digital landscape of 2026, ${title} has emerged as a cornerstone of the ${cat} industry. Experts agree that the rapid acceleration of information requires a structured approach to learning. This 1000-word guide breaks down everything you need to know about the current trends and future shifts in this specific sector.</p>
    <img src="https://picsum.photos/seed/${title}/800/450" style="width:100%; border-radius:15px; margin:20px 0;">`;
    
    for(let i=1; i<=7; i++) {
        html += `<h3>Chapter ${i}: Strategic Implementation in ${cat}</h3>
        <p>A successful approach to ${title} requires a multi-layered understanding of the ecosystem. Research published in early 2026 suggests that data-driven decision making is the primary driver of growth. When we analyze the success rates of those who implement these ${cat} strategies, we see a clear 35% increase in efficiency compared to traditional methods. This ensures that every professional in the ${cat} niche stays ahead of the competitive curve.</p>
        <p>Furthermore, the ethical implications of ${title} are becoming a central focus. As automation and AI begin to overlap with ${cat}, maintaining a human-centric perspective is vital for long-term sustainability. Practitioners should focus on cross-border collaboration and continuous upskilling to stay ahead of the global curve. In 2026, the convergence of ${title} and global demand has created unprecedented opportunities.</p>`;
    }
    html += `<h3>Final Thoughts</h3><p>Mastering ${title} is a marathon, not a sprint. We hope this comprehensive guide serves as your roadmap for success in ${cat}.</p>`;
    return html;
}

const articles = [];
for (let i = 1; i <= 300; i++) {
    const cat = categories[i % 4];
    const pool = topics[cat];
    const name = `${pool[i % pool.length]} Mastery #${i}`;
    articles.push({
        id: i, title: name, category: cat,
        image: `https://picsum.photos/seed/thumb${i}/600/400`,
        content: generateHighValueContent(name, cat)
    });
}

function renderGrid(data, target) {
    const el = document.getElementById(target);
    if (!el) return;
    el.innerHTML = data.map(art => `
        <a href="article.html?id=${art.id}" class="card">
            <img src="${art.image}" loading="lazy">
            <div class="card-body">
                <span style="color:var(--accent); font-weight:bold; font-size:0.75rem;">${art.category}</span>
                <h3 style="margin:8px 0; font-size:1.1rem; line-height:1.4;">${art.title}</h3>
                <p style="color:var(--text-light); font-size:0.85rem;">Professional deep-dive into ${art.category} mastery...</p>
            </div>
        </a>`).join('');
}

function filterByCategory(cat) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.toggle('active', btn.innerText === cat));
    const filtered = cat === 'All' ? articles : articles.filter(a => a.category === cat);
    renderGrid(filtered, "archive-articles");
    document.getElementById('top-section').style.display = (cat === 'All') ? 'block' : 'none';
}

function showRecommendations() {
    const q = document.getElementById('searchInput').value.toLowerCase();
    const box = document.getElementById('recommendations');
    if (q.length < 2) { box.style.display = 'none'; return; }
    const matches = articles.filter(a => a.title.toLowerCase().includes(q)).slice(0, 5);
    box.innerHTML = matches.map(m => `<div class="rec-item" onclick="window.location.href='article.html?id=${m.id}'">${m.title}</div>`).join('');
    box.style.display = (matches.length > 0) ? 'block' : 'none';
}

function searchArticles() {
    const q = document.getElementById('searchInput').value.toLowerCase();
    renderGrid(articles.filter(a => a.title.toLowerCase().includes(q)), "archive-articles");
}

document.addEventListener("DOMContentLoaded", () => {
    renderGrid(articles.slice(0, 3), "top-articles");
    renderGrid(articles, "archive-articles");
    
    const themeBtn = document.getElementById('theme-toggle');
    themeBtn?.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        themeBtn.innerHTML = document.body.classList.contains('dark-theme') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
});
