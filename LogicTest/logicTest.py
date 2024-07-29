def sort_string(s):
    char_list = list(s)
    
    for i in range(len(char_list)):
        for j in range(i + 1, len(char_list)):
            if char_list[i] > char_list[j]:
                char_list[i], char_list[j] = char_list[j], char_list[i]
    
    sorted_str = ''
    for char in char_list:
        sorted_str += char

    return sorted_str

def anagrams(arr):
    anagram_map = {}
    
    for word in arr:
        signature = sort_string(word)
        
        if signature in anagram_map:
            anagram_map[signature].append(word)
        else:
            anagram_map[signature] = [word]
    
    result = list(anagram_map.values())
    
    return result

arr = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map']
result = anagrams(arr)
print(result)
