import {provide} from 'inversify-binding-decorators';

export interface Greeter {
  hi(name: string): void;
}

@provide(Greeter)
export class Greeter {
  hi(name: string) {
    const message = `Hi, ${name}!`;
    console.info(message);
  }
}
