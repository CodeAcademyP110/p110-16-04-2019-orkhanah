
window.onload = function()
{
    const itemHolders= document.querySelectorAll('.drop-zone .item-holder');
    const items= document.querySelectorAll('.drag-zone .item img');
    let draggedElementId;

    [...items].forEach(item => {
        item.ondragstart = function(e)
        {
            e.dataTransfer.setData("text", e.target.id);
            draggedElementId = e.target.id;
        }

        // item.ondragend = function()
        // {
        //     document.querySelector('.item-holder.not-allowed').classList.remove("not-allowed");
        // }
    });

    [...itemHolders].forEach(itemHolder => {
        itemHolder.ondragover = e => 
        {
            e.preventDefault();
            const item = document.getElementById(draggedElementId);
            
            if(item.getAttribute("data-type") !== e.target.getAttribute("data-type"))
            {
                e.target.classList.add("not-allowed");
            }
        }

        itemHolder.ondragleave = e => {
            e.target.classList.remove("not-allowed");
        } 

        itemHolder.ondrop = function(e)
        {
            const id = e.dataTransfer.getData("text");
            const item = document.getElementById(id);
            
            if(item.getAttribute("data-type") === e.target.getAttribute("data-type"))
            {
                e.target.appendChild(item);
            }

            e.target.classList.remove("not-allowed");
        }
    })
}

