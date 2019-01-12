/*
    Author: Patryk Bejcer
    Website: www.patrykbejcer.pl
*/

import Task from './Task'
import TasksCollection from './TasksCollection'

export default class Todo {
    constructor() {

        //create html fields relation
        this.addTaskForm = document.querySelector('form');
        this.addTaskFormInput = document.querySelector('form .task-input')
        this.ulTaskList = document.querySelector('ul.task-list')
        this.searchTaskInput = document.querySelector('.search-task input')

        //array for creating sample data.
        this.taskListArr = [
            'Lorem ipsum dolor sit amet ',
            'Consectetur adipiscing elit ',
            'Adipiscing elit ',
            'Elit adipiscing elit ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit '
        ];

        //crate tasks collection (Tasks Object)
        this.tasks = new TasksCollection();

        //start todo class
        this.render();
    }

    render() {

        //create tasks in collection based on earlier created array
        this.renderFakeData();

        //set addEventListeners on event
        this.addTaskForm.addEventListener('submit', this.addTask.bind(this), false); //binding this (default is a target)
        this.searchTaskInput.addEventListener('input', this.searchTask.bind(this), false); //binding this (default is a target)

    }

    //Push new task to tasks array and refresh task list
    addTask(e) {
        e.preventDefault();
        const value = this.addTaskForm.querySelector('input').value;
        if (value === '') return;
        this.tasks.createTask(new Task(value));
        this.renderTaskList(this.tasks.tasks);
        this.clearInputs();
    }

    //remove single task from array and refresh list
    removeTask(e) {
        const index = e.target.parentNode.dataset.key;
        this.tasks.removeTask(index);
        this.renderTaskList(this.tasks.tasks);
        this.clearInputs();
    }

    //render and refresh ul list with data from array.
    renderTaskList(tasks) {
        this.ulTaskList.innerHTML = '';
        this.tasks.tasks.forEach((task, index) => this.createNewLiTodoElementHTML(task, index))
    }

    //search task in tasks array
    searchTask(e) {
        let searchText = e.target.value;
        const searchTasks = this.tasks.tasks.filter(task => task.name.toLowerCase().includes(searchText));
        this.ulTaskList.innerHTML = '';
        searchTasks.forEach((task, index) => this.createNewLiTodoElementHTML(task, index))
    }

    createNewLiTodoElementHTML(task, index) {
        const taskLi = document.createElement('li');
        taskLi.dataset.key = index;
        taskLi.classList.add('list-group-item');
        taskLi.innerHTML = task.name + ' <button class="float-right btn btn-danger btn-sm ">Delete</button>';
        taskLi.querySelector('button').addEventListener('click', this.removeTask.bind(this), false); //binding this (default is a target)
        this.ulTaskList.appendChild(taskLi);
    }

    clearInputs() {
        this.searchTaskInput.value = '';
        this.addTaskFormInput.value = '';
    }

    renderFakeData() {
        //create tasks in collection based on earlier created array
        this.taskListArr.forEach((taskName, index) => {
            const task = new Task(this.taskListArr[index]);
            this.tasks.createTask(task);
        })

        //render list ul > li
        this.renderTaskList(this.tasks);
    }

}
