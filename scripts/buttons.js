const buttonsArr = document.querySelector(".projects-list").children;

for (let i = 0; i < buttonsArr.length; i++) {
      buttonsArr[i].addEventListener("click", () => {
            window.location.href = `./projects${i}.html`;

      });
}