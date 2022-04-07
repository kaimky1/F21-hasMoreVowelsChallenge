const hasMoreVowels= (word) => {
    let count = 0;
    for(let i = 0; i < word.length; i++){
        if(word[i] === 'a' || word[i] === 'A' || word[i] === 'e' || word[i] === 'E' || word[i] === 'i' || word[i] === 'I' || word[i] === 'o' || word[i] === 'O' || word[i] === 'u' || word[i] === 'U'){
            count += 1;
        }
    }
    if(count > word.length/2){
        return true;
    }else{
        return false;
    }
}

console.log(hasMoreVowels('Allen')) //returns false