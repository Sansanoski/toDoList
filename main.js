const formAddToDo = document.querySelector('.addToDo')
const containerAllToDo = document.querySelector('.containerAllToDo')
const formFilter = document.querySelector('.filter-form')


const addingToDo = (inputValueAddToDo) => {
    containerAllToDo.innerHTML +=`
    <li class="LI-ToDo">
        <span id="todoText">${inputValueAddToDo}</span>
        <i class="fa-solid fa-trash delete" id="trashIcon"></i>
    </li>
    `
}

formAddToDo.addEventListener('submit', event =>{
    event.preventDefault()
    const inputValueAddToDo = event.target.add.value.trim()

    if(inputValueAddToDo ===''){
     return alert('Campo precisa ser preenchido')   
    }

    addingToDo(inputValueAddToDo)

    formAddToDo.reset()
})

//remover os toDos 

containerAllToDo.addEventListener('click',event =>{
    const clikedElement = event.target
    if(Array.from(clikedElement.classList).includes('delete')){
        clikedElement.parentElement.remove()
    }
})

//filtragem dos toDos

formFilter.addEventListener('input',event => {
    const valueOfinputFilterForm = event.target.value.trim().toLowerCase()
    Array.from(containerAllToDo.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(valueOfinputFilterForm))
    .forEach(todo =>{
        todo.classList.add('remove')
    } )
    Array.from(containerAllToDo.children)
    .filter(todo => todo.textContent.toLowerCase().includes(valueOfinputFilterForm))
    .forEach(todo =>{
        todo.classList.remove('remove')
    } )
    
})  