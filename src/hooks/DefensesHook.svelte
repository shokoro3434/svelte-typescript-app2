<script lang="ts" context="module">
import { onMount } from "svelte";
import { defenses } from "../stores/Defense";

const sort:string = `{ 
    "sorts": [ 
        {
            "property": "id",
            "direction": "ascending"
        }
    ]
}`;

const END_POINT: string = 'http://localhost:8080/v1/databases/' + '324a458fe0244b64b2159ce2b97ebb73' + '/query';
export function fetchDefenses () {
  onMount(async () => {
    const res = await fetch(
      //      "https://api.notion.com/v1/databases/324a458fe0244b64b2159ce2b97ebb73/query",{
      END_POINT, {
      headers: {
        'Authorization': 'Bearer ' + process.env.API_KEY,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28'
      },
      method: 'POST',
      body: sort,
      credentials: "omit",
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      mode: 'cors'
    });
    console.log(res);
    let o = JSON.parse(await res.text());
    defenses.set(o.results);
  });
};
</script>