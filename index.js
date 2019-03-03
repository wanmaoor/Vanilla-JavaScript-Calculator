let equal = document.querySelector(".equal")
let clear = document.querySelector(".clear")
let buttons = document.getElementsByTagName('button')
let res = document.getElementById("display")

function fetchData(e){
  let a = e.target.innerText;
  res.value += a;
  calculate()
}

function calculate(){
  equal.addEventListener('click', () => {
  res.value = eval(res.value)
  })
}

for (const button of buttons) {
  button.addEventListener('click', fetchData)
}

clear.addEventListener('click', () => {
  res.value = null
})