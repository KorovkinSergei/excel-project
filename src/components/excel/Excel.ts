import {$} from '../../core/dom'
export class Excel {
  public $el: Element | null
  private components: any []


  constructor(selector:string, options:any) {
    this.$el = document.querySelector(selector)
    this.components = options.components || []
  }

  getRoot() {
    const $root:Element = $.create('div', 'excel')
    this.components = this.components.map(Component => {
      const $el:Element = $.create('div', Component.className)
      const component = new Component($el)
      $el.innerHTML = component.toHTML()
      $root.append($el)
      return component
    })
    return $root
  }
  render() {
    this.$el?.append(this.getRoot())

    this.components.forEach(component => component.init())
  }
}

