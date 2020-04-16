import Database from './singleton/database'

export class SingletonClient {
  static execute () {
    const s1 = Database.getInstance();
    const s2 = Database.getInstance();

    if (s1 === s2) {
      console.log('Singleton works, both variables contain the same instance.');
    } else {
      console.log('Singleton failed, variables contain different instances.');
    }
  }
}
