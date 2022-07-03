const baseUrl = "https://e-thesis.casa/wp-json/wc/store/products";
const postsContainer = document.querySelector(".posts")

async function getPosts(url){
    const response = await fetch(url);
    const posts = await response.json();
    posts.forEach(function(product){
        postsContainer.innerHTML +=`<a href="details.html?id=${product.id}"><div class="${product.tags[0].name}">
        <img class="boatImage" alt="${product.name} link" src="${product.images[0].src};">
        <div class="text"><h2>${product.name}</h2>
        <div class="short-description"><h3>${product.short_description}</h3></div></div></a>`
    });
};

getPosts(baseUrl);
