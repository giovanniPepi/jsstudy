const moreCats = document.querySelector(".moreCats");
const searchBtn = document.querySelector(".go");
const searchInput = document.querySelector("#search");
const errorDiv = document.querySelector(".errorDiv");
const img = document.querySelector("img");

getGif = async (param) => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=KEY=${param}`,
    {
      mode: "cors",
    }
  );
  // Because .json() returns a promise, we can use await to assign the response to a variable.
  const gifData = await response.json();
  const gifSrc = gifData.data.images.original.url;
  img.src = gifSrc;
};

//listeners
moreCats.addEventListener("click", () => getGif("cats"));

// searchBtn click
searchBtn.addEventListener("click", () => getGif(searchInput.value));

// search after keyboard
window.addEventListener("keyup", () => getGif(searchInput.value));

// default param
getGif("cats");
