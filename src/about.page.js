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

}
