const apiUrl = "https://jsonplaceholder.typicode.com/posts/";

const fetchFactBtn = document.getElementById("fetch-fact-btn");
const factContainer = document.getElementById("fact-container");

fetchFactBtn.addEventListener("click", () => {
  const randomPostId = Math.floor(Math.random() * 100) + 1;
  const randomApiUrl = apiUrl + randomPostId;

  fetch(randomApiUrl)
    .then((response) => response.json())
    .then((data) => {
      const randomFact = data.title;

      factContainer.textContent = randomFact;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
