var reverseWords = function(s) {
    let words = s.split(" ");
    let trimmed = [];
    for(let i = 0; i < words.length; i++){
        if(words[i].trim().length === 0){
            continue;
        }
        trimmed.push(words[i]);
    }

    return trimmed.reverse().join(" ").trim();
};