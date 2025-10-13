/* about.page.js - restaurant webpage */

export default loadAboutPage;

import {
  removeAllChildElemByClass,
  removeAllChildElemById,
} from "./removeAllChildElem.js";
import createElement from "./element_creator.js";

function loadAboutPage() {
  let contentCnt = document.getElementsByClassName("content");
  removeAllChildElemByClass(contentCnt, 0);

  let subContentCnt = createElement(
    "div",
    ["subContent", "aboutDesc", "container", "transparentBG"],
    "subAboutContentCnt",
  );

}
