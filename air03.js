const args = process.argv.slice(2)

function intruder(list) {
    for (i = 0; list[i]; i++) {
        let count = 0
        for (j = 0; list[j]; j++) {
            if (list[i] === list[j]) {
                count++
            }
        }
        if (count === 1) {
            return list[i]
        }
    }
    return "Chaque valeur a une paire"
}

if (args.length < 1) {
    console.error("error")
    process.exit()
}

const result = intruder(args)

console.log(result)