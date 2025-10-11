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
  let menuIntro = createElement(
    "p",
    ["intro", "content"],
    "introPara",
    "Here is a sample of the scrumptous food that we have to offer: ",
  );

  let firstImg = createElement("img", ["content", "image"], "firstImg");
  firstImg.src = lasagnaPic;
  let itemDesc1 = createElement(
    "p",
    ["content", "menuDescription"],
    "firstDesc",
    "Come and sample our rich Italian baked Lasagna Bolognese pasta dish, mixed with egg,  and slow-cooked meat sauce (ragù alla Bolognese), and creamy béchamel sauce, all topped with Parmigiano-Reggiano cheese and baked until bubbly and golden.",
  );

  let secondImg = createElement("img", ["content", "image"], "secondImg");
  secondImg.src = sweetSourChixPic;
  let itemDesc2 = createElement(
    "p",
    ["content", "menuDescription"],
    "secondDesc",
    "Another one of our amazing offering is the crispy deep fried chicken dipped in sweet and sour sauce. The golden brown sauce bell peppers, vegetables and pineapple chunks will wake your senses with a zesty tingle and one taste you with an unforgettable sensation.",
  );

  let thirdImg = createElement("img", ["content", "image"], "thirdImg");
  thirdImg.src = steakPic;
  let itemDesc3 = createElement(
    "p",
    ["content", "menuDescription"],
    "thirdDesc",
    "Our farm fresh steak is juicy, full of delicious moisture and as you cut into the steak, the free flowing juices just makes every piece even more delicious. Each bite of that tenderness and taste will you of the beef's freshness.",
  );

  let fourthImg = createElement("img", ["content", "image"], "fourthImg");
  fourthImg.src = spicyLambCurryPic;
  let itemDesc4 = createElement(
    "p",
    ["content", "menuDescription"],
    "fourthDesc",
    "Our flavorful Asian dish of lamb curry, slow-cooked stew of tender lamb in a rich, aromatic sauce made with our very own secret spices and herbs, will definately satisfy your appetite.",
  );
}
