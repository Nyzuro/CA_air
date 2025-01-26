const args = process.argv.slice(2)

function findIntruder(list) {
    for (i = 0; list[i]; i++) {
        let countPair = 0
        for (j = 0; list[j]; j++) {
            if (list[i] === list[j]) {
                countPair++
            }
        }
        if (countPair === 1) {
            return list[i]
        }
    }
    return
}

function isValidArguments(arguments) {
    if (arguments.length < 1) {
        console.error("Entrez un argument")
        process.exit()
    }
    return arguments
}

function getArguments() {
    const arguments = process.argv.slice(2)
    return arguments
}

function getIntruder() {
    const list = isValidArguments(getArguments())
    const intruder = findIntruder(list)
    if (!intruder) {
        console.error("Aucun intrus n'a ete trouve")
        process.exit()
    }
    return intruder
}

console.log(getIntruder())