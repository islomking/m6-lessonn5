document.addEventListener("сlick", () => {
    const movies = document.querySelectorAll(".movie img, .trailer img");

    movies.forEach(movie => {
        movie.addEventListener("mouseover", () => {
            movie.style.transform = "scale(1.1) rotate(2deg)";
            movie.style.transition = "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out";
            movie.style.boxShadow = "0 4px 10px rgba(255, 255, 255, 0.5)";
        });

        movie.addEventListener("mouseleave", () => {
            movie.style.transform = "scale(1) rotate(0)";
            movie.style.boxShadow = "none";
        });
    });
});
