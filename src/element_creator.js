/* Function to create and return DOM element */
export default createElement;

/**
 * Example use:
 *   let val = createElement("button",
 *                            ["class_list_item_1", "class_list_item_2"],
 *                            "unique_id",
 *                            "textContent");
 **/

function createElement(elemType, class_list, unique_id, text_content) {
  let element = document.createElement(elemType);

  /* Add class to the element */
  if (!(class_list instanceof Array) && class_list != "") {
    class_list = [class_list];
  }
  if (class_list != "") {
    class_list.forEach((elem) => element.classList.add(elem));
  }

  /* Add id to the element */
  if (unique_id !== "" && !(unique_id === undefined || unique_id === null)) {
    element.setAttribute("id", unique_id);
  }

  /* Add textContent/innerHTML/innerText value */
  if (
    text_content !== "" &&
    text_content !== undefined &&
    text_content !== null
  ) {
    element.textContent = text_content;
  }

  return element;
}
