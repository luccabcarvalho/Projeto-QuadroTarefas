const columns = document.querySelectorAll(".coluna");
let sourceColumnId = null;

document.addEventListener("dragstart", (e) => {
    if (e.target.classList.contains("card")) {
        e.target.classList.add("dragging");
    }
});

document.addEventListener("dragend", (e) => {
    if (e.target.classList.contains("card")) {
        e.target.classList.remove("dragging");
    }
});

columns.forEach((column) => {
    column.addEventListener("dragover", (e) => {
        e.preventDefault();
        const dragging = document.querySelector(".dragging");

        if (!dragging) return;

        const applyAfter = getNewPosition(column, e.clientY);

        if (applyAfter) {
            applyAfter.insertAdjacentElement("afterend", dragging);
        } else {
            column.querySelector(".cards-container").prepend(dragging);
        }
    });
});

function getNewPosition(column, posY) {
    const cards = column.querySelectorAll(".card:not(.dragging)");
    let result;

    for (let refer_card of cards) {
        const box = refer_card.getBoundingClientRect();
        const boxCenterY = box.y + box.height / 2;

        if (posY >= boxCenterY) result = refer_card;
    }

    return result;
}
