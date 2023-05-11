const barra = document.querySelector('#barra');
const addBtn = document.querySelector("#add-btn");
const addItem = document.querySelector('#add-item');
const list = document.querySelector('#list');
const listItems = document.querySelector('.list-items');
const deleteBtn = document.querySelectorAll('.delete-btn');
const deleteItem = document.querySelector('.delete-item');
const checkBtn = document.querySelectorAll('.check-btn');
const checkItem = document.querySelector('.check-item');
let total = document.querySelector('#total');
let completo = document.querySelector('#completo');
let incompleto = document.querySelector('#incompleto');
const text = document.querySelector('.text');
const form =document.querySelector('#form');



const TotalFunction =()=>{
const totalCount = document.querySelector('ul').children.length;
total.innerHTML =`  Total = ${totalCount}` ;
}

const CompletedFunction =()=>{
const completoCount = document.querySelectorAll('.checked').length;
 completo.innerHTML = `Completo = ${completoCount}`;
}

const IncompletedFunction =()=>{
const incompletoCount = document.querySelectorAll('.tarea').length; 
incompleto.innerHTML= `Incompleto = ${incompletoCount}`
}




const ValidateTask=() => {
    if (barra.value ==='') {
        addBtn.disabled = true;
    
    } else {
        addBtn.disabled = false;

        
    }
   
}

barra.addEventListener('input', e =>{
    ValidateTask (barra)
});



const TotalityCount = ()=>{
TotalFunction();
CompletedFunction();
IncompletedFunction();

}

TotalityCount();

form.addEventListener('submit' , e =>{
    onclick = addBtn.disabled = true;
    
e.preventDefault();
const li = document.createElement('li');
li.classList.add('list-items');

 

li.innerHTML = `
<button class="delete-btn">X

</button>

<span class ="tarea">${barra.value}</span>

<button class="check-btn">✓

</button>


`;



list.appendChild(li);
barra.value = '';

TotalityCount();
localStorage.setItem('list', list.innerHTML);


});

 const getTarea = () => {
     if (localStorage.getItem('list')) {
         list.innerHTML = localStorage.getItem('list');
}
 }
 getTarea();



list.addEventListener('click', e => {
    if (e.target.closest('.delete-btn')) {
        const button = e.target.closest('.delete-btn');
        button.parentElement.remove();
        localStorage.setItem('list', list.innerHTML);
        TotalityCount();
    }
    
    
    if (e.target.closest('.check-btn')){
        const button = e.target.closest('.check-btn');
        
        const txt = button.parentElement.children[1];
        const cbtn = button.parentElement.children[2];
        TotalityCount();
        txt.classList.remove('tarea');
        txt.classList.add('checked');
        cbtn.setAttribute('disabled','true');
        localStorage.setItem('list', list.innerHTML);
        TotalityCount();
     }

});
TotalityCount();





