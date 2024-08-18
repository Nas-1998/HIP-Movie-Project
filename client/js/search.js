document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.getElementById("search-form");
  const movieContainer = document.getElementById("popular-movies");

  
  searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Get the search input value
    const searchInput = document.getElementById("search-input").value;

    if (!searchInput) {
      movieContainer.innerHTML = "<p>Please enter a movie title to search.</p>";
      return;
    }

    // Fetch movie details from the OMDB API
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?t=${encodeURIComponent(
          searchInput
        )}&apikey=d6273e71`
      );
      const movie = await response.json();

      // Clear previous results
      movieContainer.innerHTML = "";

      if (movie.Response === "True") {
        // Create a movie card with the fetched movie details
        const movieCard = `
          <div class="movie-card">
            <img src="${
              movie.Poster !== "N/A" ? movie.Poster : "./assets/no-image.jpg"
            }" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <p><strong>Year:</strong> ${movie.Year}</p>
            <p><strong>Plot:</strong> ${movie.Plot}</p>
          </div>
        `;

        // Display the movie card
        movieContainer.innerHTML = movieCard;
      } else {
        movieContainer.innerHTML = "<p>No movie found with that title.</p>";
      }
    } catch (error) {
      console.error("Error fetching movie details:", error);
      movieContainer.innerHTML =
        "<p>Failed to fetch movie details. Please try again later.</p>";
    }
  });
});
