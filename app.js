// gsap.from('.container', { duration: 2, opacity: 0, stagger: 0.5, y: 500 })

const btns = document.querySelectorAll('.num-button')
const allBtns = document.querySelectorAll('.button')
const resultBox = document.querySelector('#result-box')
const clearBtn = document.querySelector('#clear')
const total = document.querySelector('#total')
const btnSpread = [...btns]
const allBtnSpread = [...allBtns]

btnSpread.forEach((button, i) => {
    button.addEventListener('click', () => {
        if (resultBox.innerHTML == '0') {
            resultBox.innerHTML = ''
        }
        let value = btns[i].innerHTML
        resultBox.innerHTML += value
    })
})

function evaluate(fn) {
    return new Function('return ' + fn)()
}

total.addEventListener('click', () => {
    let allInput = resultBox.innerHTML
    resultBox.innerHTML = evaluate(allInput)
})

clearBtn.addEventListener('click', () => {
    resultBox.innerHTML = '0'
})

allBtnSpread.forEach((button, i) => {
    button.addEventListener('click', () => {
        let element = allBtns[i]
    })
})
