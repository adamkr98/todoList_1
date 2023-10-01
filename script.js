let input = document.querySelector('#taskInput');
let addBtn = document.querySelector('#addTaskButton');
let taskList = document.querySelector('#taskList');

input.focus();

let addItem = () => {
    let newItemContainer = document.createElement('div');
    newItemContainer.classList.add('newItemContainer');

    let newItem = document.createElement('p');
    newItem.classList.add('newItem');

    let newPContainer = document.createElement('div');
    newPContainer.classList.add('newPContainer');

    let removeBtn = document.createElement('i');
    removeBtn.classList.add('fa-solid', 'fa-trash', 'removeBtn');

    let changeBtn = document.createElement('i');
    changeBtn.classList.add('fa-solid', 'fa-pencil', 'changeBtn');

    let isDoneBtn = document.createElement('input');
    isDoneBtn.type = "checkbox";
    isDoneBtn.classList.add('isDoneBtn');

    if (input.value === "") {
        alert('Type something.');
        return;
    } else {
        newItem.textContent = input.value;
    }
    input.value = "";

    taskList.appendChild(newItemContainer);
    newItemContainer.appendChild(newPContainer);
    newPContainer.append(isDoneBtn, newItem);

    let optionContainer = document.createElement('div');
    optionContainer.classList.add('optionContainer');
    
    newItemContainer.appendChild(optionContainer);
    optionContainer.append(changeBtn, removeBtn);

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
    newItemContainer.remove();
};

let changeItemName = (newItem) => {
    const newValue = prompt('Choose new name');

    if (newValue === null) {
        return;
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
    if (event.key === "Enter") {
        addItem();
    }
});
