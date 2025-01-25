const args = process.argv.slice(2)

function sortedInsert(firstArray, newElement) {
    const sortedArray = []
    for (i = 0; firstArray[i]; i++) {
        if (firstArray[i] <= newElement) {
            sortedArray.push(firstArray[i])
        }
        else {
            sortedArray.push(newElement)
            for (j = i; firstArray[j]; j++) {
                sortedArray.push(firstArray[j])
            }
            return sortedArray
        }
    }
}
if (args.length < 2) {
    console.error("error")
    process.exit()
}
const newElement = args.pop()
const firstArray = args
for (number of firstArray) {
}

const result = sortedInsert(firstArray, newElement)

console.log(result)