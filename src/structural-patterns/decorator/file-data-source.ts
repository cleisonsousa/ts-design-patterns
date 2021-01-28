import { DataSource } from './data-source.interface'

export class FileDataSource implements DataSource {
  fileName: string

  constructor (fileName: string) {
    this.fileName = fileName
  }
  
  writeData() {
     return `Write data to file, basic behavior. File name: ${this.fileName}`
  }

  readData() {
    return `Read data from file, basic behavior. File name: ${this.fileName}`
  }
}

export default FileDataSource