import { TaskStatus } from "./task-status-model";

export interface ITaskModel {
    taskID: string;
    taskName: string;
    taskDescription: string;
    dateModified: Date;
    dateCreated: Date;
    status: TaskStatus;
    tag: ITags[]
  }

  export interface ITags{
    tagId: string;
    name: string;
  }

  export interface IDialogParemeter{
    task: ITaskModel;
  }

