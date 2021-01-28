import { DataSourceDecorator } from './data-source-decorator'

class CompressionDecorator  extends DataSourceDecorator {
  writeData() {
    return `Compression Decorator + ${super.writeData()}`
  }

  readData() {
    return `Compression Decorator + ${super.readData()}`
  }
}

export default CompressionDecorator
