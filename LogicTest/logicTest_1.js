function anagrams(arr) {
    const anagramMap = {};
    for (let i = 0; i < arr.length; i++) {  
        const sortedString = sortString(arr[i]);
        if (anagramMap[sortedString]) {
            anagramMap[sortedString].push(arr[i]);
        } else {
            anagramMap[sortedString] = [arr[i]];
        }
    }
    const result = [];
    for (let key in anagramMap) {
        result.push(anagramMap[key]);
    }
    return result;
}

function sortString(str) {
    const charMap = {};
    
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    let sortedString = '';
    for (let charCode = 32; charCode <= 126; charCode++) {
        const char = String.fromCharCode(charCode);
        if (charMap[char]) {
            for (let j = 0; j < charMap[char]; j++) {
                sortedString += char;
            }
        }
    }

    return sortedString;
}

const arr = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];
const result = anagrams(arr);
console.log(result);