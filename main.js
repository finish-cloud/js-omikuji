"use strict";

{
  const btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    // const results = ["大吉", "中吉", "末吉", "凶"];
    // btn.textContent = results[Math.floor(Math.random() * results.length)];

    const n = Math.random();
    if (n < 0.5) {
      btn.textContent = "大吉"; //50%
    } else if (n < 0.8) {
      btn.textContent = "中吉"; //30%
    } else {
      btn.textContent = "凶";
    }
  });
}
