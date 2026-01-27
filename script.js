const articleData = [
  { id: 1, title: "How Small Daily Habits Transform Your Life", desc: "Learn how tiny habits create massive life changes." },
  { id: 2, title: "Morning Routine That Boosts Energy and Focus", desc: "Start your day with clarity and motivation." },
  { id: 3, title: "How to Stop Procrastination for Good", desc: "Practical techniques to take action daily." },
  { id: 4, title: "Time Management Techniques That Actually Work", desc: "Control your time without stress." },
  { id: 5, title: "Building Self-Discipline in Everyday Life", desc: "Train your mind to stay consistent." },

  // 🔽 AUTO-GENERATED ARTICLES (6–300)
  ...Array.from({ length: 295 }, (_, i) => ({
    id: i + 6,
    title: `Smart Life Lesson #${i + 6}`,
    desc: "Practical advice to improve daily life, mindset, and productivity."
  }))
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
        <img src="images/homepage-img1.jpg" alt="Smart Daily Guide">
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
      
