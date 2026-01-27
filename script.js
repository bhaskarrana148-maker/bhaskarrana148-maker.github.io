const cats = ["Technology", "Finance", "Lifestyle", "Health"];

// Library of content blocks to build 1000+ words dynamically
const introBlocks = [
    "In the rapidly evolving landscape of 2026, staying ahead requires a deep understanding of core principles.",
    "The modern world presents unique challenges that demand innovative solutions and a proactive mindset.",
    "Mastering this domain is not just about knowledge; it is about applying strategic insights to daily life.",
    "As we navigate the complexities of the digital age, certain fundamentals remain the pillars of success."
];

const midBlocks = [
    "Research indicates that individuals who focus on long-term sustainability often outperform their peers. This involves a rigorous analysis of current trends and a willingness to adapt to new methodologies. Furthermore, the integration of cross-disciplinary skills allows for a more holistic approach to problem-solving.",
    "Data-driven decision making has become the gold standard. By leveraging the power of information, we can identify patterns that were previously invisible. This section explores how to harness these insights effectively to maximize efficiency and minimize unnecessary risks.",
    "The psychological aspect of growth cannot be overlooked. Mental resilience and emotional intelligence play a critical role in how we perceive opportunities. Understanding the cognitive biases that affect our judgment is the first step toward clearer thinking."
];

const articles = [];

for (let i = 1; i <= 300; i++) {
    const category = cats[i % 4];
    
    // Generate Unique Titles
    const topics = {
        "Technology": ["AI Integration", "Quantum Computing", "Cybersecurity", "Blockchain Evolution", "IoT Future"],
        "Finance": ["Crypto Markets", "Passive Income", "Stock Volatility", "Real Estate 2026", "Wealth Management"],
        "Lifestyle": ["Digital Nomadism", "Minimalist Living", "Travel Hacks", "Home Automation", "Productivity Flow"],
        "Health": ["Biohacking", "Mental Wellness", "Nutritional Science", "Sleep Optimization", "Longevity Secrets"]
    };
    const specificTopic = topics[category][i % 5];
    const title = `${specificTopic}: The Definitive Guide #${i}`;

    // Generate 1000+ Words of Content
    let longContent = "";
    for (let j = 0; j < 12; j++) {
        longContent += introBlocks[j % 4] + " " + midBlocks[j % 3] + " " + midBlocks[(j+1) % 3] + "\n\n";
    }

    articles.push({
        id: i,
        title: title,
        category: category,
        // Unique image for the card (using ID to force a different image)
        image: `https://picsum.photos/seed/${i + 100}/800/500`, 
        // Two unique images for the article body
        bodyImage1: `https://picsum.photos/seed/${i + 500}/800/400`,
        bodyImage2: `https://picsum.photos/seed/${i + 900}/800/400`,
        views: Math.floor(Math.random() * 25000) + 1200,
        content: longContent
    });
}

// Display logic
const sorted = [...articles].sort((a, b) => b.views - a.views);

function createCard(art) {
    return `
    <a href="article.html?id=${art.id}" class="card">
        <div class="card-img-container">
            <img src="${art.image}" alt="Feature Image" class="card-img">
        </div>
        <div class="card-body">
            <span class="tag">${art.category}</span>
            <h3>${art.title}</h3>
            <div class="card-meta">
                <span>👁 ${art.views.toLocaleString()}</span>
                <span style="color:var(--primary); font-weight:bold;">Read Guide →</span>
            </div>
        </div>
    </a>`;
}

document.addEventListener("DOMContentLoaded", () => {
    if(document.getElementById("total-count")) document.getElementById("total-count").innerText = articles.length;
    const topGrid = document.getElementById("top-articles");
    const archGrid = document.getElementById("archive-articles");
    if(topGrid) topGrid.innerHTML = sorted.slice(0, 3).map(createCard).join('');
    if(archGrid) archGrid.innerHTML = sorted.slice(3, 21).map(createCard).join('');
});
