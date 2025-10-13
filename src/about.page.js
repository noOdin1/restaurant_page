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

  let subContentParaCnt = createElement(
    "p",
    ["restaurantDesc", "intro", "content"],
    "aboutDescPara",
    "City Hideaway Restaurant is staffed by people who are experts in their field. We are conveniently located in a quiet part of the city, easily accessible and a huge parking space available. Make a reservation with us, ",
  );

  let contactFrm = createElement(
    "form",
    ["transparentBG"],
    "customerContactForm",
  );

  contactFrm.method = "post";

  let formFieldset = createElement(
    "fieldset",
    ["transparentBG"],
    "formFieldset",
  );

  subContentCnt.appendChild(subContentParaCnt);
}
