export const projectsArray = [];
export let notesArray = JSON.parse(localStorage.getItem("notesArray") || "[]");

export class toDo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}
