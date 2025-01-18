const args = process.argv.slice(2)

function removeDuplicates(string) {
    let finalString = ""
    for (i = 0; string[i]; i++) {
        if (string[i] !== string[i - 1]) {
            finalString += string[i]
        }
    }
    return finalString
}
if (args.length !== 1) {
    console.error("error")
    process.exit()
}

const string = args[0]
const result = removeDuplicates(string)

console.log(result)