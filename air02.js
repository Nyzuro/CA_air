const args = process.argv.slice(2)

function concat(arrayOfString, separator) {
    let finalString = ""
    for (i = 0; arrayOfString[i]; i++) {
        finalString += arrayOfString[i]
        if (arrayOfString[i + 1]) {
            finalString += separator
        }
    }
    return finalString
}

if (args.length < 3) {
    console.error("Veuillez entrer au mois 2 chaines de caracteres et 1 separateur")
    process.exit()
}

const separator = args.pop()
const strings = args
const result = concat(strings, separator)

console.log(result)