const baseUrl = "https://e-thesis.casa/wp-json/wc/store/products";
const postsContainer = document.querySelector(".carousel")

async function getPosts(url){
    const response = await fetch(url);
    const posts = await response.json();
    posts.forEach((product) => {
        postsContainer.innerHTML += `
        <a href="/pages/details.html?id=${product.id}" class="card">
            <div class="boat">
                <div class="boatSlides">
                    <div class="name">${product.name}</div>
                    <img src="${product.images[0].src}" style="width:100%;" alt="${product.name} link">
                </div>
            </div>
        </a>`;
        });
}

getPosts(baseUrl);

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("boatSlides");
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}
