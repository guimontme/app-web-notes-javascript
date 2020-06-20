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
            this.templateNote();
            this.clickNote();
        })
    }

    templateNote() {

           this.box_single_note.innerHTML += ("<div class='note'>" +
                                   "<header class='flex'>" +
                                       "<div class='edits'>" +
                                           "<i class='fas fa-pencil-alt c-orange'></i>" +
                                           "<i class='far fa-trash-alt c-red'></i>" +
                                           "<i class='fas fa-check c-green'></i>" +
                                       "</div>" +
                                   "</header>" +
                                   "<textarea placeholder='Nova Nota'></textarea>" +
                               "</div>");

           return this.box_single_note;

    }

    clickNote(){
        this.i = 0;
        console.log(this.box_single_note.querySelectorAll(".note")[this.i]); // return NodeList(div.note)
         this.i++;
         console.log(this.i)
    }


}
