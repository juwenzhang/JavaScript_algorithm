function word_match(word01, word02, ...args) {
    if (word01.length !== word02.length) {
        return false
    }

    word01 = word01.split('').sort()
    word02 = word02.split('').sort()
    console.log(word01, word02)
    let index = 0
    let match_cursor = true
    while (index < word01.length && match_cursor) {
        if (word01[index] === word02[index]) {
            index += 1
        }
        else {
            match_cursor = false
            break
        }
    }
    return match_cursor
}
console.log(`匹配结果为 ${word_match("abcd", "bacd")}`)  // 匹配结果为 true
