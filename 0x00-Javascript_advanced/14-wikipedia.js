function createElement(data) {
  let p = document.createElement("p");
  p.innerHTML = data;
  document.body.append(p);
}

function queryWkipedia(callback) {
  let request = new XMLHttpRequest();
  request.load = () => callback(request.response);
  request.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*");

  request.send();
}

queryWkipedia(createElement());
