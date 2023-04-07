buttons = document.querySelectorAll('button')
sortedNumber = document.querySelector('#sorted-number')

buttons.forEach(element => {
  element.addEventListener('click', (e)=> sortedNumber.innerText = (e.target.textContent))
});