const deleteIcon = () => {
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    i.addEventListener("click", deleteTask);
    return i;
};

const deleteTask = (event) => {
    //console.log(event.target.parentElement);
    const parent = event.target.parentElement;
    console.log(parent);
    parent.remove();
};

export default deleteIcon;