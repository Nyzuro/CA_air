const args = process.argv.slice(2)

function split(stringToCut, stringSeparator) {
    let string = ""
    const array = []
    for (char of stringToCut) {
        if (char !== stringSeparator) {
            string += char
        } else {
            array.push(string)
            string = ""
        }
    }
    return array
}

console.log(split("Bonjour je suis Marco", " "))