const searchInput = document.getElementById("searchInput");
const articles = document.querySelectorAll("article");

searchInput.addEventListener("input", () => {
  const term = searchInput.value.toLowerCase();
  articles.forEach(article => {
    article.style.display = article.innerText.toLowerCase().includes(term)
      ? "block"
      : "none";
  });
});
