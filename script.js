const root = document.getElementById('root');

makeRows = (rowsCols) => {
    for (let i = 0; i < (rowsCols * rowsCols); i++) {
        const div = document.createElement('button');
        div.setAttribute('class', `cell`)
        div.setAttribute('id', i)
        document.getElementById('root').appendChild(div)
    }
    console.log('worked')

}
makeRows(4)
//   bind generated-number-buttuns with contains 
const nav1 = document.getElementById('8') // number 1
nav1.textContent = 1
const nav2 = document.getElementById('9')// number 2
nav2.textContent = 2
const nav3 = document.getElementById('10')// number 3
nav3.textContent = 3
const nav4 = document.getElementById('4')// number 4
nav4.textContent = 4
const nav5 = document.getElementById('5')// number 5
nav5.textContent = 5
const nav6 = document.getElementById('6')// number 6
nav6.textContent = 6
const nav7 = document.getElementById('0')// number 7
nav7.textContent = 7
const nav8 = document.getElementById('1')// number 8
nav8.textContent = 8
const nav9 = document.getElementById('2')// number 9
nav9.textContent = 9
const nav0 = document.getElementById('13')// number 0
nav0.textContent = 0
const navDot = document.getElementById('12')// .
navDot.textContent = '.'
//mathematical operators Subtraction
const navEql = document.getElementById('14')// =
navEql.textContent = '='
const navDivide = document.getElementById('3')// =
navDivide.textContent = '÷'
const navMultiply = document.getElementById('7')// =
navMultiply.textContent = '×'
const navSubtraction = document.getElementById('11')// =
navSubtraction.textContent = '-'
const navSum = document.getElementById('15')// =
navSum.textContent = '+'