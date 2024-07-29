package LogicTest;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class LogicTest {
    public static String sortString(String s) {
        char[] charArray = s.toCharArray();
        
        for (int i = 0; i < charArray.length; i++) {
            for (int j = i + 1; j < charArray.length; j++) {
                if (charArray[i] > charArray[j]) {
                    char temp = charArray[i];
                    charArray[i] = charArray[j];
                    charArray[j] = temp;
                }
            }
        }
        
        return new String(charArray);
    }

    public static List<List<String>> anagrams(String[] arr) {
        Map<String, List<String>> anagramMap = new HashMap<>();
        
        for (String word : arr) {
            String signature = sortString(word);
            
            if (anagramMap.containsKey(signature)) {
                anagramMap.get(signature).add(word);
            } else {
                List<String> newList = new ArrayList<>();
                newList.add(word);
                anagramMap.put(signature, newList);
            }
        }
        
        List<List<String>> result = new ArrayList<>(anagramMap.values());
        
        return result;
    }

    public static void main(String[] args) {
        String[] arr = {"cook", "save", "taste", "aves", "vase", "state", "map"};
        List<List<String>> result = anagrams(arr);
        
        for (List<String> group : result) {
            System.out.println(group);
        }
    }
}
