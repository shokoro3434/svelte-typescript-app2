<script lang="ts">
  import { todos } from "../stores/ToDo";
  import { defenses } from "../stores/Defense";
  import { fetchDefenses } from "../hooks/DefensesHook.svelte";
  import { fetchTodos } from "../hooks/ToDoHook.svelte";
  fetchDefenses();
  fetchTodos();
</script>

<h2>onMountの例</h2>
<ul>
  <div>
    {#each $todos as todo}
      <li>
        {todo.id}
        {todo.title}
        <input type="checkbox" checked={todo.completed} />
      </li>
    {:else}
      <div>Loading...</div>
    {/each}
  </div>
</ul>
<h2>受けプレイ</h2>
<ul>
  <div>
    {#each $defenses as rec}
      <li>
        { rec.properties.id.number }
        { rec.properties.name.rich_text[0].plain_text }
      </li>
    {:else}
      <div>Loading...</div>
    {/each}
  </div>
</ul>

<style>
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
  }
  li {
    text-align: left;
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem 2rem;
  }
  li:nth-child(2n + 1) {
    background-color: #6998ab;
  }
  li:nth-child(2n) {
    background-color: #406882;
  }
  input {
    margin: 0 1rem;
  }
</style>
