import 'reflect-metadata';
import {Container} from 'inversify';
import {buildProviderModule} from 'inversify-binding-decorators';
import getDecorators from 'inversify-inject-decorators';

const container = new Container({defaultScope: 'Singleton'});

export const App = Symbol.for('APP');
export interface App {
  start(): void;
}
type Constructor = new (...args: any[]) => App;

class DefaultApp implements App {
  start() {
    throw new Error('implement App::start()');
  }
}

function load() {
  // 通过 inversify 提供的 provide 自动注册
  container.load(buildProviderModule());
}

export default {
  instance: container,
  ...getDecorators(container),
  load,
  setup(C: Constructor) {
    load();

    // 绑定入口
    container.bind<App>(App).to(DefaultApp);
    container.rebind<App>(App).to(C);

    // 启动
    const app = container.get<App>(App);
    app.start();
  },
};
