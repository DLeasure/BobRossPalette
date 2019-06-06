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
  console.log(e);
  alert(getComputedStyle(target).backgroundColor);
})