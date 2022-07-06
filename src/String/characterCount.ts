export function characterCount(str: string){
    return str.replace(/[\s\t\n]/g, "").length;
}