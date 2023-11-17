const titleInput = document.getElementById("title_input");
const volumeInput = document.getElementById("volume_input");
const seatsInput = document.getElementById("seats_input");
const itemsContainer = document.getElementById("items_container");
const TITLE_INPUT_PREF_ = "title_input_edit_";
const VOLUME_INPUT_PREF_ = "volume_input_edit_";
export const EDIT_BUTTON_PREF = "edit_button_";
export const DELETE_BUTTON_PREF = "delete_button_";

// converts reqBody to a card
const itemTemplate = ({id, title, vol, seats}) => {
    return `
<li id="${id}" class="card mb-3 item-card" draggable="true">
    <img src="./images/project_archangel.jpg"
    class="item-container__image card-img-top" alt="card">
    <div class="card-body">
        <h5 class="card-title" id="title">${title}</h5>
        <p class="card-text" id="volume">${vol}</p>
        <p class="card-text">${seats}</p>
        <label for="exampleInputEmail1" class="form-label">New Title</label>
        <input type="text" class="form-control" id="title_input_edit_${id}" value="${title}"/>
        <label for="exampleInputPassword1" class="form-label">New Tank Volume</label>
        <input type="number" class="form-control" id="volume_input_edit_${id}" value="${vol}"/>
        <div class="mt-5">
            <button id="edit_button_${id}" type="button" class="btn btn-primary mt-4">Edit</button>
            <button id="delete_button_${id}" type="button" class="btn btn-danger mt-4">Delete</button>
        </div>
    </div>        
</li>`
};

// posts a newly baked card
export const addItemToPage = ({id, title, vol, seats}, onEdit, onDelete) => {
    if (title == "" || vol == "" || seats == "") {
        alert("Input can't be empty")
    }
    itemsContainer.insertAdjacentHTML( 
        "afterbegin",
        itemTemplate({id, title, vol, seats}))
    
    const editButton = document.getElementById(`${EDIT_BUTTON_PREF}${id}`);
    const deleteButton = document.getElementById(`${DELETE_BUTTON_PREF}${id}`)

    editButton.addEventListener('click', onEdit)
    deleteButton.addEventListener('click', onDelete)
}

// clears inputs
export const clearInputs = () => {
    titleInput.value = "";
    volumeInput.value = "";
    seatsInput.value = "";
}

// returns values from inputs
export const getInputValue = () => {
    return {
        title: titleInput.value,
        volume: volumeInput.value,
        numberOfseats: seatsInput.value
    };
}

export const getEditValue = (id) => {
    
    const editTitle = document.getElementById(`${TITLE_INPUT_PREF_}${id}`)
    const editVolume = document.getElementById(`${VOLUME_INPUT_PREF_}${id}`)
    return {
        title: editTitle.value,
        volume: editVolume.value
    };
}

// post all items on page
export const renderItems = (items, onEdit, onDelete) => {
    itemsContainer.innerHTML = "";
    for (const item of items) {
        console.log(item);
        addItemToPage({id: item.id, title: item.name, vol:item.tank_volume, seats:item.num_of_seats}, onEdit, onDelete);
    }
    return items
}