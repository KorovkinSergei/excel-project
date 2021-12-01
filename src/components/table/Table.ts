import {ExcelComponent} from '../../core/ExcelComponent'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  toHTML(): string {
    return '<h1>Table</h1>'
  }
}
