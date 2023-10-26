var reverseVowels = function(s) {
    let reversed = "";
    let vowels =['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let vows = []

    for(let i=0; i<s.length; i++){
        if(vowels.includes(s.charAt(i))) vows.push(s.charAt(i));
    }
    let n = vows.length - 1;
    for(let i=0; i<s.length; i++){
        if(vowels.includes(s.charAt(i))){ reversed += vows[n]; n--;}
        else reversed += s.charAt(i);
    }
    return reversed;

};