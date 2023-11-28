import { writable } from "svelte/store";

class ToDo {
    id:number;
    title:string;
    completed:boolean;
}
export const todos = writable<ToDo[]>([]);

