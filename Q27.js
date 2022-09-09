function deep(num) {
    if (num > 0) {
        return num * deep(num - 1)
    } else if (num === 0) {
        return 1
    } else {
        return num
    }
}

console.log(deep(4))