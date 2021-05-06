'use strict'

const tabs = document.getElementsByClassName("tab");
const arrTabs = Array.from(tabs);
const tabContents = document.getElementsByClassName("tab__content");
const arrtabContents = Array.from(tabContents);
let index, exIndex

arrTabs.forEach((elem, index) => (elem.onclick = () => activeTab(index)));

function activeTab(index) {
    exIndex = arrTabs.findIndex((element) =>
      element.className.includes("tab_active")
    );
    arrTabs[exIndex].className = "tab";
    arrtabContents[exIndex].className = "tab__content";
  
    arrTabs[index].className += " tab_active";
    arrtabContents[index].className += " tab__content_active";
  }