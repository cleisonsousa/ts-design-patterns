import { Singleton } from './creational-patterns'
import { DecoratorClient } from './structural-patterns'

const [, , ...argv] = process.argv;

for(let arg of argv) {
  switch (arg) {
    case 'singleton':
      console.group('Singleton')
      console.log('-----> Handle singleton with STATIC METHOD <-----')
      Singleton.fakerClient1()
      console.log('-----> Handle singleton with CONSTRUCTOR <-----')
      Singleton.fakerClient2()
      break
    case 'decorator':
      DecoratorClient.execute()
      break
  }
}
