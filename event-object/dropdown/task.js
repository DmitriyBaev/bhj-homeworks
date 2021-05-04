const dropdownValue = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");
const dropLinks = document.getElementsByClassName("dropdown__link");
const arrDropLinks = Array.from(dropLinks);

dropdownValue.addEventListener("click", dropDownList);

function dropDownList() {
  if (dropdownList.className.includes(" dropdown__list_active")) {
    dropdownList.className = "dropdown__list";
  } else {
    dropdownList.className += " dropdown__list_active";
    arrDropLinks.forEach((element) => {
      element.onclick = () => {
        dropdownValue.textContent = element.textContent;
        dropdownList.className = "dropdown__list";
        return false;
      }
    })
  }
}
