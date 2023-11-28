import { writable,readable } from "svelte/store";

class Defense{
    id:number;
    name:string;
}
export const defences = writable<Defense[]>([]);

