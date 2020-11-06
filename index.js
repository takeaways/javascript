const app = document.querySelector(".app");
const frag = document.createDocumentFragment();
for (let i = 0; i < 1001; i++) {
  const el = document.createElement("div");
  el.innerText = `Ele - ${i}`;
  frag.appendChild(el);
}

app.appendChild(frag);
