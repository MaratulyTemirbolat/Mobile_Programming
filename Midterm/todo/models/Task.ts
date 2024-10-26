import AbstractDateTime from './AbstractDateTime';

export enum TaskStatus {
  PENDING = 'Pending',
  IN_PROGRESS = 'In Progress',
  COMPLETED = 'Completed',
}

export default class Task extends AbstractDateTime {
  public id: number;
  public title: string;
  public description?: string;
  public status: TaskStatus;
  public ownerId: number;

  constructor(
    id: number,
    title: string,
    ownerId: number,
    description?: string,
    status: TaskStatus = TaskStatus.PENDING
  ) {
    super();
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.ownerId = ownerId;
  }
}
