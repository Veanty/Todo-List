import { deleteNote } from "./utils";
import { notesArray } from "./toDoClass";

let i = 1;

export const createCard = (
  newNoteTitleValue,
  newNoteDescValue,
  newDueDateValue,
  newNotePrioValue
) => {
  const notes = document.querySelector(".notes");

  const card = document.createElement("div");
  card.classList.add("card");
  notes.appendChild(card);
  card.style.cursor = "pointer";

  card.addEventListener("click", function () {
    this.classList.toggle("show");
  });

  const cardMain = document.createElement("div");
  cardMain.classList.add("card-main");
  card.appendChild(cardMain);

  const title = document.createElement("div");
  title.contentEditable = `false`;
  title.classList.add("title");
  title.spellcheck = ``;
  title.value = `${newNoteTitleValue}`;
  title.innerHTML = `<span value='${newNoteTitleValue}'>${newNoteTitleValue}</span>`;
  title.style.textDecoration = "underline";
  cardMain.appendChild(title);

  const dueDate = document.createElement("div");
  dueDate.classList.add("dueDate");
  dueDate.style.color = `gray`;
  dueDate.innerHTML = `Due to: ${newDueDateValue}`;
  cardMain.appendChild(dueDate);

  const desc = document.createElement("div");
  desc.classList.add("desc");
  desc.innerHTML = `“${newNoteDescValue}„`;
  card.appendChild(desc);

  const deleteButton = document.createElement("span");
  title.appendChild(deleteButton);
  deleteButton.setAttribute("value", title);
  deleteButton.classList.add("delete-button", "material-symbols-outlined");
  deleteButton.textContent = `close`;
  deleteButton.addEventListener("click", deleteNote);

  const helper = document.createElement("div");
  helper.classList.add("helper");
  helper.appendChild(deleteButton);
  title.appendChild(helper);

  i++;
};
