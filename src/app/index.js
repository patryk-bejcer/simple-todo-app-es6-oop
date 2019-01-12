/*
    Author: Patryk Bejcer
    Website: www.patrykbejcer.pl
*/

import '../style/app.scss';
import Todo from './Todo'

const initTodoApp = () => {
    const todo = new Todo();
}

//init script after DOM CONTENT LOAD
document.addEventListener("DOMContentLoaded", initTodoApp);
