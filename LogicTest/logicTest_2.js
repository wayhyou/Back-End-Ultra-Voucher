function sortString(string) {
    let charArray = [];
    
    for (let i = 0; i < string.length; i++) {
        charArray.push(string.charAt(i));
    }
    
    for (let i = 0; i < charArray.length; i++) {
        for (let j = i + 1; j < charArray.length; j++) {
            if (charArray[i] > charArray[j]) {
                let temp = charArray[i];
                charArray[i] = charArray[j];
                charArray[j] = temp;
            }
        }
    }
    
    let sortedStr = '';
    for (let char of charArray) {
        sortedStr += char;
    }
    
    return sortedStr;
}

function groupAnagrams(arr) {
    let anagramMap = {};
    
    for (let word of arr) {
        let signature = sortString(word);
        
        if (anagramMap[signature]) {
            anagramMap[signature].push(word);
        } else {
            anagramMap[signature] = [word];
        }
    }
    
    let result = Object.values(anagramMap);
    
    return result;
}

const arr = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];
const result = groupAnagrams(arr);
console.log(result);
