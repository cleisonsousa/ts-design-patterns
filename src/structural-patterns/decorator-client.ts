import FileDataSource from './decorator/file-data-source'
import EncryptionDecorator from './decorator/encryption-decorator'
import CompressionDecorator from './decorator/compression-decorator'

export class DecoratorClient {
  static execute (): void {
    const fileData = new FileDataSource('text.txt')
    let respWrite = fileData.writeData()
    let respRead = fileData.readData()
    console.log(respWrite)
    console.log(respRead)

    const encryptionDecorator = new EncryptionDecorator(fileData)
    respWrite = encryptionDecorator.writeData()
    respRead = encryptionDecorator.readData()
    console.log(respWrite)
    console.log(respRead)

    const compressionDecorator = new CompressionDecorator(fileData)
    respWrite = compressionDecorator.writeData()
    respRead = compressionDecorator.readData()
    console.log(respWrite)
    console.log(respRead)

    const encryptionDecoratorWithCompression = new EncryptionDecorator(compressionDecorator)
    respWrite = encryptionDecoratorWithCompression.writeData()
    respRead = encryptionDecoratorWithCompression.readData()
    console.log(respWrite)
    console.log(respRead)
  }
}
