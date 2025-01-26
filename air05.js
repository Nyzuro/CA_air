function operationForList(list, operation) {
    let afterOperation = []
    for (const number of list) {
        afterOperation.push(number + operation)
    }
    return afterOperation
}

function isValidArguments(arguments) {
    if (arguments.length < 2) {
        console.error("Entrez au moins 2 arguments")
        process.exit()
    }
    return arguments
}

function isValidNumbers(arguments) {
    for (let i = 0; arguments[i]; i++) {
        if (isNaN(arguments[i])) {
            console.error("Entrez des chiffres")
            process.exit()
        }
        arguments[i] = Number(arguments[i])
    }
    return arguments
}

function getArguments() {
    const arguments = process.argv.slice(2)
    return arguments
}

function getListAfterOperation() {
    const numbers = isValidNumbers(isValidArguments(getArguments()))
    const operation = numbers.pop()
    return operationForList(numbers, operation)
}

console.log(getListAfterOperation())