import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  // todos: Todo[];
  // todosUrl = `https://jsonplaceholder.typicode.com/todos`;

  constructor() {
    // fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then(res => res.json())
    //   .then(data => {
    //     this.todos = data.slice(0, 20);
    //     console.log("fetching todo");
    //   })
    //   .catch(err => console.log(err));
  }

  fetchTodos() {}
}
