class Dom {
}

export function $() {
  return new Dom()
}

$.create = (tagName, classes = ''):Element => {
  const el:Element = document.createElement(tagName)
  if (classes) {
    el.classList.add(classes)
  }
  return el
}
