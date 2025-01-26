import * as fs from "fs";

export function readUserDataFromLocalStorage() {
    const data = localStorage.getItem('userDetails');
    if (!data) {
        // read data from default.json file
        const data = fs.readFileSync('default.json', 'utf8');
        localStorage.setItem('userDetails', data);
    }
    return data;
}
