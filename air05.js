const args = process.argv.slice(2)

function operationForList(list, operation) {
    let afterOperation = []
    for (number of list) {
        afterOperation.push(number + operation)
    }
    return afterOperation
}

if (args.length < 2) {
    console.error("error")
    process.exit()
}
for (i in args) {
    args[i] = Number(args[i])
    if (isNaN(args[i])) {
        console.error("error")
        process.exit()
    }
}

const operation = args.pop()
const list = args
const result = operationForList(list, operation)

for (index of result) {
    console.log(index)
}