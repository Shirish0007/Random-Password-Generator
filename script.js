function generatePassword(length, includeLowercase, 
                            includeUppercase,
                            includeNumbers, 
                            includeSymbols) {

    const lowercaseCharacter = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbolCharacter = "!@#$%^&*+-*/|";
    const numberCharacter = "0123456789";

    let allowedCharacter = "";
    let password = "";

    if (includeLowercase) allowedCharacter += lowercaseCharacter;
    if (includeUppercase) allowedCharacter += uppercaseCharacter;
    if (includeNumbers) allowedCharacter+= numberCharacter;
    if (includeSymbols) allowedCharacter += symbolCharacter;

   
    if(allowedCharacter.length === 0 ){
        return "⚠️ Please select at least one character type."
    }

    for(let i= 0 ; i<length; i++){
        const randomIndex = Math.floor(Math.random() * allowedCharacter.length);
         password += allowedCharacter[randomIndex];
    }

    return  password;
}


document.getElementById("generatedPassword").onclick = function () {
    const passwordLength = Number(document.getElementById("PasswordLength").value);
    const includeLowercase = document.getElementById("LowerCaseYes").checked;
    const includeUppercase = document.getElementById("UpperCaseYes").checked;
    const includeNumbers = document.getElementById("NumbersYes").checked;
    const includeSymbols = document.getElementById("SymbolsYes").checked;

    if (isNaN(passwordLength) || passwordLength <= 0) {
        document.getElementById("result").textContent = "⚠️ Password length must be at least 1.";
        return;
    }

    const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
    document.getElementById("result").textContent = `Generated Password: ${password}`;
};
