const divs = document.querySelectorAll('.div')
const foot = document.querySelectorAll('.foot')


const elmir = (element) =>{
    divs.forEach(el => el.classList.remove('.active'))
  

    element.classList.toggle('active')
    
}

divs.forEach((div) => {
    div.addEventListener('click' , () => elmir(div))
})