export class DomListener {
  public $root:Element
  public listeners: string []

  constructor($root, listeners:string[] = []) {
    if (!$root) {
      throw new Error('No $root provided from DomListener')
    }
    this.$root = $root
    this.listeners = listeners
  }
  initDOMListeners() {
    console.log('listeners', this.listeners)
  }

  removeDOMListeners() {}
}
