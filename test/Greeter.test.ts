import container from '../src/lib/container';
import {Greeter} from '../src/Greeter';

container.load();

describe('test hello', () => {
  beforeEach(() => {
    // https://github.com/inversify/InversifyJS/blob/master/wiki/container_snapshots.md
    // create a snapshot so each unit test can modify
    // it without breaking other unit tests
    container.instance.snapshot();
    jest.spyOn(global.console, 'info');
  });

  afterEach(() => {
    // Restore to last snapshot so each unit test
    // takes a clean copy of the application container
    container.instance.restore();
    jest.clearAllMocks();
  });

  it('should say hi, xx', () => {
    const g = container.instance.get<Greeter>(Greeter);
    g.hi('xx');
    expect(console.info).toBeCalledWith(`Hi, xx!`);
  });

  it('should not say hi, yy', () => {
    const g = container.instance.get<Greeter>(Greeter);
    g.hi('xx');
    expect(console.info).not.toEqual(`Hi, yy!`);
  });
});
