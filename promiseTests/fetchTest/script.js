const moreCats = document.querySelector(".moreCats");
const searchBtn = document.querySelector(".go");
const searchInput = document.querySelector("#search");
const errorDiv = document.querySelector(".errorDiv");

const getGif = (param) => {
  const img = document.querySelector("img");
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=KEY=${param}`, {
    mode: "cors",
  })
    .then(function (response) {
      return response.json();
    })
    .then(
      function (response) {
        img.src = response.data.images.original.url;
      },
      function rejected(err) {
        getGif("cats");
        errorDiv.textContent = "Error - please try another search";
        console.log(err);
      }
    );
};

//listeners
moreCats.addEventListener("click", () => getGif("cats"));

// searchBtn click
searchBtn.addEventListener("click", () => getGif(searchInput.value));

// search after keyboard
window.addEventListener("keyup", () => getGif(searchInput.value));

// default param
getGif("cats");
