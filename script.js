const linesBlue = document.querySelectorAll(".line-blue");
const roundsBlue = document.querySelectorAll(".round-blue");

const next = document.getElementById("next");
const prev = document.getElementById("prev");

let step = 0;
roundsBlue[step].style.opacity = "1";

if (step === 0) {
  prev.disabled = true;
}
if (step === 4) {
  next.disabled = true;
}

next.addEventListener("click", () => {
  step += 1;
  linesBlue[step - 1].style.transform = "scaleX(1)";
  roundsBlue[step].style.opacity = "1";
  if (step === 0) {
    prev.disabled = true;
  } else {
    prev.disabled = false;
  }
  if (step === 3) {
    next.disabled = true;
  } else {
    next.disabled = false;
  }
});

prev.addEventListener("click", () => {
  step -= 1;
  linesBlue[step].style.transform = "scaleX(0)";
  roundsBlue[step + 1].style.opacity = "0";
  if (step === 3) {
    next.disabled = true;
  } else {
    next.disabled = false;
  }
  if (step === 0) {
    prev.disabled = true;
  } else {
    prev.disabled = false;
  }
});
