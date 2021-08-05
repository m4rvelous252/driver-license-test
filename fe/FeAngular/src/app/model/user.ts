import { DateTime } from "luxon";

export interface User {
    id?: number,
    username?: string,
    password?: string,
    name?: string,
    img?: string,
    save?:boolean,
    logintime?: string,
};