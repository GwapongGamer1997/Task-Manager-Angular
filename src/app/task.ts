import { ITaskModel } from "./shared/models/task-model";
import { TaskStatus } from "./shared/models/task-status-model";

export const taskSeed = [
      {taskID: '1', taskName: "Movie night", taskDescription: 'Movie night with Selena Gomez.', dateModified: new Date(), dateCreated: new Date(), status: 0,
      tag: [ 
        { tagId: '1', name: 'Sample'}
      ]},
      {taskID: '2', taskName: "Date Night", taskDesciption: 'Date with Taylor Swift.', lastModified: new Date(), dateCreated: new Date(), status: 0,
      tags: [ 
        { tagId: '1', tagName: 'Sample'}
      ]}
      // {id: '3', taskName: "Movie night", taskDesciption: 'Movie night with Selena Gomez.', completionRate: 2, lastModified: new Date(), dateCreated: new Date(), status: TaskStatus.New,
      // tags: [ 
      //   { tagId: '1', tagName: 'Sample', created: new Date(),  modified: new Date()}
      // ]},
      // {id: '4', taskName: "Movie night", taskDesciption: 'Movie night with Selena Gomez.', completionRate: 5, lastModified: new Date(), dateCreated: new Date(), status: TaskStatus.New,
      // tags: [ 
      //   { tagId: '1', tagName: 'Sample', created: new Date(),  modified: new Date()}
      // ]},
      // {id: '5', taskName: "Movie night", taskDesciption: 'Movie night with Selena Gomez.', completionRate: 3, lastModified: new Date(), dateCreated: new Date(), status: TaskStatus.Completed, 
      // tags: [ 
      //   { tagId: '1', tagName: 'Sample', created: new Date(),  modified: new Date()}
      // ]},
      // {id: '6', taskName: "Movie night", taskDesciption: 'Movie night with Selena Gomez.', completionRate: 4, lastModified: new Date(), dateCreated: new Date(), status: TaskStatus.Completed,
      // tags: [ 
      //   { tagId: '1', tagName: 'Sample', created: new Date(),  modified: new Date()}
      // ]},
      // {id: '7', taskName: "Movie night", taskDesciption: 'Movie night with Selena Gomez.', completionRate: 1, lastModified: new Date(), dateCreated: new Date(), status: TaskStatus.New,
      // tags: [ 
      //   { tagId: '1', tagName: 'Sample', created: new Date(),  modified: new Date()}
      // ]},
      // {id: '8', taskName: "Movie night", taskDesciption: 'Movie night with Selena Gomez.', completionRate: 2, lastModified: new Date(), dateCreated: new Date(), status: TaskStatus.New,
      // tags: [ 
      //   { tagId: '1', tagName: 'Sample', created: new Date(),  modified: new Date()}
      // ]},
      // {id: '9', taskName: "Movie night", taskDesciption: 'Movie night with Selena Gomez.', completionRate: 2, lastModified: new Date(), dateCreated: new Date(), status: TaskStatus.InProgress,
      // tags: [ 
      //   { tagId: '1', tagName: 'Sample', created: new Date(),  modified: new Date()}
      // ]},
      // {id: '10', taskName: "Movie night", taskDesciption: 'Movie night with Selena Gomez.', completionRate: 4, lastModified: new Date(), dateCreated: new Date(), status: TaskStatus.New,
      // tags: [ 
      //   { tagId: '1', tagName: 'Sample', created: new Date(),  modified: new Date()}
      // ]},
      // {id: '11', taskName: "Movie night", taskDesciption: 'Movie night with Selena Gomez.', completionRate: 5, lastModified: new Date(), dateCreated: new Date(), status: TaskStatus.New,
      // tags: [ 
      //   { tagId: '1', tagName: 'Sample', created: new Date(),  modified: new Date()}
      // ]},
      // {id: '12', taskName: "Movie night", taskDesciption: 'Movie night with Selena Gomez.', completionRate: 3, lastModified: new Date(), dateCreated: new Date(), status: TaskStatus.New,
      // tags: [ 
      //   { tagId: '1', tagName: 'Sample', created: new Date(),  modified: new Date()}
      // ]},
      // {id: '13', taskName: "Buy Heart of the Ocean", taskDesciption: 'Buy the heart of the ocean necklace for Athena', completionRate: 5, lastModified: new Date(), dateCreated: new Date(), status: TaskStatus.New,
      // tags: [ 
      //   { tagId: '1', tagName: 'Sample', created: new Date(),  modified: new Date()}
      // ]},
      // {id: '14', taskName: "Movie night", taskDesciption: 'Movie night with Selena Gomez.', completionRate: 3, lastModified: new Date(), dateCreated: new Date(), status: TaskStatus.Completed,
      // tags: [ 
      //   { tagId: '1', tagName: 'Sample', created: new Date(),  modified: new Date()}
      // ]},
      // {id: '15', taskName: "Movie night", taskDesciption: 'Movie night with Selena Gomez.', completionRate: 2, lastModified: new Date(), dateCreated: new Date(), status: TaskStatus.New,
      // tags: [ 
      //   { tagId: '1', tagName: 'Sample', created: new Date(),  modified: new Date()}
      // ]},
      // {id: '16', taskName: "Movie night", taskDesciption: 'Movie night with Selena Gomez.', completionRate: 1, lastModified: new Date(), dateCreated: new Date(), status: TaskStatus.Completed,
      // tags: [ 
      //   { tagId: '1', tagName: 'Sample', created: new Date(),  modified: new Date()}
      // ]},
      // {id: '17', taskName: "Movie night", taskDesciption: 'Movie night with Selena Gomez.', completionRate: 0, lastModified: new Date(), dateCreated: new Date(), status: TaskStatus.New, 
      // tags: [ 
      //   { tagId: '1', tagName: 'Sample', created: new Date(),  modified: new Date()}
      // ]},
      // {id: '18', taskName: "Movie night", taskDesciption: 'Movie night with Selena Gomez.', completionRate: 0, lastModified: new Date(), dateCreated: new Date(), status: TaskStatus.New,
      // tags: [ 
      //   { tagId: '1', tagName: 'Sample', created: new Date(),  modified: new Date()}
      // ]},
      // {id: '19', taskName: "Reserve lunch", taskDesciption: 'Book a lunch for date with Elvie', completionRae: 0, lastModified: new Date(), dateCreated: new Date(), status: TaskStatus.New,
      //   tags: [ 
      //   { tagId: '1', tagName: 'Sample', created: new Date(),  modified: new Date()}
      // ]},
      // {id: '20', taskName: "Workout", taskDesciption: 'Workout with my crush Dianne', completionRate: 1, lastModified: new Date(), dateCreated: new Date(), status: TaskStatus.Completed,
      // tags: [ 
      //   { tagId: '1', tagName: 'Sample', created: new Date(),  modified: new Date()}
      // ]}
]