import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Todo } from "src/models/Todo.model";

@Component({
  selector: "app-todo-items",
  templateUrl: "./todo-items.component.html",
  styleUrls: ["./todo-items.component.css"]
})
export class TodoItemsComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  setClasses() {
    const classes = {
      todo: true,
      "is-completed": this.todo.completed
    };
    return classes;
  }

  onToggle(todo: Todo) {
    todo.completed = !todo.completed;
  }
  onDeleteClick(todo: Todo) {
    this.deleteTodo.emit(todo);
  }
}
