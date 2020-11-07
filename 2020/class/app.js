import { randomColor, appendItem } from "./utils/index.js";

const SLIDE_DATA = [1, 2, 3, 4, 5];

const $main = document.querySelector("main");
const $list = document.querySelector(".list");
$list.style.width = `${SLIDE_DATA.length * 300}px`;
$list.addEventListener("click", handleMove());

function isChange(id) {
  return (
    Number(id) === SLIDE_DATA[0] ||
    Number(id) === SLIDE_DATA[SLIDE_DATA.length - 1]
  );
}
function isExistId(id) {
  return !id;
}
function isDirection(direction) {
  if (direction) {
    return "left";
  } else {
    return "right";
  }
}
function isFirst(first) {
  return !!first;
}

function handleMove() {
  function move(id) {
    return `${Number(id) * 300}px`;
  }
  let direction = false;
  let first = true;
  return (event) => {
    const id = event.target.dataset.id;
    if (isExistId(id)) {
      return;
    }
    if (isChange(id)) {
      if (!isFirst(first)) {
        direction = !direction;
      }
    }
    first = false;

    if (isDirection(direction) === "left") {
      $list.style.transform = `translateX(-${move(id - 2)})`;
    } else if (isDirection(direction) === "right") {
      $list.style.transform = `translateX(-${move(id)})`;
    }
  };
}

function makeSlide(items) {
  const sliderFrag = document.createDocumentFragment();
  items.forEach((item) => {
    const slide = document.createElement("div");
    slide.setAttribute("class", "item");
    slide.innerHTML = `<span class="number">${item}</span`;
    slide.dataset.id = item;
    slide.style.backgroundColor = randomColor();
    appendItem(slide, sliderFrag);
  });
  return sliderFrag;
}

appendItem(appendItem(makeSlide(SLIDE_DATA), $list), $main);
