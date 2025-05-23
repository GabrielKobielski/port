let trilho = document.getElementById('trilho')
let body = document.querySelector('body')

trilho.addEventListener('click',()=>{
  setTimeout(segu)
  trilho.classList.toggle('light')
  body.classList.toggle('light')
})