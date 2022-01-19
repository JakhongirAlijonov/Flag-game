const form = document.querySelector('form')
const img = document.querySelector('.img')
const counter = document.querySelector('.counter')
const input = document.querySelector('#input')
const btn = document.getElementById('btn')
mainFunc()
let randomFlag

function mainFunc(main) {

    fetch('https://restcountries.com/v2/all')
        .then(function getDatas(data) {
            return data.json()
        })
        .then(getData)


    function getData(datas) {
        let raandomNum = Math.trunc((Math.random() * 250))
        randomFlag = datas[raandomNum]

        input.value = ''
        img.setAttribute('src', randomFlag.flags.png)
        console.log(randomFlag.name);

    }

}
let count = 0;



form.addEventListener('input', (e) => {

    if (randomFlag.name == input.value) {
        mainFunc();
        count++;
        counter.innerHTML = `Your score: ${count}`
    }

})
btn.addEventListener('click', (e) => {
    e.preventDefault()
    mainFunc();


    --count;
})