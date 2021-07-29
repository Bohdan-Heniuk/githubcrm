module.exports = function cutLink(url) {
    let owner = ''
    let repo = ''

    for (let i = 0; i < url.length; i++) {
        if (url[i] === '/') {
            for (let j = i + 1; j < url.length; j++) {
                repo += url[j]
            }
            return {owner, repo};
        }
        owner += url[i]
    }
}