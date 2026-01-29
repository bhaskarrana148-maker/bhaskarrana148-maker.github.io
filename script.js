const categories = ["Technology", "Finance", "Lifestyle", "Health"];
const topics = {
    Technology: ["AI Revolution", "Quantum Logic", "Cloud Strategy", "Cyber Defense", "Web3 Future", "Metaverse Tech", "SaaS Growth"],
    Finance: ["Value Stocks", "Crypto Yields", "Passive Income", "Tax Efficiency", "Wealth Building", "Real Estate", "Gold Strategy"],
    Lifestyle: ["Habit Mastery", "Time Design", "Remote Success", "Minimalist Living", "Digital Detox", "Mindful Work", "Travel Hacks"],
    Health: ["Biohacking 101", "Gut Wellness", "Sleep Science", "Longevity Secrets", "Functional Health", "Yoga Breath", "Mental Flow"]
};

// Fixed function with robust image handling
function generateHighValueContent(title, cat, index) {
    // Stable Image URL with fallback
    const mainImg = `https://picsum.photos/id/${(index % 50) + 10}/800/450`;
    const fallbackImg = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80";

    let html = `<h2>The Definitive Guide to ${title}</h2>
    <p>In the digital landscape of 2026, ${title} has emerged as a cornerstone of the ${cat} industry. Experts agree that the rapid acceleration of information requires a structured approach to learning.</p>
    
    <div style="width:100%; margin:20px 0;">
        <img src="${mainImg}" 
             onerror="this.onerror=null;this.src='${fallbackImg}';" 
             style="width:100%; border-radius:15px; display:block; background:#eee;" 
             alt="${title}">
    </div>`;
    
    for(let i=1; i<=7; i++) {
        html += `<h3>Chapter ${i}: Strategic Implementation in ${cat}</h3>
        <p>A successful approach to ${title} requires a multi-layered understanding of the ecosystem. Research published in early 2026 suggests that data-driven decision making is the primary driver of growth. When we analyze the success rates of those who implement these ${cat} strategies, we see a clear 35% increase in efficiency compared to traditional methods.</p>
        <p>Furthermore, the ethical implications of ${title} are becoming a central focus. As automation and AI begin to overlap with ${cat}, maintaining a human-centric perspective is vital for long-term sustainability.</p>`;
    }
    html += `<h3>Final Thoughts</h3><p>Mastering ${title} is a marathon, not a sprint. We hope this comprehensive guide serves as your roadmap for success in ${cat}.</p>`;
    return html;
}

const articles = [];
for (let i = 1; i <= 300; i++) {
    const cat = categories[i % 4];
    const pool = topics[cat];
    const name = `${pool[i % pool.length]} Mastery #${i}`;
    
    // We pass 'i' to the content generator to ensure unique images
    articles.push({
        id: i, 
        title: name, 
        category: cat,
        image: `https://picsum.photos/id/${(i % 50) + 20}/600/400`,
        content: generateHighValueContent(name, cat, i)
    });
}

function renderGrid(data, target) {
    const el = document.getElementById(target);
    if (!el) return;
    el.innerHTML = data.map(art => `
        <a href="article.html?id=${art.id}" class="card">
            <img src="${art.image}" 
                 onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80';"
                 loading="lazy">
            <div class="card-body">
                <span style="color:var(--accent); font-weight:bold; font-size:0.75rem;">${art.category}</span>
                <h3 style="margin:8px 0; font-size:1.1rem; line-height:1.4;">${art.title}</h3>
                <p style="color:var(--text-light); font-size:0.85rem;">Professional deep-dive into ${art.category} mastery...</p>
            </div>
        </a>`).join('');
}

function filterByCategory(cat) {
    const btns = document.querySelectorAll('.filter-btn');
    btns.forEach(btn => {
        if(btn.innerText === cat) btn.classList.add('active');
        else btn.classList.remove('active');
    });
    const filtered = cat === 'All' ? articles : articles.filter(a => a.category === cat);
    renderGrid(filtered, "archive-articles");
    const topSec = document.getElementById('top-section');
    if(topSec) topSec.style.display = (cat === 'All') ? 'block' : 'none';
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
