/*
    Author: Patryk Bejcer
    Website: www.patrykbejcer.pl
*/

export default class TasksCollection {

    constructor() {
        this.tasks = [] //array with Task
    }

    createTask(task) {
        this.tasks.push(task);
    }

    removeTask(index) {
        this.tasks.splice(index, 1);
    }

}
