window.onload = function () {
  fetchAndRenderArticles();
};

function success(x) {
  console.log("Success:", x);
}

function error(e) {
  console.log("Error:", e);
}

function fetchAndRenderArticles() {
  fetch("http://ec2-3-249-202-253.eu-west-1.compute.amazonaws.com/articles")
    .then((response) => response.json())
    .then((articles) => {
      console.log(articles);

      for (let i = 0; i < articles.length; i++) {
        console.log(articles.length);
        let title = document.createElement("h3");
        let desc = document.createElement("p");
        let author = document.createElement("p");
        let body = document.createElement("article");

        title.innerHTML = articles[i].title;
        desc.innerHTML = articles[i].description;
        author.innerHTML = articles[i].author;
        body.innerHTML = articles[i].body;

        let container = document.createElement("div");
        container.className = "articles-container";
        container.appendChild(title);
        container.appendChild(desc);
        container.appendChild(author);
        container.appendChild(body);

        document.getElementById("result").appendChild(container);
      }
    });
}
