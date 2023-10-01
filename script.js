let input = document.querySelector('#taskInput');
input.style = `
    width: 75%;
    height: 2rem;
    outline: none;

    padding-left: 1rem;
`;
let addBtn = document.querySelector('#addTaskButton');
addBtn.textContent = "Add new task";
addBtn.style = `
    width: 15%;
`;
let taskList = document.querySelector('#taskList');

input.focus();


let addItem = () => {
    let newItemContainer = document.createElement('div');
    newItemContainer.style = `
        border-bottom: #2F2F33 solid 1px;
        background-color: white;
        width: 90%;
        height: fit-content;

        display: flex;
        justify-content: space-around;

        align-items: center;
    `
    let newItem = document.createElement('p');
    newItem.style = `
        // border: red solid 2px;
        padding-left: 1rem;

        font-size: 1rem;
        font-family: sans-serif;
    `;

    let newPContainer = document.createElement('div');
    newPContainer.style = `
        // border: pink solid 2px;    
        width: 60%;

        display: flex;
        align-items: center;
    `;

    let removeBtn = document.createElement('i');
    removeBtn.classList.add('fa-solid',  'fa-trash');
    removeBtn.style = `
        // border: blue solid 2px;
        width: 2rem;
        height: 2rem;
        font-size: 1.5rem;
        cursor: pointer;
        `;

    let changeBtn = document.createElement('i');
    changeBtn.classList.add('fa-solid',  'fa-pencil');
    changeBtn.style = `
        // border: blue solid 2px;
        width: 2rem;
        height: 2rem;
        font-size: 1.5rem;
        cursor: pointer;
        `;

    let isDoneBtn = document.createElement('input');
    isDoneBtn.type="checkbox";
    // isDoneBtn.classList.add('fa-solid',  'fa-check');
    isDoneBtn.style = `
        // border: blue solid 2px;
        width: 1rem;
        height: 1rem;
        // font-size: 1.5rem;
        cursor: pointer;
    `;


    // removeBtn.textContent = "Remove";
    // changeBtn.textContent = "Change name";
    // isDoneBtn.textContent = "Done";


    if( input.value === "" ) {
        alert('Type something.')
        return
    } else {
        newItem.textContent = input.value;
    }
    input.value = "";

    taskList.appendChild(newItemContainer);
    newItemContainer.appendChild(newPContainer);
    newPContainer.append(isDoneBtn, newItem);
    newItemContainer.append(changeBtn, removeBtn);


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
    
    if (newValue === null) {
        return
    } else {
        newItem.textContent = newValue;
    }
};

let isDone = false;

let isItemDone = (newItemContainer, newItem) => {
    newItemContainer.isDone;

    if (newItemContainer.isDone) {
        newItemContainer.style.backgroundColor = "transparent";
        newItem.style.textDecoration = "none";
    } else {
        newItemContainer.style.backgroundColor = "#20FC8F";
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



