// const image = document.querySelector(".img-main");
// const imageSwap = document.querySelector(".img-swap");

// imageSwap.setAttribute("hidden", "true");

// image.addEventListener("click", () => {
//       image.setAttribute("hidden", "true");
//       imageSwap.removeAttribute("hidden");
// });
// image.addEventListener("click", () => {
//       image.removeAttribute("hidden");
//       imageSwap.setAttribute("hidden", "true");
// });

function changeImage() {
      const image = document.getElementById("myImage");

      if (image.src.match("./images/img-main1.png")) {
            image.src = "./images/img-swap1.png";
      } else {
            image.src = "./images/img-main1.png";

      }
}
