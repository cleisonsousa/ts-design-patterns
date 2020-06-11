import { SingletonClient } from './creational-patterns'
import { DecoratorClient } from './structural-patterns'

const [, , ...argv] = process.argv;

for(let arg of argv) {
  switch (arg) {
    case 'singleton':
      SingletonClient.execute()
      break
    case 'decorator':
      DecoratorClient.execute()
      break
  }
}
