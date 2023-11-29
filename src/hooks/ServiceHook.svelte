<script lang="ts" context="module">
import { onMount } from "svelte";
import { services } from "../stores/Service";

const sort:string = `{ 
    "sorts": [ 
        {
            "property": "id",
            "direction": "ascending"
        }
    ]
}`;

const END_POINT: string = 'http://localhost:8080/v1/databases/' + process.env.DB_ID + '/query';
export function fetchServices () {
  onMount(async () => {
    const res = await fetch(
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
    services.set(o.results);
  });
};
</script>