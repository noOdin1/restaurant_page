/* home.page.js - restaurant webpage */
export default loadHomePage;
import elementCreator from "./element_creator.js";
import {
  removeAllChildElemByClass,
  removeAllChildElemById,
} from "./removeAllChildElem.js";

function loadHomePage() {
  let mainContentParagraph = elementCreator(
    "p",
    "description",
    "",
    "Welcome to this little hideaway from the hustle and bustle of the city. Come in, enjoy and relax in the quietness, the soothing atmosphere that we offer. You can find that our setting suits romantic dinner, family dinner or a first time rendezvous. Your evening will be personally attended by our expert staff. Their expertise and dedication is to ensure that you enjoy your dining experience with us. Our chefs will dazzle you with our fine food preparation. The food here will no doubt satisfy your hunger but much more that that it will leave you with a memorable taste and experience of City Hideaway Restaurant. Our restaurant operating hours are:",
  );
  let linebreak1 = elementCreator("br");
  let linebreak2 = elementCreator("br");
  let linebreak3 = elementCreator("br");
  mainContentParagraph.appendChild(linebreak1);
  mainContentParagraph.appendChild(linebreak2);
  mainContentParagraph.appendChild(linebreak3);

  let unorderedLst = elementCreator("ul", "operatingHours");
  let listItems1 = elementCreator(
    "li",
    "operatingHours",
    "",
    "Mon to Fri - 8am to 2am",
  );
  let listItems2 = elementCreator(
    "li",
    "operatingHours",
    "",
    "Sat, Sun and Public Holidays - 8am to 4am",
  );

  unorderedLst.appendChild(listItems1);
  unorderedLst.appendChild(listItems2);

  let contentCnt = document.getElementsByClassName("content");
  contentCnt[0].appendChild(mainContentParagraph);
  contentCnt[0].appendChild(unorderedLst);
}
