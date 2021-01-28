import Database1 from './singleton/ex_01_database'
import Database2 from './singleton/ex_02_database'

export class Singleton {
  static fakerClient1 (): void {
    const s1 = Database1.getInstance('postgresql')
    const s2 = Database1.getInstance()
    const s3 = Database1.getInstance()

    if (s1 === s2 && s2 === s3) {
      console.log('Singleton its\'s works, the all variables contain the same instance.');
      console.log(s1.getName)
      console.log(s2.getName)
      console.log(s1.getName)
    } else {
      console.log('Singleton failed, variables contain different instances.')
    }
  }

  static fakerClient2 (): void {
    const s1 = new Database2('mongoDB')
    const s2 = new Database2('postresql')
    const s3 = new Database2()
    
    if (s1 === s2 && s2 === s3) {
      console.log('Singleton it\'s works, the all variables contain the same instance.');
      console.log(s1.getName)
      console.log(s2.getName)
      console.log(s3.getName)
    } else {
      console.log('Singleton failed, variables contain different instances.')
    }
  }
}
