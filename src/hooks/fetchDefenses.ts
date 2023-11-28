import { onMount } from "svelte";
import { todos } from "../stores/ToDo"



export const fetchTodos = () => {
  onMount(async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    console.log(res);
    todos.set(await res.json());
  });
};

export const postDefenses = () => {
  onMount(async () => {
    const res = await fetch(
//      "https://api.notion.com/v1/databases/324a458fe0244b64b2159ce2b97ebb73/query",{
        "http://localhost:8080/v1/databases/324a458fe0244b64b2159ce2b97ebb73/query",{
    headers: {
          'Authorization': 'Bearer '+process.env.API_KEY,
          'Content-Type': 'application/json',
          'Notion-Version': '2022-06-28'
        },
        method: 'POST',
        body: undefined,
        credentials: "omit",
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        mode: 'cors'
      });
    console.log(res);
    //todos.set(await res.json());
  });
};
