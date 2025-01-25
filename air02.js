function concat(arrayOfStrings, separator) {
    let finalString = ""
    for (i = 0; arrayOfStrings[i]; i++) {
        finalString += arrayOfStrings[i]
        if (arrayOfStrings[i + 1]) {
            finalString += separator
        }
    }
    return finalString
}

function isValidArguments(arguments) {
    if (arguments.length < 3) {
        console.error("Veuillez entrer au moins 2 chaines de caracteres et 1 separateur")
        process.exit()
    }
    for (const argument of arguments) {
        if (typeof argument !== 'string') {
            console.error("Entrez une chaine de caractere")
            process.exit()
        }
    }
    return arguments
}

function getArguments() {
    const arguments = process.argv.slice(2)
    return arguments
}

function getStringConcat() {
    const strings = isValidArguments(getArguments())
    const separator = strings.pop()
    const arrayOfStrings = strings
    return concat(arrayOfStrings, separator)
}

console.log(getStringConcat())