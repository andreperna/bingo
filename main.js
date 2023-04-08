buttons = document.querySelectorAll('button')
sortedNumber = document.querySelector('#sorted-number')
let fullscreen = false

buttons.forEach(element => {
  element.addEventListener('click', (e)=> sortedNumber.innerText = (e.target.textContent))
});

sortedNumber.addEventListener('click', ()=> {
  if (fullscreen) {document.exitFullscreen(), fullscreen=false}
  else {document.documentElement.requestFullscreen(), fullscreen=true}
})
