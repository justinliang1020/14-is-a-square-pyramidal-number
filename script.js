//script.js
//paste into html file later

// 14 is a square pyramidal number
// △

let n = 3;

function generateLevelString(n) {
  let res = "";
  for (i = 1; i <= n; i++) {
    res += "X".repeat(n);
    if (i !== n) {
      res += "\n";
    }
  }
  return res;
}

function generateEquation(n) {
  let res = "";
  for (i = 1; i <= n; i++) {
    res += i * i;
    if (i !== n) {
      res += " + ";
    }
  }

  return res;
}

function modifyLevel(increase) {
  const pyramids = document.getElementById("pyramids");
  const total = document.getElementById("total");
  const equation = document.getElementById("equation");

  if (increase) {
    n += 1;
    total.textContent = Number(total.textContent) + n * n;

    equation.textContent = generateEquation(n);

    const node = document.createElement("pre");
    node.textContent = generateLevelString(n);
    pyramids.appendChild(node);
  } else {
    total.textContent = Number(total.textContent) - n * n;
    n -= 1;

    equation.textContent = generateEquation(n);

    if (pyramids.lastElementChild) {
      pyramids.removeChild(pyramids.lastElementChild);
    }
  }
}
