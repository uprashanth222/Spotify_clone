let play = document.getElementById("play");
let gif = document.getElementById("gif");

play.addEventListener("click", () => {
  //   alert("display pause is pressed");
  // alert("just for testing github")
  play.classList.toggle("fa-play");
  play.classList.toggle("fa-pause");
  gif.classList.toggle("video");
});
