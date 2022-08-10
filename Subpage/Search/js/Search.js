document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".btn").addEventListener("click", function () {
    let newP = document.createElement("p");
    let colorName = document.querySelector(".color_name");
    let newTxt = document.createTextNode(colorName.value);
    newP.appendChild(newTxt);

    let newSpan = document.createElement("span");

    let spanTxt = document.createTextNode("X");

    // spanTxt를 newSpan의 자식으로 등록

    newSpan.appendChild(spanTxt);

    // class='delete'

    newSpan.setAttribute("class", "delete");

    // newP의 자식으로 newSpan 등록

    newP.appendChild(newSpan);

    let colorList = document.querySelector(".color_list");

    // colorList.appendChild(newP)

    colorList.insertBefore(newP, colorList.childNodes[0]);

    colorName.value = "";

    let delBtns = document.querySelectorAll(".delete");

    for (let i = 0; i < delBtns.length; i++) {
      delBtns[i].addEventListener("click", function () {
        if (this.parentNode.parentNode) {
          this.parentNode.parentNode.removeChild(this.parentNode);
        }
      });
    }
  });
});
