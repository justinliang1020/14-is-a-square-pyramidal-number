// paste this into the script tag of `template.html`
let n = 3;
function modifyLevel(increase) {
  const levels = document.getElementById("levels");
  const total = document.getElementById("total");
  const equation = document.getElementById("equation");
  if (increase) {
    n += 1;
    const el = document.createElement("pre");
    el.textContent = Array(n)
      .fill()
      .map(() => "꩜".repeat(n))
      .join("\n");
    levels.appendChild(el);
  } else if (n > 1) {
    n -= 1;
    levels.removeChild(levels.lastElementChild);
  }
  equation.textContent =
    Array(n)
      .fill()
      .map((_, i) => (i + 1) ** 2)
      .join(" + ") + ` = ${getPyr(n)}`;
  total.textContent = getPyr(n);
}
function getPyr(n) {
  return (n * (n + 1) * (2 * n + 1)) / 6;
}
