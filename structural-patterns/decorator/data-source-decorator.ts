import { DataSource } from './data-source.interface'

export class DataSourceDecorator implements DataSource {
  protected wrapper: DataSource

  constructor (wrapper: DataSource) {
    this.wrapper = wrapper
  }

  writeData() {
    return this.wrapper.writeData()
  }

  readData() {
    return this.wrapper.readData()
  }
}