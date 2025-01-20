const args = process.argv.slice(2)

function searchInString(arrayOfStrings, strToFind) {
    const finalArray = []
    for (string of arrayOfStrings) {
        let strCompare = ""
        for (i = 0; string[i]; i++) {
            if (string[i] === strToFind[0]) {
                for (j = i; strCompare.length < strToFind.length; j++) {
                    strCompare += string[j]
                }
            }
        }
        if (!strCompare || strCompare !== strToFind) {
            finalArray.push(string)
        }
    }
    return finalArray
}

if (args.length < 2) {
    console.error("error")
    process.exit()
}

const stringToFind = args.pop()
const arrayOfStrings = args
const result = searchInString(arrayOfStrings, stringToFind)

console.log(result)