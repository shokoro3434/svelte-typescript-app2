import { writable } from "svelte/store";

class ToDoItem{
    text:string;
    status:boolean;
}
export const toDoItems = writable<ToDoItem[]>([
    { text: 'ゴミ出し', status: true },
    { text: 'プログラミング学習', status: false },
    { text: '友達に連絡', status: false }
]);

