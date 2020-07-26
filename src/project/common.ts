// export const TYPE = {
//   Project: Symbol.for('Project'),
// };

export const Project = Symbol.for('Project');

export interface Project {
  init(config: any): void;
}
