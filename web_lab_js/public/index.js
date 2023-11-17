import {
    clearInputs,
    getInputValue,
    renderItems,
    EDIT_BUTTON_PREF,
    getEditValue,
    DELETE_BUTTON_PREF
} from "./util.js"

import { getAllPlanes, postPlane, deletePlane, editPlane, deleteAllPlanes } from "./api.js"

const submitButton = document.getElementById("submit_button");
const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById("cancel_find_button");
const findInput = document.getElementById("find_input");
const volumeButton = document.getElementById("sort_by_volume");
const seatsButton = document.getElementById("sum_button");
const sum = document.querySelector(".totalSeats");
const deleteAll = document.getElementById("delete_all_button");

let planes = [];

findButton.addEventListener("click", () => {

    planes = planes.filter(p => p.name.search(findInput.value) !== -1);
    renderItems(planes, onEdit, onDelete)
});

volumeButton.addEventListener("click", () => {  

    const sortedPlanes = planes.slice().sort((a, b) => a.tank_volume - b.tank_volume);
    renderItems(sortedPlanes, onEdit, onDelete);
});    


submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const {title, volume, numberOfseats} = getInputValue();

    clearInputs();

    postPlane({
        title,
        volume,
        numberOfseats,
    }).then(refetchAllPlanes)
      .then(data => console.log("New plane added", data))
      .catch(err => console.log(err));
});

cancelFindButton.addEventListener("click", () => { 
    refetchAllPlanes();
})

seatsButton.addEventListener("click", () => {
    const seatSum = planes.reduce((accumulator, plane) => {
        return accumulator + parseInt(plane.num_of_seats, 10);
    }, 0); 
    sum.textContent = `All Seats: ${seatSum}`;
    }
);

deleteAll.addEventListener("click", () => {
    console.log("df")
    deletePlanes();
    refetchAllPlanes();
});

const deletePlanes = async () => {
    try {
        await deleteAllPlanes()
    } catch (error) {
        // Handle the error, e.g., show a message to the user or log it
        console.error("Error while deleting planes:", error);
    }
};

// findAll
const refetchAllPlanes = async () => {
    console.log("doing")
    try {
        const fetchedPlanes = await getAllPlanes();
        planes = fetchedPlanes;
        renderItems(planes, onEdit, onDelete);
    } catch (error) {
        // Handle the error, e.g., show a message to the user or log it
        console.error("Error while fetching and rendering planes:", error);
    }
};

const onEdit = async (element) => {
    
    try {
        const id = element.target.id.replace(EDIT_BUTTON_PREF, "");
        await editPlane(id, getEditValue(id));
        await refetchAllPlanes();
    } catch (err) {
        console.error(err);
    }
}

const onDelete = async (element) => {
    try {
        const id = element.target.id.replace(DELETE_BUTTON_PREF, "");
        await deletePlane(id);
        refetchAllPlanes();
    } catch (err) {
        console.error(err);
    }
}

refetchAllPlanes();
