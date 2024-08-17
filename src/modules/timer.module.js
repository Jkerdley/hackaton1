import { Module } from "../core/module";

export class TimerModule extends Module {
  constructor() {
    super("timer", "Задать таймер");
  }
  trigger() {
    const timerWrapper = document.createElement("div");

    const timer = document.createElement("div");
    timer.style.cssText =
      "padding: 10px; background-color: black; color: white; font-size: 20px; display: inline-block; border-radius: 10px";

    timerWrapper.append(timer);
    let time = Number(prompt("Введите насколько секунд поставить таймер"));
    const startTime = Date.now();

    const p = document.createElement("p");
    p.textContent = "time is over";
    p.style.fontSize = "24px";
    p.style.color = "#ff3c3c";
    p.style.fontWeight = "bold";

    document.body.append(timerWrapper);

    if (isNaN(time)) {
      p.textContent = "Введите число!";
      timer.style.display = "none";
      timerWrapper.append(p);

      setTimeout(() => {
        timerWrapper.remove();
      }, 3000);

      return;
    }
    time *= 1000;

    const endTime = startTime + time;

    timer.textContent = time;
    const interval = setInterval(() => {
      timer.textContent = this.formatDate((endTime - Date.now()) / 1000);
    }, 10);

    setTimeout(() => {
      clearInterval(interval);

      timerWrapper.append(p);
      setTimeout(() => {
        timerWrapper.remove();
      }, 3000);
    }, time);
  }
  formatDate(time) {
    time = time.toFixed(2);

    if (time <= 0) {
      return "00:00";
    }
    if (time < 10) {
      return "0" + time.toString().replace(".", ":");
    }
    return time.toString().replace(".", ":");
  }
}
