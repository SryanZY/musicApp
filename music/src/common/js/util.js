function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// 打乱数组，用来随机播放等场景
export function shuffle (arr) {
    let _arr = arr.slice()
    for (let i = 0; i < _arr.length; i++) {
        let j = getRandomInt(0, i)
        let t = _arr[i]
        _arr[i] = _arr[j]
        _arr[j] = t
    }
    return _arr
}
