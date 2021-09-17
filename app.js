gsap.from('.container', { duration: 2, opacity: 0, stagger: 0.5, y: 500 })

const btns = document.querySelectorAll('.num-button')
const allBtns = document.querySelectorAll('.button')
const resultBox = document.querySelector('#result-box')
const clearBtn = document.querySelector('#clear')
const total = document.querySelector('#total')
const btnSpread = [...btns]
const allBtnSpread = [...allBtns]
