type menuT = {
    leng: number;
    uppercase: boolean;
    lowercase: boolean;
    number: boolean;
    symbols: boolean;
}

export const passwordGenerator = (menuObj:menuT) => {
    const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const symbolsArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
    const characterCodes = Array.from(Array(26)).map((_e, i) => i + 97);

    const lowerCaseLetters = characterCodes.map((code) =>
      String.fromCharCode(code)
    );

    const upperCaseLetters = characterCodes.map((code) =>
      String.fromCharCode(code).toUpperCase()
    );

    const [ length, uppercase, lowercase, numbers, symbols ] = [...Object.values(menuObj)];
    const checks = [uppercase, lowercase, numbers, symbols];

    
    
    const generateTheWord = ( length:any, uppercase:any, lowercase:any, numbers:any, symbols:any ) => {
        const word = [];
        while(word.length < length) {
          uppercase && word.push(upperCaseLetters[Math.floor(Math.random()*upperCaseLetters.length)]);
          lowercase && word.push(lowerCaseLetters[Math.floor(Math.random()*lowerCaseLetters.length)]);
          numbers && word.push(numbersArray[Math.floor(Math.random()*numbersArray.length)]);
          symbols && word.push(symbolsArray[Math.floor(Math.random()*symbolsArray.length)]);
        }

        const password = word.slice(0, length).join("");
        return password;
        ///const shuffleArray = (ar:any) => ar.sort(() => Math.random() - 0.5);
        ///const characters = shuffleArray(word);
        ///return characters.join('');
    }

    return(generateTheWord(length, uppercase, lowercase, numbers, symbols));
    
}