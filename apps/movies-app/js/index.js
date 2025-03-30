

//http://www.omdbapi.com/?t=You+only+live+twice&apikey=c8e7e8a0

const searchInput = document.getElementById("searchInput");
const notFound = document.getElementById('notFound')
let movieData = null;
let debounceTimeout = null;


function time() {
  searchInput.addEventListener('input', function () {
    clearTimeout(debounceTimeout); 
    debounceTimeout = setTimeout(() => searchMovie(searchInput.value.trim()), 1500); 
  });


}

time();



const searchMovie = async (movie) => {
  if (movie) {
    try {
      document.getElementById("waiting").classList.remove("hidden");
      
      const res = await axios.get(`http://www.omdbapi.com/?t=${movie}&apikey=c8e7e8a0`);
      const data = res.data;
      movieNotFound(data)
 

      movieData = data;

      document.getElementById("waiting").classList.add("hidden");

    } catch (error) {
      console.error("Error in finding the movie", error);
      document.getElementById("waiting").classList.add("hidden");
      document.getElementById("error").classList.remove("hidden");
    }
  }
};


const movieNotFound = (data) =>{
  if (data.Response === 'False') { 
    notFound.classList.remove('hidden');
    document.getElementById("movie").classList.add("hidden");
  } else {
    notFound.classList.add('hidden');
    document.getElementById("movie").classList.remove("hidden");
    MovieRender(data);
  }
}



const MovieRender = (data) => {
  document.getElementById('year').innerHTML = `Έτος παραγωγής: ${data.Year}`
  document.getElementById('runtime').innerHTML =`Διάρκεια: ${data.Runtime}`
  document.getElementById('genre').innerHTML = `Είδος: ${data.Genre}`
  document.getElementById('imdbRating').innerHTML = `Βαθμολογία: ${data.imdbRating}`
  document.getElementById('plot').innerHTML = data.Plot
  document.getElementById('imdbId').href = `https://www.imdb.com/title/${data.imdbID}` 
  document.getElementById("image").src= data.Poster;
  document.getElementById('title').innerHTML = data.Title
}


const showMore = document.getElementById('showMore')

showMore.addEventListener('click',() => {
  if(movieData){
   
      document.querySelector('.extended').classList.toggle('hidden')
      document.getElementById('director').querySelector('span').innerHTML = movieData.Director
      document.getElementById('actors').querySelector('span').innerHTML = movieData.Actors
      document.getElementById('production').querySelector('span').innerHTML = movieData.Production
      document.getElementById('boxOffice').querySelector('span').innerHTML = movieData.BoxOffice
      document.getElementById('language').querySelector('span').innerHTML = movieData.Language
      document.getElementById('rated').querySelector('span').innerHTML = movieData.Rated
    
  }else {
    console.error('Movie data not available')
  }
  
})




// JQuery



// $(function() {
//   let debounceTimeout = null
//   $('#searchInput').on('input', function() {
//       clearTimeout(debounceTimeout)
//       debounceTimeout = setTimeout(() => getMovie(this.value.trim()), 1500)
//   })

//   $('#showMore').on('click', function(e) {
//       e.preventDefault();
//       onShowMoreClicked()
//   })
// })

// function getMovie(title) {
//   if (!title) {
//       return
//   }

//   onBeforeSend()
//   fetchMovieFromApi(title)
// }

// function fetchMovieFromApi(title) {
//   axios.get(`http://www.omdbapi.com/?t=${title}&apikey=c79ee41a`)
//       .then(response => { handleResults(response.data) })
//       .catch(error => console.error('Error: ', error))
// }

// function handleResults(result) {
//   if (result.Response === 'True') {
//       render(result)
//       hideComponent('#waiting')
//   } else if (result.Response === 'False') {
//       hideComponent('#waiting')
//       showComponent('#notFound')
//   }
// }

// function onBeforeSend() {
//   showComponent('#waiting') 
//   hideComponent('#movie')
//   hideComponent('#notFound')
//   hideComponent('#error')
// }

// function onApiError() {
//   hideComponent('#waiting')
//   showComponent('#error')
// }

// function onShowMoreClicked() {
//   $('.extended').slideToggle(1000); // Toggle visibility with a sliding animation
// }

// function showComponent(jQueryComponent) {
//   return $(jQueryComponent).removeClass('hidden')
// }

// function hideComponent(jQueryComponent) {
//   return $(jQueryComponent).addClass('hidden')
// }

// function render(data) {
//   // Construct IMDb URL
//   const imdbUrl = `https://www.imdb.com/title/${data.imdbID}`;

//   // Set the IMDb link
//   const imdbLink = document.getElementById("imdbId");
//   imdbLink.href = imdbUrl;

//   // Update other movie details
//   document.getElementById("title").textContent = data.Title;
//   document.getElementById("year").textContent = `Έτος παραγωγής: ${data.Year}`;
//   document.getElementById("runtime").textContent = `Διάρκεια: ${data.Runtime}`;
//   document.getElementById("genre").textContent = `Είδος: ${data.Genre}`;
//   document.getElementById("imdbRating").textContent = data.imdbRating;
//   document.getElementById("plot").textContent = data.Plot;
//   document.getElementById("director").querySelector("span").textContent = data.Director;
//   document.getElementById("actors").querySelector("span").textContent = data.Actors;
//   document.getElementById("production").querySelector("span").textContent = data.Production;
//   document.getElementById("boxOffice").querySelector("span").textContent = data.BoxOffice;
//   document.getElementById("language").querySelector("span").textContent = data.Language;
//   document.getElementById("rated").querySelector("span").textContent = data.Rated;

//   // Set the movie poster
//   const poster = document.getElementById("image");
//   poster.src = data.Poster;
//   poster.alt = data.Title;

//   // Show the movie section
//   document.querySelector(".movie").classList.remove("hidden");
//   // hideComponent('#waiting')
// }







