/*
 * index.js - restaurant webpage
 **/
import "./style.css";
import "./style.menu.page.css";
import "./style.about.page.css";
import loadHomePage from "./home.page.js";
import loadAboutPage from "./about.page.js";
import loadMenuPage from "./menu.page.js";

// console.log("Compilation works, hello world!");
let btnGrp = document.getElementsByClassName("button");
Array.from(btnGrp).forEach((btn) => {
  btn.addEventListener("click", btnClick);
});

function btnClick(event) {
  if (event.target.id == "homeBtn") {
    loadHomePage();
    return;
  }
  if (event.target.id == "menuBtn") {
    loadMenuPage();
    return;
  }
  if (event.target.id == "aboutBtn") {
    loadAboutPage();
    return;
  }
}

