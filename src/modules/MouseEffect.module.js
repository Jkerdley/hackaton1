import { Module } from "../core/module";
import { getRandomColor, random } from "../utils";

const effects = [cirlce, buble, square];
// const effects = [square];

export class MouseEffectModule extends Module {
  // constructor() {
  //   super("mouse-effect", "Добавить случайный эфект мышке");
  // }
  trigger() {
    document.body.removeEventListener("mousemove", this.func);
    this.func = this.mousemoveHandler();
    console.log(this.func);

    document.body.addEventListener("mousemove", this.func);
  }
  mousemoveHandler() {
    return effects[random(0, effects.length - 1)];
  }
}

function cirlce(e) {
  // console.log(e);

  const figure = document.createElement("div");
  figure.style.cssText =
    "border-radius: 50%; transition: .5s; transform: scale(2)";
  figure.style.width = "10px";
  figure.style.height = "10px";
  figure.style.backgroundColor = getRandomColor();
  figure.style.position = "absolute";
  figure.style.top = `${e.clientY}px`;
  figure.style.left = `${e.clientX}px`;
  document.body.append(figure);

  // figure.style.cssText = "transform: scale(10)";

  setTimeout(() => {
    figure.style.transform = "scale(10)";
    figure.style.opacity = "0.2";

    setTimeout(() => {
      figure.remove();
    }, 500);
  }, 100);
}

function buble(e) {
  // console.log(this);

  const figure = document.createElement("div");
  figure.style.cssText =
    "border-radius: 50%; transition: .5s; transform: translateY(0px)";
  figure.style.width = "10px";
  figure.style.height = "10px";
  figure.style.backgroundColor = getRandomColor();
  figure.style.position = "absolute";
  figure.style.top = `${e.clientY}px`;
  figure.style.left = `${e.clientX}px`;
  document.body.append(figure);

  setTimeout(() => {
    // figure.style.transform = `translateY(100%)`;
    figure.style.top = "100%";
    figure.style.opacity = ".5";

    setTimeout(() => {
      figure.remove();
    }, 1000);
  }, 100);
}

function square(e) {
  const figure = document.createElement("div");
  figure.style.cssText = " transition: .5s; ";
  figure.style.transform = `translate(
    ${random(-10, 10)}px, ${random(-10, 10)}px)`;

  figure.style.width = "10px";
  figure.style.height = "10px";
  figure.style.backgroundColor = getRandomColor();
  figure.style.position = "absolute";
  figure.style.top = `${e.clientY}px`;
  figure.style.left = `${e.clientX}px`;
  document.body.append(figure);

  setTimeout(() => {
    figure.style.transform = `translate(
      ${random(-50, 50)}px, ${random(-50, 50)}px)`;

    figure.style.opacity = ".5";

    setTimeout(() => {
      figure.remove();
    }, 1000);
  }, 100);
}
