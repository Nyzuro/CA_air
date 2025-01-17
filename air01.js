const args = process.argv.slice(2)

function split(strToCut, strSeparator) {
    let string = ""
    const strSplit = []
    for (index = 0; strToCut[index]; index++) {
        if (strToCut[index] !== strSeparator[0]) {
            string += strToCut[index]
        } else {
            let i = 0
            let j = index
            for (; strToCut[j] === strSeparator[i]; i++) {
                j++
            } if (i === strSeparator.length) {
                strSplit.push(string)
                string = ""
                index = j - 1
            } else {
                string += strToCut[index]
            }
        }
    }
    strSplit.push(string)
    return strSplit
}

if (args.length != 2) {
    console.error("Entrez une chaine de caractere et un separateur seulement")
    process.exit()
}

const string = args[0]
const separator = args[1]
const result = split(string, separator)

console.log(result)