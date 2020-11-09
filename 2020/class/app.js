import { randomColor, appendItem } from "./utils/index.js";

class Slide {
  constructor(slideData) {
    this.currentIndex = 0;
    this.slideData = slideData;
    this.$list = document.createElement("ul");
    this.$list.setAttribute("class", "list");
    this.$list.style.width = `${slideData.length * 300}px`;
    this.$list.addEventListener("click", this.handleMove());
    appendItem(this.makeSlide(slideData), this.$list);
  }
  handleMove() {
    const move = (id) => {
      console.log(id, this.slideData.length);
      if (this.slideData.length < id || id < 0) {
        return;
      }
      return `${Number(id) * 300}px`;
    };

    let direction = false;
    let first = true;
    return (event) => {
      let id;
      if (typeof event === "number") {
        id = event;
      } else if (event?.target.dataset.id) {
        id = event.target.dataset.id;
      } else {
        id = Number(this.currentIndex) + 1;
      }

      this.currentIndex = id;

      if (this.isChange(this.currentIndex)) {
        if (!this.isFirst(first)) {
          direction = !direction;
        }
      }
      first = false;

      if (this.isDirection(direction) === "left") {
        this.$list.style.transform = `translateX(-${move(id - 2)})`;
      } else if (this.isDirection(direction) === "right") {
        this.$list.style.transform = `translateX(-${move(id)})`;
      }
    };
  }
  makeSlide(items) {
    const sliderFrag = document.createDocumentFragment();
    items.forEach((item, index) => {
      const slide = document.createElement("div");
      slide.setAttribute("class", "item");
      slide.innerHTML = `<span class="number">${item}</span`;
      slide.dataset.id = index + 1;
      slide.style.backgroundColor = randomColor();
      appendItem(slide, sliderFrag);
    });
    return sliderFrag;
  }
  isChange(id) {
    return Number(id) === 1 || Number(id) === this.slideData.length;
  }
  isExistId(id) {
    return !id;
  }
  isDirection(direction) {
    if (direction) {
      return "left";
    } else {
      return "right";
    }
  }
  isFirst(first) {
    return !!first;
  }
}

const $main = document.querySelector("main");
const $up = document.querySelector("#up");
const s1 = new Slide(["a", "b", "c", "d", "e"]);
$up.addEventListener("click", () => {
  const handler = s1.handleMove();
  handler();
});

appendItem(s1.$list, $main);
appendItem(new Slide(["1", "2", "3", "4", "5", "6"]).$list, $main);
appendItem(new Slide(["a", "b", "c", "d", "e"]).$list, $main);
