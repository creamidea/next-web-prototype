import {fluentProvide, provide} from 'inversify-binding-decorators';
import {Project} from './common';

// @(fluentProvide(Project).whenTargetNamed('web').done())
@provide(Project)
export default class implements Project {
  init(config: any) {
    console.log('>>> web config', config);
  }
}
