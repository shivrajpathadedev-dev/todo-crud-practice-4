const cl=console.log;

const todocontainer=document.getElementById('todocontainer');
const todoitem=document.getElementById('todoitem');
const updatebtn=document.getElementById('updatebtn');
const submitbtn=document.getElementById('submitbtn');
const todoform=document.getElementById('todoform');

let arr=[
    {

        todoItem:"HTML",
        todoId:"123456789"
},
{
    todoItem:"js",
    todoId:"654321"
},
{
    todoItem:"java",
    todoId:"1234567"
},
{
    todoItem:"css",
    todoId:"9876543"
}
]

function createlist(arr){
    let result=`<ul class="list-group">`

    arr.forEach(c=>[
        result+=`<li id="${c.todoId}" class="list-group-item d-flex justify-content-between align-items-center">
                            <strong>${c.todoItem}</strong>
                            <div>
                                <i onClick="onEditbtn(this)" class="fa-regular fa-pen-to-square fa-2x  btn-sm text-primary"></i>
                                <i onClick="onRemovebtn(this)" class="fa-solid fa-trash fa-2x btn-sm text-danger"></i>
                            </div>
                        </li>`
    ]);
    result+=`</ul>`
    todocontainer.innerHTML=result;
}

//add

function onaddtodo(eve){
    eve.preventDefault();

    let obj={
        todoItem:todoitem.value,
        todoId:Date.now().toString()
    }
     arr.unshift(obj);   // ⭐ add to array
    todoform.reset();

 let li=document.createElement('li')
 li.id=obj.todoId;
 li.className=`list-group-item d-flex justify-content-between align-items-center`
 li.innerHTML=`<strong>${obj.todoItem}</strong>
                            <div>
                                <i onClick="onEditbtn(this)" class="fa-regular fa-pen-to-square fa-2x  btn-sm text-primary"></i>
                                <i onClick="onRemovebtn(this)" class="fa-solid fa-trash fa-2x btn-sm text-danger"></i>
                            </div>`
    let ul=document.querySelector('#todocontainer ul');
    ul.prepend(li);                        
}

//remove
function onRemovebtn(eve){
    let REMOVE_ID=eve.closest('li').id

    let getIndex=arr.findIndex(c=>c.todoId===REMOVE_ID);
    arr.splice(getIndex,1)
    eve.closest('li').remove()
}

//edit
let EDIT_ID;
function onEditbtn(eve){
    EDIT_ID=eve.closest('li').id;

    let EDIT_OBJ=arr.find(c=>c.todoId===EDIT_ID);

    todoItem: todoitem.value;
    submitbtn.classList.add('d-none');
    updatebtn.classList.remove('d-none');
    
}

//update
function onupdatebtn(eve){
     let UPDATE_OBJ={
        todoItem:todoitem.EDIT_OBJ,
        todoId:EDIT_ID
     }

       todoform.reset()
     let getIndex=arr.findIndex(c=>c.todoId===EDIT_ID);
     arr[getIndex]=UPDATE_OBJ;
     updatebtn.classList.add('d-none');
     submitbtn.classList.remove('d-none');

     let li=document.getElementById(EDIT_ID).firstElementChild
     li.innerText=UPDATE_OBJ.todoItem;

   
  



}

createlist(arr);
todoform.addEventListener('submit',onaddtodo);
updatebtn.addEventListener('click',onupdatebtn)






























