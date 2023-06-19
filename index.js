const NEW_TITLE = "Ура, теперь не скучно 🔥";

const backgroundNode = document.getElementById("background");
const titleNode = document.getElementById("title");
const textNode = document.getElementById("text");
const buttonNode = document.getElementById("button");

buttonNode.addEventListener("click", function () {
  fetch("http://www.boredapi.com/api/activity/")
    .then((response) => response.json())
    .then((res) => {
    //   if (res.status !== "success") {
    //     return;
    //   };

      textNode.innerText = `${res.activity}!`;
      renderGreenColor();
    });
});

function renderGreenColor() {
  backgroundNode.classList.add("background-green");
  titleNode.innerHTML = NEW_TITLE;
}
