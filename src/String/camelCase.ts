import { capitalizeFirstLetter } from "./capitalizeFirstLetter";

export function camelCase(str: string){

    let splittedStr = str.split(" ");
    let camelCaseStr = splittedStr.map((word, i) => {
        if(i === 0) return word;
        return capitalizeFirstLetter(word);
    })

    return camelCaseStr.join("")

}