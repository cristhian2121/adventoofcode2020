import { Data } from "./data_day_2.ts";

const passwords = [
    "1-3 a: abcde",
    "1-3 b: cdefg",
    "2-9 c: ccccccccc"
]

const findMachNumber = (character: string, text: string): number => {
    character = character.replace(":", "");
    const regex = new RegExp(`${character}`, "g");
    const matchArray = text.match(regex);
    return matchArray ? matchArray.length : 0;
}

function numberRange(rangeStr: string): { a: number, b: number } {
    const rangeArray = rangeStr.split("-");
    return {
        a: parseInt(rangeArray[0]),
        b: parseFloat(rangeArray[1])
    }
}

let valit = 0;
for (const word of Data) {
    const passwordArray = word.split(" ");
    const machNumber = findMachNumber(passwordArray[1], passwordArray[2])
    const { a, b } = numberRange(passwordArray[0]);
    if (a <= machNumber && machNumber <= b) {
        // console.log(`In register ${word} I find ${machNumber} times    Correct`);
        valit++
        continue;
    }
    // console.log(`In register ${word} No exist coincidences     Wrong`);
}
console.log("Valits", valit);


