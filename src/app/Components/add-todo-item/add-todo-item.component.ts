import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-add-todo-item",
  templateUrl: "./add-todo-item.component.html",
  styleUrls: ["./add-todo-item.component.css"]
})
export class AddTodoItemComponent implements OnInit {
  title: string;

  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    const newTodo = {
      title: this.title,
      completed: false
    };

    const input: HTMLInputElement = document.getElementById("add-title-input");
    input.value = "";

    this.addTodo.emit(newTodo);
  }
}
