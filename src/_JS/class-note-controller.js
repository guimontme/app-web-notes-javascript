class noteController{
    constructor(){
        this.box_single_note = document.querySelector(".box-single-notes");
        this.box_note = this.box_single_note.querySelector(".note");
        this.btn_plus_note = document.querySelector(".btn-plus-notes");
        this.textarea = document.querySelector("textarea");

        this.btn_edit = document.querySelector("header i:nth-of-type(1)");
        this.btn_delete = document.querySelector("header i:nth-of-type(2)");
        this.btn_check = document.querySelector("header i:nth-of-type(3)");
        this.initialize();
    }

    initialize(){
        this.clickPlusNote();
        
    }

    clickPlusNote(){
        this.btn_plus_note.addEventListener("click", ()=> {
            if(!this.i) this.i = 1;
            this.templateNote(this.i);
            this.clickNote();
            this.i++;
        })
    }

    templateNote(i) {

           this.box_single_note.innerHTML += ("<div class='note' id='note_"+ i +"'>" +
                                   "<header class='flex'>" +
                                       "<div class='edits'>" +
                                           "<i class='fas fa-pencil-alt c-orange edit'></i>" +
                                           "<i class='far fa-trash-alt c-red delete'></i>" +
                                           "<i class='fas fa-check c-green save'></i>" +
                                       "</div>" +
                                   "</header>" +
                                   "<textarea placeholder='Nova Nota'></textarea>" +
                               "</div>");

           return this.box_single_note;
    }

    clickNote() {
        if(!this.i) this.i = 1;
        this.descendentes = this.box_single_note.querySelectorAll(".note");
        for ( var i = 0; i < this.descendentes.length; i++) {
            this.descendentes[i].addEventListener("click", function (e) {
                this.style.display = "none";
            })
        }
        console.log(this.box_single_note.querySelectorAll(".note")[this.i]); // return NodeList(div.note)
    }
}
