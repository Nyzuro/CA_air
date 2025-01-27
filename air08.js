function sortedFusion(firstArray, secondArray) {
    const finalArray = [...firstArray, ...secondArray]
    for (let i = finalArray.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (finalArray[j] > finalArray[j + 1]) {
                const temp = finalArray[j]
                finalArray[j] = finalArray[j + 1]
                finalArray[j + 1] = temp
            }
        }
    }
    return finalArray.join(" ")
}

function isValidArguments(arguments) {
    if (arguments.length < 3) {
        console.error("Les arguments doivent etre comme ceci: 10 fusion 15")
        process.exit()
    }
    const argumentsJoined = arguments.join(" ")
    const regex = new RegExp(/\d+\s*fusion\s*\d+/)
    if (regex.test(argumentsJoined)) {
        return arguments
    }
    console.error("Les arguments doivent etre comme ceci: 10 fusion 15")
    process.exit()
}

function isValidNumbers(arguments) {
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] !== "fusion") {
            if (isNaN(arguments[i])) {
                console.error("Entrez des chiffres")
                process.exit()
            }
            arguments[i] = Number(arguments[i])
        }
    }
    return arguments
}


function getArguments() {
    const arguments = process.argv.slice(2)
    return arguments
}

function getBothArrays(arguments) {
    const firstArray = []
    const secondArray = []
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] !== "fusion")
            firstArray.push(arguments[i])
        else {
            for (let j = i + 1; j < arguments.length; j++) {
                secondArray.push(arguments[j])
            }
            return [firstArray, secondArray]
        }
    }
}

function getSortedFusion() {
    const arguments = isValidNumbers(isValidArguments(getArguments()))
    const arrays = getBothArrays(arguments)
    return sortedFusion(arrays[0], arrays[1])
}

console.log(getSortedFusion())