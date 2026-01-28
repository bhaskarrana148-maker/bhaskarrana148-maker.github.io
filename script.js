const categories = ["Technology", "Finance", "Lifestyle", "Health"];
const tech = ["AI Intelligence", "Quantum Future", "Cyber Shield", "Web 3.0", "Cloud Flow", "Robotics", "Data Science"];
const fin = ["Stock Mastery", "Crypto Growth", "Real Estate", "Passive Income", "Wealth Prep", "Tax Hacks", "Gold Investing"];
const life = ["Productivity", "Minimalism", "Digital Nomad", "Time Hacks", "Travel Luxe", "Home Decor", "Journaling"];
const heal = ["Mental Flow", "Biohacking", "Nutrition Hub", "Sleep Science", "Fitness Pro", "Yoga Mastery", "Longevity"];

function generateLongContent(title, cat) {
    let text = `<h2>Introduction to ${title}</h2><p>In the rapidly evolving landscape of 2026, understanding the nuances of ${cat} has become more critical than ever. This comprehensive guide explores the foundational pillars of ${title} and how they intersect with modern living. Whether you are a beginner or an expert, these insights provide a roadmap for success.</p>`;
    // Loop to create "1000 words" feel
    for(let i=0; i<8; i++) {
        text += `<h3>Chapter ${i+1}: Deep Dive</h3><p>Research indicates that ${cat} trends are shifting toward decentralized systems and personalized experiences. When we look at ${title}, we see a pattern of innovation that challenges traditional norms. To master this, one must consider the historical context and the future trajectory of the industry. Professionals in the field emphasize that consistency is the primary driver of growth in this sector.</p> <p>Furthermore, the integration of advanced analytics has allowed for a more granular understanding of user behavior. This means that ${title} is no longer just a static concept but a dynamic ecosystem that adapts to global demands.</p>`;
    }
    text += `<h3>Conclusion</h3><p>Ultimately, ${title} represents a shift in how we approach our daily goals. By implementing these strategies, you can stay ahead of the curve and ensure long-term mastery in ${cat}.</p>`;
    return text;
}

const articles = [];
for (let i = 1; i <= 300; i++) {
    const cat = categories[i % 4];
    const pool = cat === "Technology" ? tech : cat === "Finance" ? fin : cat === "Lifestyle" ? life : heal;
    const topic = pool[i % pool.length];
    const title = `${topic} Mastery: Guide #${i}`;
    
    articles.push({
        id: i, 
        title: title, 
        category: cat,
        image: `https://picsum.photos/seed/${i + 100}/800/500`,
        bodyImage1: `https://picsum.photos/seed/${i + 300}/800/450`,
        bodyImage2: `https://picsum.photos/seed/${i + 500}/800/450`,
        views: Math.floor(Math.random() * 50000) + 10000,
        content: generateLongContent(title, cat)
    });
}

// Global UI Logic
function renderGrid(data, targetId = "archive-articles") {
    const target = document.getElementById(targetId);
    if (!target) return;
    target.innerHTML = data.map(art => `
        <a href="article.html?id=${art.id}" class="card">
            <img src="${art.image}" alt="Guide" loading="lazy">
            <div class="card-body">
                <span class="tag">${art.category}</span>
                <h3 style="margin:10px 0; font-size:1.1rem;">${art.title}</h3>
                <p style="font-size:0.85rem; color:var(--text-light)">Deep dive into ${art.category} mastery...</p>
            </div>
        </a>`).join('');
}

function filterByCategory(cat) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.toggle('active', btn.innerText === cat));
    const filtered = cat === 'All' ? articles : articles.filter(a => a.category === cat);
    renderGrid(filtered);
    document.getElementById('top-section').style.display = cat === 'All' ? 'block' : 'none';
    document.getElementById('archive-title').innerText = `${cat} Library (${filtered.length} Guides)`;
}

function showRecommendations() {
    const q = document.getElementById('searchInput').value.toLowerCase();
    const box = document.getElementById('recommendations');
    if (q.length < 2) { box.style.display = 'none'; return; }
    const matches = articles.filter(a => a.title.toLowerCase().includes(q)).slice(0, 5);
    box.innerHTML = matches.map(m => `<div class="rec-item" onclick="window.location.href='article.html?id=${m.id}'">${m.title}</div>`).join('');
    box.style.display = matches.length ? 'block' : 'none';
}

document.addEventListener("DOMContentLoaded", () => {
    const sorted = [...articles].sort((a,b) => b.views - a.views);
    renderGrid(sorted.slice(0, 3), "top-articles");
    renderGrid(articles, "archive-articles"); // Shows all 300
    
    const themeBtn = document.getElementById('theme-toggle');
    themeBtn?.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        themeBtn.innerHTML = document.body.classList.contains('dark-theme') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
});
