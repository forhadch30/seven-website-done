function server(params) {
    let initioal = 0;
    let word = ["a", "e", "i", "o", "u"]
    for (const result of params) {
        if (word.includes(result)) {
            initioal++
        }
    }
    return initioal;
}
console.log(server("forhad"));