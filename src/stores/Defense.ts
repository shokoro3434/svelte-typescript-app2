import { writable, readable } from "svelte/store";
/*
class Results{
    properties:Properties;
}
class Properties{
    id:number;
    name:string;
}
class Id{
    number:number;
}
class Name{

}
class rich_text
class Defense{
    object:string;
    results:Results[];
}
*/
const results = [
    {
        properties: {
            id: {
                "number": 0
            },
            name: {
                rich_text:[
                    {
                        plain_text: '',
                    }
                ],
            }
        }
    }
]

export const defenses = writable(results);

