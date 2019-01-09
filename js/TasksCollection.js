/*
    Author: Patryk Bejcer
    Website: www.patrykbejcer.pl
*/

class TasksCollection {
    constructor() {
        this.tasks = [] //array with Task
    }
    renderTasks() {

    }
    createTask(task) {
        this.tasks.push(task);
    }
    removeTask(index) {
        this.tasks.splice(index, 1);
    }
    searchTask() {

    }

}