
function calculateArea(width, height) {
  return width * height; // returns area
}

let boxClicked = false;


function toggleBoxAnimation() {
  const box = document.getElementById("animateBox");
  boxClicked = !boxClicked; // flip 

  if (boxClicked) {
    box.classList.add("move");
  } else {
    box.classList.remove("move");
  }
}

function logBoxStatus() {
  let message = boxClicked ? "Box is animated!" : "Box is still.";
  console.log(message);
}


document.getElementById("animateBtn").addEventListener("click", () => {
  toggleBoxAnimation();
  logBoxStatus();
});

//popup
const modal = document.getElementById("modal");
document.getElementById("openModal").addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("show");
});

document.getElementById("closeModal").addEventListener("click", () => {
  modal.classList.remove("show");
  // Delays hiding completely until after animation ends
  setTimeout(() => {
    modal.classList.add("hidden");
  }, 600);
});

console.log("Area of 5x10 box:", calculateArea(5, 10));
