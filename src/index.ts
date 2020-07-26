import {injectable, inject, multiInject} from 'inversify';
import container, {App} from './lib/container';
import {Greeter} from './Greeter';
import {Project} from './project';

@injectable()
class MyApp implements App {
  @inject(Greeter)
  public greeter!: Greeter;

  @multiInject(Project)
  protected projects!: Project[];

  start() {
    this.greeter.hi('xx');
    for (let p of this.projects) {
      p.init({a: 200});
    }
  }
}

container.setup(MyApp);
