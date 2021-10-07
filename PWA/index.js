if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(function(registration) {}, function(err) {});
  });
}

getResponse = () => {
  const list = document.getElementById("list");
  fetch("https://dev-my-cars-api.azurewebsites.net/api/carModels")
    .then(res => res.json())
    .then(response => {
      response.map(item => {
        const listItem = document.createElement("li");
        listItem.appendChild(document.createTextNode(item));
        list.appendChild(listItem);
      });
    });
};

getResponse();
