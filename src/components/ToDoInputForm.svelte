<script lang="ts">
    import { toDoItems } from "../stores/ToDoItem";
    import { onMount } from "svelte";

    export let userName;
    let newItem: string = "";
    let newItemInputForm = null;

    onMount(() => {
        newItemInputForm.focus();
    });
    function addToList() {
        $toDoItems = [...$toDoItems, { text: newItem, status: false }];
        newItem = "";
    }
</script>

<input bind:value={newItem} bind:this={newItemInputForm} type="text" placeholder="新しく追加するタスク" />
<button on:click={addToList}>追加</button>

<h3>{userName}のタスクリスト:</h3>
