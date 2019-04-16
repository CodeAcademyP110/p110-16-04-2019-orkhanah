window.onload = function()
{
    const letters = document.querySelectorAll('.letter');
    const letterHolders = document.querySelectorAll('.letter-holder');

    [...letters].forEach(letter => {
        letter.ondragstart = function(e)
        {
            e.dataTransfer.setData("text/plain", e.target.id);
        }
    });

    [...letterHolders].forEach(holder => {
        holder.ondragover = e => e.preventDefault();

        holder.ondrop = e => {
            const id = e.dataTransfer.getData("text/plain");

            const letter = document.getElementById(id);

            const dataLetter = letter.getAttribute("data-letter"); //o
            const minLetter = e.target.getAttribute("data-min"); //a
            const maxLetter = e.target.getAttribute("data-max"); //f

            if(dataLetter >= minLetter && dataLetter <= maxLetter){
                e.target.appendChild(letter);
            }
        }
    })
}

