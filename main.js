const createBtn = document.querySelector(".create-note");
const notesConatiner = document.querySelector(".notes-container");


checkStorage();

function createNote(){
    const note=document.createElement("div");
    note.className="note"
    const noteInput=document.createElement("p");
    noteInput.setAttribute("contenteditable", "true")
    noteInput.className="note-input";
    const deleteNote=document.createElement("img");
    deleteNote.src="./images/delete.png"
    note.appendChild(noteInput);
    note.appendChild(deleteNote);
    if(!notesConatiner.innerHTML==""){
        notesConatiner.insertBefore(note, notesConatiner.children[0]);
    }else{
        notesConatiner.appendChild(note)
    }
    updateStorage()
}
function updateStorage(){
    localStorage.setItem("notes", notesConatiner.innerHTML);
}

function checkStorage(){
    notesConatiner.innerHTML=localStorage.getItem("notes");
}

createBtn.addEventListener("click" ,createNote);



notesConatiner.addEventListener("click" , (e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage()
    }else if(e.target.tagName === "P"){
    
        const allNotes=document.querySelectorAll(".note-input");
        allNotes.forEach(note => {
            note.onkeyup =  updateStorage;
        })


    }

})

document.addEventListener("keydown", event=>{
    if(event.key=="Enter"){
        document.execCommand("InsertLineBreak");
        event.preventDefault();
    }
})
