import {provide} from 'inversify-binding-decorators';
import {Project} from './common';

@provide(Project)
export default class implements Project {
  init(config: any) {
    console.log('>>> mobile config', config);
  }
}
