import { SingletonClient } from './creational-patterns'
import { DecoratorClient } from './structural-patterns'

for(let arg of process.argv) {
  switch (arg) {
    case 'singleton':
      SingletonClient.execute();
      break
    case 'decorator':
      DecoratorClient.execute();
      break
  }
}
