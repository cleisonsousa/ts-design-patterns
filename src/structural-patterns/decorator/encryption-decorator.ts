import { DataSourceDecorator } from './data-source-decorator'

class EncryptionDecorator extends DataSourceDecorator {
  writeData() {
    return `Encryption Decorator + ${super.writeData()}`
  }

  readData() {
    return `Encryption Decorator + ${super.readData()}`
  }
}

export default EncryptionDecorator