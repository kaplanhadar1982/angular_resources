export class Todo{
    task: string;
    creator: string

    constructor(task?: string,creator?: string){
        this.task = task;
        this.creator = creator
    }
}