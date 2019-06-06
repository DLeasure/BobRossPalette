const squareParent = document.querySelector("#square-parent");

squareParent.addEventListener ("click", function (e) {
  const {currentTarget, target} = e;
  console.log(e);
  alert(getComputedStyle(target).backgroundColor);
})