import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-App'; 
  todos = [{label: 'Buy Milk ',
  done: false,
  priority: 3},
  {label: 'Pay Mobile Bill ',
  done: true,
  priority: 1},
  {label: 'Clean House',
  done: false,
  priority: 2},
  {label: 'Fix the bulb',
  done: false,
  priority: 5
  }
];
  addTodo(newTodoLabel){
    var newTodo = {
      label: newTodoLabel,
      priority: 1,
      done: false
    };
    this.todos.push(newTodo);
  }
  deleteTodo(todo){
    this.todos = this.todos.filter(t => t.label != todo.label );
  }
}
