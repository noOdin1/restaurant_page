/* removeAllChildElem.js */

export { removeAllChildElemByClass, removeAllChildElemById };

function removeAllChildElemByClass(elem, index) {
  let htmlElem = document.getElementsByClassName(elem);
  let child = htmlElem[index].lastElementChild;

  while (child) {
    htmlElem[index].removeChild(child);
    child = htmlElem[index].lastElementChild;
  }
}

function removeAllChildElemById(elem) {
  let htmlElem = document.getElementById(elem);
  let child = htmlElem.lastElementChild;

  while (child) {
    htmlElem.removeChild(child);
    child = htmlElem.lastElementChild;
  }
}
