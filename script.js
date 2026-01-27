const input = document.getElementById("searchInput");
const articles = document.querySelectorAll(".article-card");

input.addEventListener("input", () => {
  const value = input.value.toLowerCase();
  articles.forEach(a => {
    a.style.display = a.innerText.toLowerCase().includes(value) ? "flex" : "none";
  });
});
