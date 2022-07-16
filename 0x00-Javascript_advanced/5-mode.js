/* simple JS script */

function changeMode(size, weight, transform, background, color) {
   return () => {
    document.body.style.color = color;
    document.body.style.fontWeight = weight;
    document.body.style.backgroundColor = background;
    document.body.style.fontSize = size;
    document.body.style.textTransform = transform;
   };
}

function main() {
  let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  let screamMode = changeMode(12, "normal", "lowercase", "white", "black");
  let p = document.createElement('p');
  let sBtn = document.createElement('button');
  sBtn.innerHTML = "Spooky";
  sBtn.onclick = spooky;
  let darkBtn = document.createElement('button');
  darkBtn.innerHTML = "Dark Mode";
  darkBtn.onclick = darkMode;
  let screamBtn = document.createElement('button');
  screamBtn.innerHTML = "Scream Mode"
  screamBtn.onclick = screamMode;
  p.innerHTML = "Welcome Holberton!";
  document.body.appendChild(p);
  document.body.appendChild(sBtn);
  document.body.appendChild(darkBtn);
  document.body.appendChild(screamBtn);

}

main();
