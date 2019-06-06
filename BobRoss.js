let lastButtonPressed = null;

const redButton = document.querySelector("#red");
redButton.addEventListener("click", function(e) {
    lastButtonPressed = "red";
});

const greenButton = document.querySelector("#green");
greenButton.addEventListener("click", function(e) {
    lastButtonPressed = "green";
});

const blueButton = document.querySelector("#blue");
blueButton.addEventListener("click", function(e) {
    lastButtonPressed = "blue";
});

const squareParent = document.querySelector("#square-parent");

squareParent.addEventListener ("click", function (e) {
  const {currentTarget, target} = e;
  let backgroundColor = getComputedStyle (target).backgroundColor;

  if (lastButtonPressed === "red") {
    if (backgroundColor === "rgb(255, 255, 255)") {
      target.style.backgroundColor = "red";
    } else if ( backgroundColor === "rgb(0, 128, 0)") {
      target.style.backgroundColor = "brown";
    } else if ( backgroundColor === "rgb(0, 0, 255)") {
      target.style.backgroundColor = "purple";
    } else if ( backgroundColor === "rgb(0, 128, 128)") {
      target.style.backgroundColor = "black";
    } 
  }

  if (lastButtonPressed === "green") {
    if (backgroundColor === "rgb(255, 255, 255)") {
      target.style.backgroundColor = "green"
    } else if ( backgroundColor === "rgb(255, 0, 0)") {
      target.style.backgroundColor = "brown";
    } else if ( backgroundColor === "rgb(0, 0, 255)") {
      target.style.backgroundColor = "teal";
    } else if ( backgroundColor === "rgb(128, 0, 128)") {
      target.style.backgroundColor = "black";
    } 
  }

  if (lastButtonPressed === "blue") {
    if (backgroundColor === "rgb(255, 255, 255)") {
      target.style.backgroundColor = "blue";
    } else if ( backgroundColor === "rgb(0, 128, 0)") {
      target.style.backgroundColor = "teal";
    } else if ( backgroundColor === "rgb(255, 0, 0)") {
      target.style.backgroundColor = "purple";
    } else if ( backgroundColor === "rgb(165, 42, 42)") {
      target.style.backgroundColor = "black";
    } 
  }
})