let input = document.querySelector('#taskInput');
let addBtn = document.querySelector('#addTaskButton');
let taskList = document.querySelector('#taskList');

input.focus();


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
    newItem.style.paddingLeft = "1rem";
    let newPContainer = document.createElement('div');
    newPContainer.style = `
        border: blue solid 2px;    
        width: 40%;
    `;

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
        isItemDone(newItemContainer, newItem);
    });
};

let removeItem = (newItemContainer) => {
    newItemContainer.remove()
};

let changeItemName = (newItem) => {
    const newValue = prompt('Choose new name');
    newItem.textContent = newValue;
};

let isDone = false;

let isItemDone = (newItemContainer, newItem) => {
    newItemContainer.isDone;

    if (newItemContainer.isDone) {
        newItemContainer.style.backgroundColor = "transparent";
        newItem.style.textDecoration = "none";
    } else {
        newItemContainer.style.backgroundColor = "green";
        newItem.style.textDecoration = "line-through";
    }
    newItemContainer.isDone = !newItemContainer.isDone;
};


addBtn.addEventListener('click', () => {
   addItem(); 
});

document.addEventListener('keydown', (event) => {
    if(event.key === "Enter") {
        addItem();
    };
});

