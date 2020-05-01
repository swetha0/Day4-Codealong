let button = document.getElementById("theboxes");
button.addEventListener("click", myFunction);
// console.log(button);
var oldValue = 0;
var i = 1;
function myFunction() {
  let n = document.getElementById("number").value;
//   console.log(n);
  n = parseInt(oldValue) + parseInt(n);
//   console.log(n); // This returns as a NAN value This is how you should debug your code
  for (; i <= n; i++) {
    var box = document.createElement("div");
    box.classList.add("myDiv");
    document.getElementById("box").appendChild(box);
    box.innerHTML = i;

    oldValue = document.getElementById("box").lastElementChild.innerHTML;
    console.log(oldValue);
  }
}
