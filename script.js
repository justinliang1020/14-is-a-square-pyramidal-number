let n = 3;

function modifyLevel(increase) {
  const pyramids = document.getElementById("pyramids");
  const total = document.getElementById("total");
  const equation = document.getElementById("equation");
  if (increase) {
    n += 1;
    pyramids.appendChild(generateLevelPre(n));
  } else if (n > 1) {
    n -= 1;
    pyramids.removeChild(pyramids.lastElementChild);
  }
  equation.textContent = generateEquation(n);
  total.textContent = getP(n);
}

function getP(n) {
  let res = 0;
  for (i = 1; i <= n; i++) {
    res += i * i;
  }
  return res;
}

function generateLevelPre(n) {
  let res = "";
  for (i = 1; i <= n; i++) {
    res += "꩜".repeat(n);
    if (i !== n) {
      res += "\n";
    }
  }
  const node = document.createElement("pre");
  node.textContent = res;
  return node;
}

function generateEquation(n) {
  let res = "";
  for (i = 1; i <= n; i++) {
    res += i * i;
    if (i !== n) {
      res += " + ";
    }
  }
  res += ` = ${getP(n)}`;

  return res;
}
