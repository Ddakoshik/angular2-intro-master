import { Component } from '@angular/core';

const todos=[
    'Изучить JavaScript',
    'Изучить Angular 2',
    'Написать приложение'
];

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.components.html',
    styleUrls: ['app.components.css']
})

export class AppComponent{
    title = 'Angular 2Do';
    todos = todos;

}