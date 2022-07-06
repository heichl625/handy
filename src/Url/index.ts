import { UrlQuery } from "./urlQuery";

export default class Url {

    private baseUrl: string;
    private queries: UrlQuery;

    constructor(baseUrl: string, queries?: UrlQuery){
        this.baseUrl = baseUrl;
        this.queries = queries || {};
    }

    get(){

        let qs = "?";
        let keyCount = Object.keys(this.queries).length
        for(let i = 0; i<keyCount; i++){
            let key = Object.keys(this.queries)[i];
            qs += `${key}=${this.queries[key]}`

            if(i !==keyCount-1){
                qs += "&"
            }
        }


        return this.baseUrl + qs;
    }

    setQuery(key: string, value: string){
       this.queries[key] = value
    }

    removeQuery(key: string){
        delete this.queries[key];
    }


}