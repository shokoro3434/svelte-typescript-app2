<script lang="ts" context="module">
import { onMount } from "svelte";
import { todos } from "../stores/ToDo"


export function fetchTodos () {
  onMount(async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    console.log(res);
    todos.set(await res.json());
  });
};
</script>
