const takeANumber = (katsDeliLine, name) => {
    katsDeliLine.push(name)
    return `Welcome, ${name}. You are number ${katsDeliLine.length} in line.`
}

const nowServing = katsDeliLine => {
    return katsDeliLine.length > 0
        ? `Currently serving ${katsDeliLine.shift()}.`
        : "There is nobody waiting to be served!"
}

// function currentLine(line) {
//     if (line.length === 0) {
//         return "The line is currently empty."
//     } else {
//         let numberName = []
//         for (let i = 0; i < line.length; i++) {
//             numberName.push(`${i + 1}. ${line[i]}`)
//         }
//         return `The line is currently: ${numberName.join(', ')}`
//     }
// }

const createOrderedList = (line) => {
    let orderedList = []
    for (let i = 0; i < line.length; i++) {
        orderedList.push(`${i + 1}. ${line[i]}`)
    }
    return `The line is currently: ${orderedList.join(', ')}`
}

function currentLine(katsDeliLine) {
    return !katsDeliLine.length
        ? "The line is currently empty."
        : createOrderedList(katsDeliLine)
}
