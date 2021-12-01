import {DomListener} from './DomListener'

interface Options {
  name?: string
  listeners?: string[]
}

export class ExcelComponent extends DomListener {
  constructor($root, options: Options = {}) {
    super($root, options.listeners)
  }
  // возвращет шаблон компонента
  toHTML() {
    return ''
  }

  init() {
    this.initDOMListeners()
  }
}
