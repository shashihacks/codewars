function alphabetPosition(text) {
    let alphabets = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
    let filtered = (text.split('').filter(letter => alphabets.includes(letter))).join('').toLowerCase()
    let outputString = '';
    for (let i = 0; i < filtered.length; i++) {
        i == 0 ? outputString += (filtered.charCodeAt(i) - 96).toString() : outputString += " " + (filtered.charCodeAt(i) - 96).toString()
    }
    return outputString;
}