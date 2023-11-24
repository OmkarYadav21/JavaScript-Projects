let main=document.querySelector('#main');
let bt=document.querySelector(".btn");

const newNote=(text='')=>{
    let note=document.createElement('div');
    note.classList.add('note');
    note.innerHTML=`
    <div class="tool">
        <i class="save fa-solid fa-floppy-disk"></i>
        <i class="trash fa-solid fa-trash"></i>
        
    </div>
    <textarea >${text}</textarea>`;
    note.querySelector('.trash').addEventListener("click",
        ()=>{
            note.remove();
            saveNote();
        }
    );
    note.querySelector('.save').addEventListener("click",
        ()=>{
            saveNote();
        }
    )
    main.appendChild(note);
    saveNote();
}

const saveNote=()=>{
    const data=[];
    const notes=document.querySelectorAll('.note textarea');
    notes.forEach(
        (note)=>{
            data.push(note.value);
        }
        
    )
    console.log(data);
    
    if (data.note===0) {
        localStorage.removeItem("notes");
    } else {
        localStorage.setItem('notes',JSON.stringify(data));
    }
}
(
    function() {
        const lsnotes=JSON.parse(localStorage.getItem('notes'));
        if (lsnotes===null) {
            newNote();
        } else {
            lsnotes.forEach(
                (lsnotes)=>{
                        newNote(lsnotes);
                }
            )
        }
        
        
    }
)()
bt.addEventListener('click',
()=>{newNote()});