const postsContainer = document.querySelector(".details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");


console.log(id);

const url = "https://e-thesis.casa/wp-json/wc/store/products/" + id;

console.log(url);

async function getPosts() {

    try {
        const response = await fetch(url);
        const products = await response.json();
        console.log(products);
        createHtml(products);
    }
    catch(error) {
        console.log(error);
        postsContainer.innerHTML = message("error", error);
    }
    
}

getPosts();

function createHtml(product) {
    postsContainer.innerHTML = `
    <img class="modal-target" alt="${product.name} modal" src="${product.images[0].src};">
    <h1>${product.name}</h1>
    <h3>${product.short_description}</h3>
    <p>${product.description}</p>
    `;
}

var modal = document.getElementById('modal');

document.addEventListener('click', function (e) { 
  if (e.target.className.indexOf('modal-target') !== -1) {
      var img = e.target;
      var modalImg = document.getElementById("modal-content");
      modal.style.display = "block";
      modalImg.src = img.src;
    }else  {
        modal.style.display = "none";
    }
});
