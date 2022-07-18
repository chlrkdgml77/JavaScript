const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movie = [];

const renderMovies = (filter = "") => {
  const movieList = document.getElementById("movie-list");

  if (movie.length === 0) {
    movieList.classList.remove("visible");
    return;
  }
  else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";

  const filteredMovie = !filter ? movie : movie.filter(movie => movie.info.title.includes(filter))

  filteredMovie.forEach((movie1) => {
    const movieEl = document.createElement("li");
    const {info} = movie1;
    // movieEl.textContent = movie1.info.title;
    let text = info.title + " - ";
    for (const key in info) {
      if (key !== "title") {
        text = text + `${key}: ${info[key]}`
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  })
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (title.trim() === "" || extraName.trim() === "" || extraValue.trim() === "") {
    return;
  }

  const newMovie = {
    info: {
      title: title,
      [extraName]: extraValue
    },
    id: Math.random().toString()    
  };
  movie.push(newMovie);

  renderMovies();
};

const searchMovieHandler = () => {
  const filt = document.getElementById("filter-title").value;
  renderMovies(filt);
}

addMovieBtn.addEventListener("click", addMovieHandler)
searchBtn.addEventListener("click", searchMovieHandler)