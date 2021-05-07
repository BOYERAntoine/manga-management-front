import { Interface } from "readline";
import { Author } from "./authors.model";


export interface Manga{
    id?:number;
    title?:string;
    year?:string;
    cover?:string;
    author?:Author

}

