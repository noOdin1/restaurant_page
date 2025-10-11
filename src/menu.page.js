/* menu.page.js - restaurant webpage */
export default loadMenuPage;
import {
  removeAllChildElemByClass,
  removeAllChildElemById,
} from "./removeAllChildElem.js";
import createElement from "./element_creator.js";
/* import images for html use */
import lasagnaPic from "./lasagna_193x128.jpg";
import sweetSourChixPic from "./sweetSourChicken_192x128.jpg";
import steakPic from "./steak.jpg";
import spicyLambCurryPic from "./spicy_lamb_curry.jpg";

function loadMenuPage() {
  let contentCnt = document.getElementsByClassName("content");
  removeAllChildElemByClass(contentCnt, 0);

  let subContentCnt = createElement(
    "div",
    ["subContent", "container"],
    "subContentCnt",
  );
}
