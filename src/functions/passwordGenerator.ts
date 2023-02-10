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
    
    
    const generateTheWord = ( length:any, uppercase:any, lowercase:any, numbers:any, symbols:any ) => {
        const availableCharacters = [
          ...(lowercase ? lowerCaseLetters : []),
          ...(uppercase ? upperCaseLetters : []),
          ...(numbers ? numbersArray : []),
          ...(symbols ? symbolsArray : []),
        ];
        console.log(availableCharacters)
        const shuffleArray = (ar:any) => ar.sort(() => Math.random() - 0.5);
        const characters = shuffleArray(availableCharacters).slice(0, length);
        return characters.join('');
    }

    return(generateTheWord(length, uppercase, lowercase, numbers, symbols));
    
}