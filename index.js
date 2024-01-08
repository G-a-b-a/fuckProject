let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function fuck() {
    count += 1
    countEl.textContent = count
}

function shit() {
    count += 2
    countEl.textContent = count
}

function fuckingpieceofshit() {
    count += 5
    countEl.textContent = count
}

function fuckoff() {
    count += 10
    countEl.textContent = count
}

function wanka() {
    count += 50
    countEl.textContent = count
}

function maniac() {
    count += 70
    countEl.textContent = count
}

function cunt() {
    count += 100
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
