function split(stringToCut, stringSeparator) {
    let string = ""
    const strSplit = []
    for (let index = 0; stringToCut[index]; index++) {
        if (stringToCut[index] !== stringSeparator[0]) {
            string += stringToCut[index]
        } else {
            let i = 0
            let j = index
            while (stringToCut[j] === stringSeparator[i]) {
                i++
                j++
            }
            if (i === stringSeparator.length && string) {
                strSplit.push(string)
                string = ""
                index = j - 1
            } else {
                string += stringToCut[index]
            }
        }
    }
    strSplit.push(string)
    return strSplit
}

function isValidArguments(arguments) {
    if (arguments.length !== 2) {
        console.error("Entrez une chaine de caractere et un separateur seulement")
        process.exit()
    }
    return arguments
}

function getArguments() {
    const arguments = process.argv.slice(2)
    return arguments
}

function getStringSplit() {
    const strings = isValidArguments(getArguments())
    return split(strings[0], strings[1])
}

console.log(getStringSplit())