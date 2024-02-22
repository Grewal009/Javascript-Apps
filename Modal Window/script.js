const root = document.querySelector("#root");
updateView();

const modalBtns = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modalContainer");
const close = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

function updateView() {
  root.innerHTML =
    /*HTML*/
    `
    <div class="container">
    <div class="btnContainer">
      <button class="show-modal">show modal 1</button>
      <button class="show-modal">show modal 2</button>
      <button class="show-modal">show modal 3</button>
    </div>

    <div class="modalContainer hidden">
      <div class="modalContainerMain">
        <h2>Modal window</h2>
        <button class="close">X</button>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
        distinctio obcaecati debitis repudiandae nostrum fugiat suscipit
        asperiores corrupti necessitatibus, ab praesentium tempore doloremque
        laborum ipsum perspiciatis nisi deleniti incidunt excepturi dolorum
        quia nihil. Eos perferendis culpa illo fugiat nostrum, quasi et rem
        impedit? Repudiandae, exercitationem atque. Tenetur fugiat ipsa
        facere!
      </p>
    </div>
    <div class="overlay hidden"></div>
  </div>
    `;
}
console.log(modalBtns);

for (let i = 0; i < modalBtns.length; i++) {
  modalBtns[i].addEventListener("click", function () {
    removeClass();
  });
}

close.addEventListener("click", addClass);

function closeModal() {
  addClass();
}

function addClass() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
function removeClass() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
overlay.addEventListener("click", addClass);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    console.log(e.key);
    addClass();
  }
});
