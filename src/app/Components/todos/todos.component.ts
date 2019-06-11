import { Component, OnInit } from "@angular/core";
import { Todo } from "src/models/Todo.model";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  lastId = 6;
  todosUrl = `https://jsonplaceholder.typicode.com/todos?_limit=${this.lastId}`;

  constructor() {}

  addTodo(todo: Todo) {
    this.lastId++;
    todo.id = this.lastId;
    this.todos.push(todo);
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
    console.log(`Delete todo item: ${todo.id}`);
  }

  ngOnInit() {
    fetch(this.todosUrl)
      .then(res => res.json())
      // .then(data => (this.todos = data.slice(0, 20)))
      .then(data => (this.todos = data))
      .then(() => console.log("this.todos: ", this.todos))
      .catch(err => console.log(err));
  }
}
