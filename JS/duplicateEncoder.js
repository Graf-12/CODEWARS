function duplicateEncode(word){
    word = word.toLowerCase()
    let a = {}
    for (let i = 0; i < word.length; i++) {
        if (word[i] in a) {
            a[word[i]] += 1
        } else {
            a[word[i]] = 1
        }
    }
    let result = ''
    for (let i = 0; i < word.length; i++) {
        if (a[word[i]] > 1) {
            result += ')'
        } else {
            result += '('
        }
    }
    return result
}

console.log(duplicateEncode("Success"))
