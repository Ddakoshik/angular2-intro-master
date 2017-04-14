import { Component } from '@angular/core';

class Todo {
    constructor(public title: string, 
                public completed: boolean = false ) {
    }
}



const todos: Todo[]=[
{
    title: 'Изучить JavaScript',
    completed: false
},
{
    title: 'Изучить Angular 2',
    completed: true
},
{
    title: 'Написать приложение',
    completed: true
},
    
    
    
];

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.components.html',
    styleUrls: ['app.components.css']
})

export class AppComponent{
    title: string = 'Angular 2Do';
    todos: Todo[] = todos;
    newTodoTitle: string = '';

    create() {
        let todo: Todo = new Todo( this.newTodoTitle );

        this.todos.push(todo);
        this.newTodoTitle = '';

    }

    toggle(todo: Todo ) {
        todo.completed = !todo.completed;
        console.log('toggle', todo);
    }

    delete(todo: Todo) {
        let index = this.todos.indexOf(todo);

        if (index > -1) {
            this.todos.splice(index, 1);
        }
    }

}