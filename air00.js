const args = process.argv.slice(2)

function split(strToCut, strSeparators) {
    const strSplit = []
    let string = ""
    for (i = 0; strToCut[i]; i++) {
        let isSeparator = false
        for (separator of strSeparators) {
            if (strToCut[i] === separator) {
                isSeparator = true
                if (string) {
                    strSplit.push(string)
                    string = ""
                }
            }
        }
        if (isSeparator === false) {
            string += strToCut[i]
        }
    }
    strSplit.push(string)
    return strSplit
}

if (args.length !== 1) {
    console.error("error")
    process.exit()
}

const str = args[0]
const separators = [" ", "\n", "\t"]
const result = split(str, separators)

console.log(result)