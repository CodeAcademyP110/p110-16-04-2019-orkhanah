
window.onload = function()
{
    const items = document.querySelectorAll('.item');
    const droparea = document.querySelector('.droparea');
      
    let draggedId;

    [...items].forEach(item => {
        item.ondragstart = function(e){
            //e.dataTransfer.setData("text/plain", this.id);
            draggedId = this.id;
        }
    });

    //   item.ondragend = function()
    //   {
    //       console.log("Drag ended");
    //   }

    //   item.ondrag = function()
    //   {
    //     console.log("Dragging");
    //   }

    //   droparea.ondragenter = function()
    //   {
    //       console.log("Drag entered me");
    //   }

    //   droparea.ondragleave = function()
    //   {
    //     console.log("Drag left me");
    //   }

    droparea.ondragover = function(e)
    {
        e.preventDefault();
    }

    droparea.ondrop = function(event)
    {
        // const id = event.dataTransfer.getData("text/plain");
        
        this.appendChild(document.getElementById(draggedId));
    }
}

