import String from "./String";
import Url from './Url';

let url = new Url("https://google.com", {
    page: "1"
});

console.log(url.get());

url.setQuery("limit", "10")
console.log(url.get());

url.setQuery("token", "abc")
url.removeQuery("limit");
console.log(url.get())