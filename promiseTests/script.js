// fetches Img from server, returns promise
const loadImage = (url) => {
  return new Promise((resolve, reject) => {
    let img = new Image();

    img.onload = () => {
      resolve(img);
    };

    img.onerror = () => {
      let message = "Could not load image at: " + url;
      reject(new Error(message));
    };

    img.src = url;
  });
};

// appends img to DOM
let addImg = (src) => {
  let myImg = document.createElement("img");
  myImg.src = src;
  document.body.appendChild(myImg);
};

// Promise.all only runs after every item is loaded, or throws errors
Promise.all([
  loadImage(
    "https://images.pexels.com/photos/12059750/pexels-photo-12059750.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
  ),
  loadImage(
    "https://images.pexels.com/photos/11700793/pexels-photo-11700793.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
  ),
  loadImage(
    "https://images.pexels.com/photos/11794796/pexels-photo-11794796.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
  ),
]).then((images) => {
  images.forEach((img) => addImg(img.src));
});
