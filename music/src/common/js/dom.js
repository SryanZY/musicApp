export function hasClass (el, className) {
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
    return reg.test(el.className)
}

export function addClass (el, className) {
    if (hasClass(el, className)) {
        return
    }

    let newClass = el.className.split(' ')
    newClass.push(className)
    el.className = newClass.join(' ')
}

export function getData (el, key, val) {
    const prefix = 'data-'
    key = prefix + key
    if (val) {
        return el.setAttribute(key, val)
    } else {
        return el.getAttribute(key)
    }
}
