class Solution {
    public String mergeAlternately(String word1, String word2) {
        String merged = "";
        if(word1.length() <= word2.length()){
            for(int i = 0; i < word1.length(); i++){
                merged += String.valueOf(word1.charAt(i)) + word2.charAt(i);
            }
            if(word1.length() < word2.length())
                merged +=  word2.substring(word1.length());
        }else{
            for(int i = 0; i < word2.length(); i++){
                merged += String.valueOf(word1.charAt(i)) + word2.charAt(i);
            }

            merged +=  word1.substring(word2.length());
        }
        return merged;
    }
}