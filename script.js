let input = document.querySelector('#taskInput');
let addBtn = document.querySelector('#addTaskButton');
let taskList = document.querySelector('#taskList');


let addItem = () => {
    let newItemContainer = document.createElement('div');
    newItemContainer.style = `
        border: red solid 2px;
        width: 100%;
        height: fit-content;

        display: flex;
        justify-content: space-between;
    `
    let newItem = document.createElement('p');
    let newPContainer = document.createElement('div');
    newPContainer.style = `
        border: blue solid 2px;    
        width: 40%;
    `
    let removeBtn = document.createElement('button');
    let changeBtn = document.createElement('button');
    let isDoneBtn = document.createElement('button');



    removeBtn.textContent = "Remove";
    changeBtn.textContent = "Change name";
    isDoneBtn.textContent = "Done";


    newItem.textContent = input.value;
    input.value = "";

    taskList.appendChild(newItemContainer);
    newItemContainer.appendChild(newPContainer);
    newPContainer.appendChild(newItem);
    newItemContainer.append(isDoneBtn, changeBtn, removeBtn);

    removeBtn.addEventListener('click', () => {
        removeItem(newItemContainer);
    });

    changeBtn.addEventListener('click', () => {
        changeItemName(newItem);
    });

    isDoneBtn.addEventListener('click', () => {
        isDone(newItemContainer, newItem);
    });
};

let removeItem = (newItemContainer) => {
    newItemContainer.remove()
};

let changeItemName = (newItem) => {
    const newValue = prompt('Choose new name');
    newItem.textContent = newValue;
};

let isDone = (newItemContainer, newItem) => {
    newItemContainer.style.backgroundColor = "green";
    newItem.style.textDecoration = "line-through";
};


addBtn.addEventListener('click', () => {
   addItem(); 
});

